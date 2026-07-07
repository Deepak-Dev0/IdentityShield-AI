from sqlalchemy import text

from app.db.database import engine


def test_connection():
    try:
        with engine.connect() as connection:
            result = connection.execute(text("SELECT version();"))

            print("\n====================================")
            print("✅ Database Connected Successfully!")
            print("====================================")
            print(result.scalar())
            print("====================================\n")

    except Exception as e:
        print("\n❌ Database Connection Failed!\n")
        print(e)


if __name__ == "__main__":
    test_connection()
