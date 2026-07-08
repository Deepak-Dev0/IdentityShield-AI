import {
  ProfileAnalysisRequest,
  ProfileAnalysisResponse,
} from "@/types/profile";
export async function getAllHistory() {

    return await getAllProfileAnalyses();

}
export async function deleteProfile(id: number) {
  const response = await fetch(
    `${API_BASE_URL}/profile-analysis/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Delete failed");
  }

  return response.json();
}


export async function searchProfiles(query: string) {

    const response = await fetch(
        `${API_BASE_URL}/profile-analysis/search/?query=${query}`
    );

    if (!response.ok)
        throw new Error("Search failed");

    return response.json();

}

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

export async function downloadAllHistoryCSV() {

    const profiles = await getAllProfileAnalyses();

    const header =
        "ID,Username,Platform,Risk Score,Risk Level,Fake,Created At\n";

    const rows = profiles.map(
        (p) =>
            `${p.id},${p.username},${p.platform},${p.risk_score},${p.risk_level},${p.is_fake},${p.created_at}`
    );

    const csv = header + rows.join("\n");

    const blob = new Blob(
        [csv],
        {
            type: "text/csv",
        }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "all-history.csv";

    a.click();

    URL.revokeObjectURL(url);

}

export async function downloadAllHistoryJSON() {

    const profiles = await getAllProfileAnalyses();

    const blob = new Blob(
        [
            JSON.stringify(
                profiles,
                null,
                2
            ),
        ],
        {
            type: "application/json",
        }
    );

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "all-history.json";

    a.click();

    URL.revokeObjectURL(url);

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
