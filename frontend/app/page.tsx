"use client";
import AnalysisPanel from "@/components/AnalysisPanel";
import LoadingOverlay from "@/components/LoadingOverlay";
import ProfileForm from "@/components/ProfileForm";
import ProfileList from "@/components/ProfileList";
import { getAllProfileAnalyses } from "@/services/api";
import { ProfileAnalysisResponse } from "@/types/profile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState<ProfileAnalysisResponse[]>([]);
  const [latestProfile, setLatestProfile] =
  useState<ProfileAnalysisResponse | null>(null);

  async function fetchProfiles() {
    try {
      const data = await getAllProfileAnalyses();

setProfiles(data);

if (data.length > 0) {
  setLatestProfile(data[0]);
}
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const loadProfiles = async () => {
        await fetchProfiles();
    };

    loadProfiles();
}, []);

  return (
    <>
    <LoadingOverlay loading={loading} />


    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      <div className="absolute inset-0 overflow-hidden">

  <div
    className="
      absolute
      -top-32
      -left-32
      h-96
      w-96
      rounded-full
      bg-cyan-500/20
      blur-3xl
    "
  />

  <div
    className="
      absolute
      top-1/2
      right-0
      h-[450px]
      w-[450px]
      rounded-full
      bg-blue-600/20
      blur-3xl
    "
  />

  <div
    className="
      absolute
      bottom-0
      left-1/2
      h-[350px]
      w-[350px]
      rounded-full
      bg-purple-600/20
      blur-3xl
    "
  />

</div>
<div
  id="report"
  className="relative z-10"
>
      <div className="max-w-7xl mx-auto px-8 py-8">

  <div className="text-center mb-8">

    <motion.h1
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl md:text-6xl font-bold"
>
  IdentityShield AI
</motion.h1>

    <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
  className="text-xl text-gray-300 mt-4"
>
  Detect suspicious social media accounts using AI-powered profile analysis.
</motion.p>


  </div>


<div className="grid lg:grid-cols-2 gap-8 mb-12">

    <ProfileForm
        onProfileCreated={fetchProfiles}
        loading={loading}
        setLoading={setLoading}
        setLatestProfile={setLatestProfile}
    />

    <div className="space-y-6">

        <AnalysisPanel
    profile={latestProfile}
    profiles={profiles}
/>

    </div>

</div>

<ProfileList
    profiles={profiles.slice(0, 4)}
/>

</div>
</div>
    </main>
    </>
  );
}
