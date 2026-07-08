"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  "Collecting Username",
  "Checking Platform",
  "Extracting Features",
  "Running AI Engine",
  "Calculating Risk Score",
  "Generating Report",
];

export default function AnalysisTimeline() {
  return (
    <div className="space-y-5 mt-8">

      {steps.map((step, index) => (

        <motion.div
          key={step}
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: index * 0.5,
          }}
          className="flex items-center gap-4"
        >

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: index * 0.3,
            }}
          >
            <CheckCircle
              className="text-cyan-400"
              size={22}
            />
          </motion.div>

          <span className="text-lg text-white">
            {step}
          </span>

        </motion.div>

      ))}

    </div>
  );
}
