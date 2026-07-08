"use client";

import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import { ProfileAnalysisResponse } from "@/types/profile";

interface Props {
  profiles: ProfileAnalysisResponse[];
}

export default function AnalyticsCharts({ profiles }: Props) {
  const fake = profiles.filter((p) => p.is_fake).length;
  const genuine = profiles.length - fake;

  const pieData = [
    { name: "Fake", value: fake },
    { name: "Genuine", value: genuine },
  ];

  const barData = profiles.slice(-6).map((p) => ({
    name: p.username,
    risk: p.risk_score,
  }));

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-12">

      <div className="rounded-3xl bg-white/5 border border-cyan-500/20 p-6 backdrop-blur-xl">

        <h2 className="text-xl font-bold mb-4">
          Fake vs Genuine
        </h2>

        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={90}
            >
              <Cell fill="#ef4444" />
              <Cell fill="#22c55e" />
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

      </div>

      <div className="rounded-3xl bg-white/5 border border-cyan-500/20 p-6 backdrop-blur-xl">

        <h2 className="text-xl font-bold mb-4">
          Recent Risk Scores
        </h2>

        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="risk" fill="#06b6d4" />
          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}
