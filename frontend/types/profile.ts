export interface ProfileAnalysisRequest {
  username: string;
  platform: string;
}

export interface ProfileAnalysisResponse {
  id: number;
  username: string;
  platform: string;
  risk_score: number;
  risk_level: string;
  is_fake: boolean;
  created_at: string;
}
