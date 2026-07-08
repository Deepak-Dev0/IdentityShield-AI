"use client";

import { ProfileAnalysisResponse } from "@/types/profile";
import { Activity, AlertTriangle, Shield } from "lucide-react";

interface Props {
    profiles: ProfileAnalysisResponse[];
}

export default function DashboardStats({
    profiles,
}: Props) {

    const total = profiles.length;

    const fake = profiles.filter(
        p => p.is_fake
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

    return (

        <div className="grid md:grid-cols-3 gap-5 mb-12">

            <div className="rounded-2xl bg-cyan-500/10 border border-cyan-400/20 p-4">

                <Shield className="text-cyan-400 mb-3" />

                <h3 className="text-gray-400">
                    Profiles Analyzed
                </h3>

                <p className="text-4xl font-bold mt-2">
                    {total}
                </p>

            </div>

            <div className="rounded-2xl bg-red-500/10 border border-red-400/20 p-4">

                <AlertTriangle className="text-red-400 mb-3" />

                <h3 className="text-gray-400">
                    Fake Profiles
                </h3>

                <p className="text-4xl font-bold mt-2">
                    {fake}
                </p>

            </div>

            <div className="rounded-2xl bg-green-500/10 border border-green-400/20 p-4">

                <Activity className="text-green-400 mb-3" />

                <h3 className="text-gray-400">
                    Average Risk
                </h3>

                <p className="text-4xl font-bold mt-2">
                    {average}%
                </p>

            </div>

        </div>

    );

}
