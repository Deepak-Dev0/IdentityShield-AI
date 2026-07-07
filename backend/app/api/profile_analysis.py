from sqlalchemy.orm import Session

from fastapi import APIRouter, Depends

from app.db.session import get_db
from app.schemas.profile_analysis import (
    ProfileAnalysisCreate,
    ProfileAnalysisResponse,
)
from app.services.profile_analysis_service import create_profile_analysis

router = APIRouter(
    prefix="/profile-analysis",
    tags=["Profile Analysis"],
)


@router.post(
    "/",
    response_model=ProfileAnalysisResponse,
)
def create_profile(
    profile: ProfileAnalysisCreate,
    db: Session = Depends(get_db),
):
    return create_profile_analysis(db, profile)
