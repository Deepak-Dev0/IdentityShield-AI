def analyze_profile(username: str, platform: str):
    risk_score = 0

    # Rule 1
    if len(username) > 15:
        risk_score += 20

    # Rule 2
    if any(char.isdigit() for char in username):
        risk_score += 25

    # Rule 3
    if "_" in username:
        risk_score += 10

    # Rule 4
    if platform == "Instagram":
        risk_score += 5

    if risk_score >= 70:
        risk_level = "High"
    elif risk_score >= 40:
        risk_level = "Medium"
    else:
        risk_level = "Low"

    is_fake = risk_score >= 50

    return {
        "risk_score": risk_score,
        "risk_level": risk_level,
        "is_fake": is_fake,
    }
