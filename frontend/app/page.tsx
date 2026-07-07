"use client";

import { useEffect, useState } from "react";

import ProfileForm from "@/components/ProfileForm";
import ProfileList from "@/components/ProfileList";

import { getAllProfileAnalyses } from "@/services/api";
import { ProfileAnalysisResponse } from "@/types/profile";

export default function Home() {
  const [profiles, setProfiles] = useState<ProfileAnalysisResponse[]>([]);

  async function fetchProfiles() {
    try {
      const data = await getAllProfileAnalyses();
      setProfiles(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white p-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          IdentityShield AI
        </h1>

        <p className="text-gray-400 mt-2">
          AI-powered Social Media Profile Analysis
        </p>
      </div>

      <div className="mb-10">
  <ProfileForm onProfileCreated={fetchProfiles} />
</div>

<ProfileList profiles={profiles} />
    </main>
  );
}
