import os
import uuid
from datetime import datetime, timezone

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URL = os.environ.get("MONGO_URL")
if not MONGO_URL:
  raise RuntimeError("MONGO_URL environment variable is not set")

client = AsyncIOMotorClient(MONGO_URL)
db = client["cravedao_site"]


class LeadIn(BaseModel):
  email: EmailStr = Field(..., description="Work email of the lead")
  message: str = Field(..., min_length=5, max_length=5000, description="Message from the lead")
  source: str | None = Field(default="website", description="Source of the enquiry, e.g., website/contact_form")


class LeadOut(BaseModel):
  id: str
  email: EmailStr
  message: str
  source: str | None
  created_at: datetime


app = FastAPI(title="CraveDAO Site Backend", version="1.0.0")

# Allow the frontend to call this API from the same Kubernetes domain
app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],  # In production, you may want to restrict this
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)


@app.get("/api/health")
async def health_check() -> dict:
  return {"status": "ok"}


@app.post("/api/leads", response_model=LeadOut)
async def create_lead(payload: LeadIn) -> LeadOut:
  lead_doc = {
    "_id": str(uuid.uuid4()),
    "email": payload.email,
    "message": payload.message,
    "source": payload.source or "website",
    "created_at": datetime.now(timezone.utc),
  }

  try:
    await db["leads"].insert_one(lead_doc)
  except Exception as exc:  # pragma: no cover - defensive
    raise HTTPException(status_code=500, detail="Failed to store lead") from exc

  return LeadOut(
    id=lead_doc["_id"],
    email=lead_doc["email"],
    message=lead_doc["message"],
    source=lead_doc["source"],
    created_at=lead_doc["created_at"],
  )


@app.get("/api/leads", response_model=list[LeadOut])
async def list_leads(limit: int = 50) -> list[LeadOut]:
  cursor = db["leads"].find().sort("created_at", -1).limit(max(limit, 1))
  results: list[LeadOut] = []
  async for doc in cursor:
    results.append(
      LeadOut(
        id=doc.get("_id"),
        email=doc.get("email"),
        message=doc.get("message"),
        source=doc.get("source"),
        created_at=doc.get("created_at"),
      )
    )
  return results
