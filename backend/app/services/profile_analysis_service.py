from sqlalchemy.orm import Session

from app.models.profile_analysis import ProfileAnalysis
from app.schemas.profile_analysis import ProfileAnalysisCreate


def create_profile_analysis(
    db: Session,
    profile: ProfileAnalysisCreate,
) -> ProfileAnalysis:

    db_profile = ProfileAnalysis(
        username=profile.username,
        platform=profile.platform,
        risk_score=profile.risk_score,
        risk_level=profile.risk_level,
        is_fake=profile.is_fake,
    )

    db.add(db_profile)

    db.commit()

    db.refresh(db_profile)

    return db_profile
