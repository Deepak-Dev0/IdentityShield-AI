"use client";

import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import { AnimatePresence, motion } from "framer-motion";
import {
  Gauge,
  ShieldAlert,
  ShieldCheck
} from "lucide-react";
import "react-circular-progressbar/dist/styles.css";

import { ProfileAnalysisResponse } from "@/types/profile";

interface LiveResultProps {
  profile: ProfileAnalysisResponse | null;
}

export default function LiveResult({
  profile,
}: LiveResultProps) {

  return (

    <AnimatePresence>

      {profile && (

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
          mt-10
          rounded-3xl
          border
          border-cyan-500/30
          bg-white/5
          backdrop-blur-xl
          p-8
          shadow-2xl
          shadow-cyan-500/20
          "
        >

          <h2 className="text-3xl font-bold mb-8 text-cyan-300">
            AI Analysis Result
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div>

              <div className="flex items-center gap-8">

  <div className="w-32 h-32">

    <CircularProgressbar
      value={profile.risk_score}
      text={`${profile.risk_score}%`}
      styles={buildStyles({

        pathColor:
          profile.risk_score >= 70
            ? "#ef4444"
            : profile.risk_score >= 40
            ? "#facc15"
            : "#22c55e",

        textColor: "#ffffff",

        trailColor: "#1f2937",

      })}
    />

  </div>

  <div>

    <h3 className="text-xl font-bold">
      Risk Assessment
    </h3>

    <p className="text-gray-400 mt-2">
      AI Confidence Level
    </p>

  </div>

</div>
<div
  className={`mt-6 rounded-xl p-5 ${
    profile.is_fake
      ? "bg-red-500/10 border border-red-500/40"
      : "bg-green-500/10 border border-green-500/40"
  }`}
>
  <h3 className="font-bold text-lg">

    {profile.is_fake
      ? "⚠ Suspicious Account"
      : "✅ Genuine Account"}

  </h3>

  <p className="mt-2 text-gray-300">

    {profile.is_fake
      ? "The AI detected characteristics commonly associated with fake profiles."
      : "The AI did not detect suspicious characteristics."}

  </p>

</div>
            </div>

            <div>

              <div className="flex items-center gap-3 mb-5">
                <Gauge className="text-yellow-400"/>

                <span>
                  Risk Score :
                  <strong className="ml-2">
                    {profile.risk_score}%
                  </strong>
                </span>

              </div>

              {profile.is_fake ? (

                <div className="flex items-center gap-3 text-red-400">

                  <ShieldAlert />

                  Fake Profile Detected

                </div>

              ) : (

                <div className="flex items-center gap-3 text-green-400">

                  <ShieldCheck />

                  Genuine Profile

                </div>

              )}

            </div>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}
