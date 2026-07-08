"use client";
import {
  Calendar,
  Gauge,
  Globe,
  ShieldAlert,
  ShieldCheck,
  User,
} from "lucide-react";
import Link from "next/link";

import { ProfileAnalysisResponse } from "@/types/profile";
import { motion } from "framer-motion";
import RiskGauge from "./RiskGauge";

interface ProfileListProps {
  profiles: ProfileAnalysisResponse[];
}

export default function ProfileList({
  profiles,
}: ProfileListProps) {
 return (
  <div>

    <div className="flex justify-between items-center mb-8">

    <h2 className="text-3xl font-bold">
        Recent Analyses
    </h2>

    <Link
        href="/history"
        className="
        text-cyan-400
        hover:text-cyan-300
        font-semibold
        transition
        "
    >
        View Full History →
    </Link>

</div>

    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">

      {profiles.slice(0,4).map((profile) => (

        <motion.div
    key={profile.id}
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{
    y:-10,
    scale:1.03,
    boxShadow:"0px 0px 35px rgba(6,182,212,0.35)"
}}
    transition={{
        duration: 0.4,
    }}
          className="bg-white/5 border border-cyan-500/20 rounded-2xl p-5 backdrop-blur-lg hover:scale-[1.02] hover:border-cyan-400 transition-all duration-300"
        >

          {/* Username */}
          <div className="flex justify-between items-center mb-4">

    <span
        className="
        text-xs
        bg-cyan-500/20
        text-cyan-300
        px-3
        py-1
        rounded-full
        "
    >
        #{profile.id}
    </span>

    <span className="text-xs text-gray-400">
        {new Date(profile.created_at).toLocaleDateString()}
    </span>

</div>
          <div className="flex items-center gap-3 mb-4">

            <User className="text-cyan-400" />

            <h3 className="text-xl font-bold">
              {profile.username}
            </h3>

          </div>

          {/* Platform */}

          <div className="flex items-center gap-2 mb-5 text-gray-300">

            <Globe size={18} />

            {profile.platform}

          </div>
          <div className="flex justify-center mb-6">
    <RiskGauge score={profile.risk_score} />
</div>
          {/* Risk Score */}

          <div className="mb-4">

            <div className="flex justify-between mb-2">

              <span className="flex items-center gap-2">

                <Gauge size={18} />

                Risk Score

              </span>

              <span>{profile.risk_score}%</span>

            </div>

            <div className="w-full bg-gray-700 rounded-full h-3">

              <div
                className="bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 h-3 rounded-full"
                style={{
                  width: `${profile.risk_score}%`,
                }}
              />

            </div>

          </div>

          {/* Risk Badge */}

          <div className="mb-4">

            {profile.risk_level === "High" && (

              <span className="bg-red-600 px-3 py-1 rounded-full">
                HIGH RISK
              </span>

            )}

            {profile.risk_level === "Medium" && (

              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full">
                MEDIUM
              </span>

            )}

            {profile.risk_level === "Low" && (

              <span className="bg-green-600 px-3 py-1 rounded-full">
                LOW
              </span>

            )}

          </div>

          {/* Fake */}

          <div className="flex items-center gap-2 mb-5">

            {profile.is_fake ? (

              <>
                <ShieldAlert className="text-red-500" />

                <span className="text-red-400">
                  Fake Profile
                </span>
              </>

            ) : (

              <>
                <ShieldCheck className="text-green-500" />

                <span className="text-green-400">
                  Genuine Profile
                </span>
              </>

            )}

          </div>

          {/* Date */}

          <div className="flex items-center gap-2 text-gray-500 text-sm">

            <Calendar size={16} />

            {new Date(profile.created_at).toLocaleString()}

          </div>

        </motion.div>

      ))}

    </div>

  </div>
);
}
