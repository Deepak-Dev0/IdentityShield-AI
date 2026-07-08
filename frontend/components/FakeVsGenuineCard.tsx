"use client";

import { ProfileAnalysisResponse } from "@/types/profile";
import { ShieldAlert, ShieldCheck } from "lucide-react";

interface Props {
    profiles: ProfileAnalysisResponse[];
}

export default function FakeVsGenuineCard({
    profiles,
}: Props) {

    const fake = profiles.filter(p => p.is_fake).length;
    const genuine = profiles.length - fake;

    return (

        <div className="rounded-2xl bg-white/5 border border-cyan-500/20 p-6">

            <h2 className="text-xl font-bold mb-6">
                Fake vs Genuine
            </h2>

            <div className="space-y-5">

                <div className="flex justify-between items-center">

                    <div className="flex items-center gap-2">

                        <ShieldAlert className="text-red-500"/>

                        Fake

                    </div>

                    <strong>{fake}</strong>

                </div>

                <div className="flex justify-between items-center">

                    <div className="flex items-center gap-2">

                        <ShieldCheck className="text-green-500"/>

                        Genuine

                    </div>

                    <strong>{genuine}</strong>

                </div>

            </div>

        </div>

    );

}
