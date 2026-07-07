import {
    ProfileAnalysisRequest,
    ProfileAnalysisResponse,
} from "@/types/profile";

const API_BASE_URL = "http://127.0.0.1:8000";

export async function createProfileAnalysis(
  profile: ProfileAnalysisRequest
): Promise<ProfileAnalysisResponse> {
  const response = await fetch(`${API_BASE_URL}/profile-analysis/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  });

  if (!response.ok) {
    throw new Error("Failed to create profile analysis");
  }

  return response.json();
}

export async function getAllProfileAnalyses(): Promise<
  ProfileAnalysisResponse[]
> {
  const response = await fetch(`${API_BASE_URL}/profile-analysis/`);

  if (!response.ok) {
    throw new Error("Failed to fetch profiles");
  }

  return response.json();
}

export async function getProfileAnalysis(
  id: number
): Promise<ProfileAnalysisResponse> {
  const response = await fetch(
    `${API_BASE_URL}/profile-analysis/${id}`
  );

  if (!response.ok) {
    throw new Error("Profile not found");
  }

  return response.json();
}
