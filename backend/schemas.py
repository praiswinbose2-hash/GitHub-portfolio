from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, EmailStr, Field, field_validator

class ProjectBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    slug: str = Field(..., min_length=1, max_length=100)
    tagline: str = Field(..., min_length=1, max_length=300)
    description: str = Field(..., min_length=1)
    role: str = Field(default="Full-Stack Engineer")
    tech_stack: List[str] = Field(default_factory=list)
    github_url: Optional[str] = None
    live_url: Optional[str] = None
    image_url: Optional[str] = None
    category: str = Field(default="Full-Stack")
    featured: bool = True
    order: int = 0
    year: str = "2025"

class ProjectCreate(ProjectBase):
    pass

class ProjectResponse(ProjectBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

    @field_validator("tech_stack", mode="before")
    @classmethod
    def parse_tech_stack(cls, v):
        if isinstance(v, str):
            return [t.strip() for t in v.split(",") if t.strip()]
        return v

class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr = Field(...)
    subject: Optional[str] = Field(None, max_length=200)
    message: str = Field(..., min_length=5, max_length=5000)

class ContactResponse(BaseModel):
    id: int
    name: str
    email: str
    subject: Optional[str]
    message: str
    created_at: datetime
    status: str = "received"

    class Config:
        from_attributes = True
