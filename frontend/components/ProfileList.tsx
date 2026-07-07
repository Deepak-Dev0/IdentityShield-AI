"use client";

import { ProfileAnalysisResponse } from "@/types/profile";

interface ProfileListProps {
  profiles: ProfileAnalysisResponse[];
}

export default function ProfileList({
  profiles,
}: ProfileListProps) {
  return (
    <div className="mt-10">
      <h2>Saved Profiles</h2>

      {profiles.map((profile) => (
        <div
  key={profile.id}
  className="bg-gray-800 rounded-xl shadow-md p-5 mb-5"
>
          <p>
  <strong>Username:</strong> {profile.username}
</p>

<p>
  <strong>Platform:</strong> {profile.platform}
</p>

<p>
  <strong>Risk Score:</strong> {profile.risk_score}
</p>

<p>
  <strong>Risk Level:</strong> {profile.risk_level}
</p>

<p>
  <strong>Fake Profile:</strong>{" "}
  {profile.is_fake ? "Yes" : "No"}
</p>
        </div>
      ))}
    </div>
  );
}
