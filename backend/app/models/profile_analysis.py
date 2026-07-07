from datetime import datetime

from sqlalchemy import Boolean, DateTime, Float, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.database import Base


class ProfileAnalysis(Base):
    __tablename__ = "profile_analysis"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, index=True)

    username: Mapped[str] = mapped_column(String(100), nullable=False)

    platform: Mapped[str] = mapped_column(String(50), nullable=False)

    risk_score: Mapped[float] = mapped_column(Float, nullable=False)

    risk_level: Mapped[str] = mapped_column(String(20), nullable=False)

    is_fake: Mapped[bool] = mapped_column(Boolean, nullable=False)

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )
