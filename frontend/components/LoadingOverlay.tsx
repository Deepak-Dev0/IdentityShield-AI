"use client";

import { motion } from "framer-motion";
import AnalysisTimeline from "./AnalysisTimeline";

interface Props {
  loading: boolean;
}

export default function LoadingOverlay({
  loading,
}: Props) {

  if (!loading) return null;

  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
      fixed
      inset-0
      z-[9999]
      bg-black/80
      backdrop-blur-md
      flex
      items-center
      justify-center
      "
    >

      <div className="text-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          className="
          h-24
          w-24
          rounded-full
          border-4
          border-cyan-500
          border-t-transparent
          mx-auto
          mb-8
          "
        />

        <motion.h2

          animate={{
            opacity: [0.5,1,0.5],
          }}

          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}

          className="text-3xl font-bold text-cyan-300"

        >

          AI Scanning...

        </motion.h2>

        <p className="text-gray-400 mt-4">

          Detecting suspicious profile...

        </p>
        <AnalysisTimeline />

      </div>

    </motion.div>

  );

}
