"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  score: number;
}

export default function RiskGauge({ score }: Props) {
  return (
    <div className="w-36 h-36">

      <CircularProgressbar
        value={score}
        text={`${score}%`}
        styles={buildStyles({
          pathColor:
            score > 70
              ? "#ef4444"
              : score > 40
              ? "#facc15"
              : "#22c55e",

          textColor: "#fff",

          trailColor: "#1f2937",
        })}
      />

    </div>
  );
}
