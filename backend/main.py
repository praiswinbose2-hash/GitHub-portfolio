from contextlib import asynccontextmanager
from typing import List, Optional
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import or_

from database import engine, Base, get_db
from models import Project, ContactMessage
from schemas import ProjectResponse, ProjectCreate, ContactCreate, ContactResponse
from seed import seed_database

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Auto-initialize database tables and seed if empty
    Base.metadata.create_all(bind=engine)
    seed_database()
    yield

app = FastAPI(
    title="Portfolio API",
    description="Backend API powering projects showcase and contact form.",
    version="1.0.0",
    lifespan=lifespan,
)

# CORS configuration for frontend local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=["System"])
def read_root():
    return {
        "status": "ok",
        "message": "Portfolio API is online",
        "docs": "/docs",
    }

@app.get("/api/health", tags=["System"])
def health_check():
    return {"status": "healthy"}

@app.get("/api/projects", response_model=List[ProjectResponse], tags=["Projects"])
def get_projects(
    featured_only: Optional[bool] = None,
    category: Optional[str] = None,
    db: Session = Depends(get_db),
):
    query = db.query(Project)
    if featured_only is not None:
        query = query.filter(Project.featured == featured_only)
    if category:
        query = query.filter(Project.category.ilike(f"%{category}%"))
    projects = query.order_by(Project.order.asc(), Project.created_at.desc()).all()
    return projects

@app.get("/api/projects/{identifier}", response_model=ProjectResponse, tags=["Projects"])
def get_project_by_identifier(identifier: str, db: Session = Depends(get_db)):
    if identifier.isdigit():
        project = db.query(Project).filter(Project.id == int(identifier)).first()
    else:
        project = db.query(Project).filter(Project.slug == identifier).first()

    if not project:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Project with identifier '{identifier}' not found",
        )
    return project

@app.post(
    "/api/contact",
    response_model=ContactResponse,
    status_code=status.HTTP_201_CREATED,
    tags=["Contact"],
)
def create_contact_message(
    payload: ContactCreate,
    db: Session = Depends(get_db),
):
    new_message = ContactMessage(
        name=payload.name.strip(),
        email=payload.email.strip().lower(),
        subject=payload.subject.strip() if payload.subject else None,
        message=payload.message.strip(),
    )
    db.add(new_message)
    db.commit()
    db.refresh(new_message)
    return new_message

@app.get(
    "/api/contact/messages",
    response_model=List[ContactResponse],
    tags=["Contact"],
)
def get_contact_messages(db: Session = Depends(get_db)):
    messages = (
        db.query(ContactMessage)
        .order_by(ContactMessage.created_at.desc())
        .all()
    )
    return messages
