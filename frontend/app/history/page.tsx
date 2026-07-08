"use client";
import DownloadMenu from "@/components/DownloadMenu";
import HistoryCard from "@/components/HistoryCard";
import HistoryFilters from "@/components/HistoryFilters";
import HistoryStats from "@/components/HistoryStats";
import ScrollButtons from "@/components/ScrollButtons";
import SearchBar from "@/components/SearchBar";
import {
  getAllProfileAnalyses,
  searchProfiles,
} from "@/services/api";

import { ProfileAnalysisResponse } from "@/types/profile";

import { useEffect, useState } from "react";

export default function HistoryPage() {

  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState("");
  const [fromDate, setFromDate] = useState("");
const [toDate, setToDate] = useState("");

  const [profiles, setProfiles] =
    useState<ProfileAnalysisResponse[]>([]);

  useEffect(() => {

    const timer = setTimeout(async () => {

    let data: ProfileAnalysisResponse[];

    if (search.trim() === "") {

        data = await getAllProfileAnalyses();

    } else {

        data = await searchProfiles(search);

    }

    if (platform !== "") {

        data = data.filter(

            (p) => p.platform === platform

        );

    }

    if (fromDate !== "") {

        data = data.filter(

            (p) =>

                new Date(p.created_at)

                >= new Date(fromDate)

        );

    }

    if (toDate !== "") {

        const end = new Date(toDate);

        end.setHours(23, 59, 59);

        data = data.filter(

            (p) =>

                new Date(p.created_at) <= end

        );

    }

    setProfiles(data);

}, 300);

    return () => clearTimeout(timer);

}, [
    search,
    platform,
    fromDate,
    toDate,
]);

  const total = profiles.length;

  const fake = profiles.filter(
    (p) => p.is_fake
  ).length;

  const average =
    total === 0
      ? 0
      : Math.round(
          profiles.reduce(
            (sum, p) => sum + p.risk_score,
            0
          ) / total
        );
function handleDelete(id: number) {

    setProfiles((prev) =>
        prev.filter((p) => p.id !== id)
    );

}
  return (

    <main className="min-h-screen bg-[#030712] text-white">

      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Heading + Search */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">

          <h1 className="text-5xl font-bold">
            Analysis History
          </h1>

         <div className="flex gap-4 w-full md:w-auto">

    <div className="w-96">

        <SearchBar
            search={search}
            setSearch={setSearch}
        />

    </div>

    <DownloadMenu
    profiles={profiles}
/>

</div>

        </div>

        {/* Filters */}

        <div className="mb-8">

          <HistoryFilters
    platform={platform}
    setPlatform={setPlatform}

    fromDate={fromDate}
    setFromDate={setFromDate}

    toDate={toDate}
    setToDate={setToDate}
/>

        </div>

        {/* Stats */}

        <HistoryStats
          total={total}
          fake={fake}
          average={average}
        />

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {profiles.map((profile) => (

            <HistoryCard
    key={profile.id}
    profile={profile}
    onDelete={handleDelete}
/>

          ))}

        </div>

      </div>
<ScrollButtons />
    </main>

  );

}
