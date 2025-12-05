from openai import AsyncOpenAI
from app.core.config import settings
from typing import List, Dict, Any, Optional
import asyncio
import logging

logger = logging.getLogger(__name__)

class LLMClient:
    def __init__(self):
        self.client = AsyncOpenAI(api_key=settings.openai_api_key)
        self.model = settings.openai_model
        self.embedding_model = settings.embedding_model

    async def generate_response(self, prompt: str, context_chunks: List[Dict[str, Any]] = None) -> str:
        """
        Generate a response using the LLM
        """
        # Build the system message with context
        if context_chunks:
            context_text = "\n\n".join([chunk["text"] for chunk in context_chunks])
            system_message = f"""You are a helpful assistant for the Physical AI & Humanoid Robotics textbook.
            Answer questions based solely on the provided context. If the answer is not in the provided context,
            respond with "Not in selection." and explain why.
            Context:\n{context_text}"""
        else:
            system_message = "You are a helpful assistant for the Physical AI & Humanoid Robotics textbook."

        try:
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": system_message},
                    {"role": "user", "content": prompt}
                ],
                temperature=0.3,
                max_tokens=1000
            )
            return response.choices[0].message.content
        except Exception as e:
            logger.error(f"Error generating response: {e}")
            raise

    async def create_embeddings(self, texts: List[str]) -> List[List[float]]:
        """
        Create embeddings for the given texts
        """
        try:
            response = await self.client.embeddings.create(
                model=self.embedding_model,
                input=texts
            )
            return [item.embedding for item in response.data]
        except Exception as e:
            logger.error(f"Error creating embeddings: {e}")
            raise

    async def embed_text(self, text: str) -> List[float]:
        """
        Create embedding for a single text
        """
        embeddings = await self.create_embeddings([text])
        return embeddings[0] if embeddings else []

# Global instance
llm_client = LLMClient()