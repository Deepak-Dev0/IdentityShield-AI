from sqlalchemy.orm import Session

from app.ai.risk_engine import analyze_profile
from app.models.profile_analysis import ProfileAnalysis
from app.schemas.profile_analysis import ProfileAnalysisCreate


def create_profile_analysis(
    db: Session,
    profile: ProfileAnalysisCreate,
) -> ProfileAnalysis:

    analysis = analyze_profile(
        username=profile.username,
        platform=profile.platform,
    )

    db_profile = ProfileAnalysis(
        username=profile.username,
        platform=profile.platform,
        risk_score=analysis["risk_score"],
        risk_level=analysis["risk_level"],
        is_fake=analysis["is_fake"],
    )

    db.add(db_profile)

    db.commit()

    db.refresh(db_profile)

    return db_profile


def get_all_profile_analyses(db: Session):
    return db.query(ProfileAnalysis).order_by(ProfileAnalysis.id.desc()).all()


def get_profile_analysis_by_id(
    db: Session,
    profile_id: int,
):
    return (
        db.query(ProfileAnalysis)
        .filter(ProfileAnalysis.id == profile_id)
        .first()
    )
