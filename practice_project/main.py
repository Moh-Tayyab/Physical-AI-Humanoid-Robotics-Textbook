from qdrant_client import QdrantClient
from dotenv import load_dotenv
import os

# .env file load karo
load_dotenv()

QDRANT_URL = os.getenv("QDRANT_URL")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")

# Qdrant client connect
client = QdrantClient(
    url=QDRANT_URL,
    api_key=QDRANT_API_KEY
)

# Connection test
try:
    collections = client.get_collections()
    print("✅ Successfully Connected to Qdrant Cloud!")
    print("📂 Collections:", collections)
except Exception as e:
    print("❌ Connection Failed!")
    print("Error:", e)
