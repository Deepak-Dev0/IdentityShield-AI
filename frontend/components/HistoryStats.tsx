"use client";

import { Activity, AlertTriangle, Shield } from "lucide-react";

interface Props {
  total: number;
  fake: number;
  average: number;
}

export default function HistoryStats({
  total,
  fake,
  average,
}: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-10">

      <div className="rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-6">
        <Shield className="text-cyan-400 mb-3" />
        <h3 className="text-gray-400">Profiles Analyzed</h3>
        <p className="text-4xl font-bold">{total}</p>
      </div>

      <div className="rounded-2xl bg-red-500/10 border border-red-500/20 p-6">
        <AlertTriangle className="text-red-400 mb-3" />
        <h3 className="text-gray-400">Fake Profiles</h3>
        <p className="text-4xl font-bold">{fake}</p>
      </div>

      <div className="rounded-2xl bg-green-500/10 border border-green-500/20 p-6">
        <Activity className="text-green-400 mb-3" />
        <h3 className="text-gray-400">Average Risk</h3>
        <p className="text-4xl font-bold">{average}%</p>
      </div>

    </div>
  );
}
