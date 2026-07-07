from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ProfileAnalysisCreate(BaseModel):
    username: str
    platform: str
    risk_score: float
    risk_level: str
    is_fake: bool


class ProfileAnalysisResponse(ProfileAnalysisCreate):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
