from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from database import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    slug = Column(String(100), unique=True, index=True, nullable=False)
    title = Column(String(200), nullable=False)
    tagline = Column(String(300), nullable=False)
    description = Column(Text, nullable=False)
    role = Column(String(100), default="Lead Engineer & Designer")
    tech_stack = Column(Text, nullable=False)  # Comma-separated or JSON list
    github_url = Column(String(300), nullable=True)
    live_url = Column(String(300), nullable=True)
    image_url = Column(String(500), nullable=True)
    category = Column(String(50), default="Full-Stack")
    featured = Column(Boolean, default=True)
    order = Column(Integer, default=0)
    year = Column(String(10), default="2025")
    created_at = Column(DateTime, default=datetime.utcnow)

class ContactMessage(Base):
    __tablename__ = "contact_messages"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(150), nullable=False)
    subject = Column(String(200), nullable=True)
    message = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
