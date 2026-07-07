from fastapi import FastAPI

from app.api.profile_analysis import router as profile_router

app = FastAPI(
    title="IdentityShield AI",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "message": "IdentityShield AI Backend Running"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


app.include_router(profile_router)
