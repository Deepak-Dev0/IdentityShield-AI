from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException

from app.db.session import get_db
from app.schemas.profile_analysis import (
    ProfileAnalysisCreate,
    ProfileAnalysisResponse,
)

from app.services.profile_analysis_service import (
    create_profile_analysis,
    get_all_profile_analyses,
    get_profile_analysis_by_id,
    delete_profile_analysis,
    search_profile_analyses,
)

router = APIRouter(
    prefix="/profile-analysis",
    tags=["Profile Analysis"],
)


@router.post(
    "/",
    response_model=ProfileAnalysisResponse,
)

#1
def create_profile(
    profile: ProfileAnalysisCreate,
    db: Session = Depends(get_db),
):
    return create_profile_analysis(db, profile)


@router.get(
    "/",
    response_model=list[ProfileAnalysisResponse],
)
def get_all_profiles(
    db: Session = Depends(get_db),
):
    return get_all_profile_analyses(db)

@router.get("/search/")
def search_profiles(
    query: str,
    db: Session = Depends(get_db),
):
    return search_profile_analyses(
        db,
        query,
    )


@router.get(
    "/{profile_id}",
    response_model=ProfileAnalysisResponse,
)
def get_profile(
    profile_id: int,
    db: Session = Depends(get_db),
):
    return get_profile_analysis_by_id(db, profile_id)

@router.delete("/{profile_id}")
def delete_profile(
    profile_id: int,
    db: Session = Depends(get_db),
):
    profile = delete_profile_analysis(db, profile_id)

    if profile is None:
        raise HTTPException(
            status_code=404,
            detail="Profile not found",
        )

    return {"message": "Deleted successfully"}
