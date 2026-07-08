"use client";

import {
    ShieldAlert,
    ShieldCheck,
    TrendingUp,
} from "lucide-react";
import {
    CircularProgressbar,
    buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { ProfileAnalysisResponse } from "@/types/profile";

interface Props {
  profile: ProfileAnalysisResponse | null;
  profiles: ProfileAnalysisResponse[];
}

export default function AnalysisPanel({
  profile,
  profiles,
}: Props) {
  return (
    <div className="space-y-6">

      {/* AI Result */}

      <div className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          AI Analysis Result
        </h2>

        {profile ? (

          <div className="flex items-center gap-8">

            <div className="w-36 h-36">

              <CircularProgressbar
                value={profile.risk_score}
                text={`${profile.risk_score}%`}
                styles={buildStyles({
                  pathColor:
                    profile.risk_score >= 70
                      ? "#ef4444"
                      : profile.risk_score >= 40
                      ? "#eab308"
                      : "#22c55e",
                  textColor: "#fff",
                  trailColor: "#1f2937",
                })}
              />

            </div>

            <div>

              <h3 className="text-xl font-bold">
                {profile.username}
              </h3>

              <p className="text-gray-400">
                {profile.platform}
              </p>

              <p className="mt-4 text-lg">

                Risk Level :

                <strong className="ml-2">
                  {profile.risk_level}
                </strong>

              </p>

            </div>

          </div>

        ) : (

          <p className="text-gray-400">
            Analyze a profile...
          </p>

        )}

      </div>

      {/* Bottom */}

      <div className="grid grid-cols-2 gap-6">

        {/* Fake */}

        <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">

          <h3 className="font-bold mb-5">
            Fake vs Genuine
          </h3>

          {profile ? (

            profile.is_fake ? (

              <div className="flex flex-col items-center">

                <ShieldAlert
                  size={60}
                  className="text-red-500"
                />

                <p className="mt-4 text-red-400 font-bold">
                  Fake Profile
                </p>

              </div>

            ) : (

              <div className="flex flex-col items-center">

                <ShieldCheck
                  size={60}
                  className="text-green-500"
                />

                <p className="mt-4 text-green-400 font-bold">
                  Genuine
                </p>

              </div>

            )

          ) : (

            <p>No Data</p>

          )}

        </div>

        {/* Recent */}

        <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-6">

          <h3 className="font-bold mb-5">
            Recent Risk Scores
          </h3>

          <div className="space-y-3">

            {profiles.slice(0,5).map((p)=>(

              <div
                key={p.id}
                className="flex justify-between"
              >

                <span>{p.username}</span>

                <span className="flex items-center gap-2">

                  <TrendingUp size={16}/>

                  {p.risk_score}%

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}
