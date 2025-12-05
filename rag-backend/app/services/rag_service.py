from typing import List, Dict, Any, Optional
from app.llm import llm_client
from app.vector_db import vector_db_client
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)

class RAGService:
    def __init__(self):
        self.llm = llm_client
        self.vector_db = vector_db_client

    async def query_full_book(self, question: str, user_id: Optional[str] = None) -> Dict[str, Any]:
        """
        Query the full book for an answer to the question
        """
        try:
            # Create embedding for the question
            question_embedding = await self.llm.embed_text(question)

            # Search in vector database
            search_results = self.vector_db.search(
                query_vector=question_embedding,
                top_k=settings.qdrant_top_k,
                score_threshold=settings.qdrant_score_threshold
            )

            # Generate response using LLM
            response_text = await self.llm.generate_response(
                prompt=question,
                context_chunks=search_results
            )

            # Format response
            sources = [
                {
                    "chapter": chunk["chapter"],
                    "section": chunk["section"],
                    "url": chunk["url"],
                    "similarity": chunk["similarity"]
                }
                for chunk in search_results
            ]

            return {
                "response": response_text,
                "sources": sources,
                "retrievalMetadata": {
                    "chunksRetrieved": len(search_results),
                    "retrievalTimeMs": 0  # This would be calculated in a real implementation
                }
            }
        except Exception as e:
            logger.error(f"Error in query_full_book: {e}")
            raise

    async def query_selected_text(self, question: str, selected_text: str, user_id: Optional[str] = None) -> Dict[str, Any]:
        """
        Query based on selected text only
        """
        try:
            # Validate selected text length
            if len(selected_text) > settings.max_selected_text_length:
                raise ValueError(f"Selected text too long: {len(selected_text)} characters. Maximum allowed: {settings.max_selected_text_length}")

            # Create embedding for the question
            question_embedding = await self.llm.embed_text(question)

            # Create embedding for the selected text
            selected_text_embedding = await self.llm.embed_text(selected_text)

            # For selected text, we'll use a simple approach for now
            # In a real implementation, we might want to rerank results against the selected text
            search_results = self.vector_db.search(
                query_vector=question_embedding,
                top_k=settings.qdrant_top_k,
                score_threshold=settings.qdrant_score_threshold
            )

            # Filter results to only include those that are related to the selected text
            # This is a simplified approach - in reality, we'd want more sophisticated filtering
            filtered_results = []
            for result in search_results:
                if selected_text.lower() in result["text"].lower() or result["text"].lower() in selected_text.lower():
                    filtered_results.append(result)

            # If no relevant results found in selected text, return "Not in selection"
            if not filtered_results:
                response_text = "Not in selection."
            else:
                # Generate response using LLM with filtered context
                response_text = await self.llm.generate_response(
                    prompt=question,
                    context_chunks=filtered_results
                )

            # Format response
            sources = [
                {
                    "chapter": chunk["chapter"],
                    "section": chunk["section"],
                    "url": chunk["url"],
                    "similarity": chunk["similarity"]
                }
                for chunk in filtered_results
            ]

            return {
                "response": response_text,
                "sources": sources,
                "retrievalMetadata": {
                    "chunksRetrieved": len(filtered_results),
                    "retrievalTimeMs": 0  # This would be calculated in a real implementation
                }
            }
        except Exception as e:
            logger.error(f"Error in query_selected_text: {e}")
            raise

rag_service = RAGService()