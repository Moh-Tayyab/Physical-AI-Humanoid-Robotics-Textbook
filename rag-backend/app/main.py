from fastapi import FastAPI
from app.api.health import router as health_router
from app.api.chat import router as chat_router
from app.core.config import settings
from app.middleware.rate_limit import RateLimitMiddleware

# Create FastAPI app instance
app = FastAPI(
    title="RAG Chatbot API",
    description="RAG Chatbot Backend for Physical AI & Humanoid Robotics Textbook",
    version="0.1.0",
    openapi_url="/api/openapi.json",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
)

# Add middleware
app.add_middleware(RateLimitMiddleware)

# Include API routers
app.include_router(health_router, prefix="/api", tags=["health"])
app.include_router(chat_router, prefix="/api", tags=["chat"])

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to the RAG Chatbot API"}

# Include other routers after they are created
# This will be expanded as we implement more features