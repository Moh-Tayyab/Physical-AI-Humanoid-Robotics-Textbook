from sqlalchemy import Column, DateTime, String, UUID
from sqlalchemy.dialects.postgresql import UUID as PostgresUUID
from sqlalchemy.ext.declarative import declarative_base
from app.database import Base
import uuid
from datetime import datetime


class User(Base):
    __tablename__ = "users"

    user_id = Column(PostgresUUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    created_at = Column(DateTime, default=datetime.utcnow)
    email = Column(String, nullable=True)
    preferences = Column(String, nullable=True)  # JSON string

    def __repr__(self):
        return f"<User(user_id={self.user_id}, email={self.email})>"