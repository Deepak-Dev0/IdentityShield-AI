from app.db.database import Base, engine

# Import all models so SQLAlchemy knows about them
from app.models import ProfileAnalysis


def create_tables():
    print("\nCreating database tables...\n")

    Base.metadata.create_all(bind=engine)

    print("\n✅ All tables created successfully!\n")


if __name__ == "__main__":
    create_tables()
