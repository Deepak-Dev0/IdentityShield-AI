"use client";
import {
    downloadAllHistoryCSV,
    downloadAllHistoryJSON,
    getAllHistory,
} from "@/services/api";
import { ProfileAnalysisResponse } from "@/types/profile";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Download } from "lucide-react";
import { useState } from "react";
interface Props {
    profiles: ProfileAnalysisResponse[];
}

export default function DownloadMenu({
    profiles,
}: Props) {

    const [open, setOpen] = useState(false);
async function downloadAllHistoryPDF() {

    const data = await getAllHistory();

    const doc = new jsPDF();

    doc.setFontSize(18);

    doc.text("IdentityShield AI - Full History", 14, 20);

    autoTable(doc, {

        startY: 30,

        head: [[
            "ID",
            "Username",
            "Platform",
            "Risk",
            "Level",
            "Fake"
        ]],

        body: data.map((p) => [

            p.id,

            p.username,

            p.platform,

            `${p.risk_score}%`,

            p.risk_level,

            p.is_fake ? "Yes" : "No",

        ]),

    });

    doc.save("all-history.pdf");

}
    function downloadJSON() {

        const blob = new Blob(
            [JSON.stringify(profiles, null, 2)],
            {
                type: "application/json",
            }
        );

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;
        a.download = "history.json";

        a.click();

        URL.revokeObjectURL(url);
    }

    function downloadCSV() {

        const header =
            "ID,Username,Platform,Risk Score,Risk Level,Fake,Created At\n";

        const rows = profiles.map(
            (p) =>
                `${p.id},${p.username},${p.platform},${p.risk_score},${p.risk_level},${p.is_fake},${p.created_at}`
        );

        const csv = header + rows.join("\n");

        const blob = new Blob(
            [csv],
            {
                type: "text/csv",
            }
        );

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;
        a.download = "history.csv";

        a.click();

        URL.revokeObjectURL(url);
    }
function downloadPDF() {

    const doc = new jsPDF();

    doc.setFontSize(18);

    doc.text("IdentityShield AI Report", 14, 20);

    autoTable(doc, {

        startY: 30,

        head: [[
            "ID",
            "Username",
            "Platform",
            "Risk",
            "Level",
            "Fake"
        ]],

        body: profiles.map((p) => [

            p.id,

            p.username,

            p.platform,

            `${p.risk_score}%`,

            p.risk_level,

            p.is_fake ? "Yes" : "No",

        ]),

    });

    doc.save("history-report.pdf");

}
    return (

        <div className="relative">

            <button
                onClick={() => setOpen(!open)}
                className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-cyan-600
                hover:bg-cyan-500
                px-5
                py-3
                transition
                "
            >
                <Download size={18} />

                Download

            </button>

            {open && (

                <div
                    className="
                    absolute
                    right-0
                    mt-3
                    w-64
                    rounded-xl
                    bg-[#111827]
                    border
                    border-cyan-500/20
                    shadow-xl
                    overflow-hidden
                    z-50
                    "
                >

                    <button
    onClick={downloadPDF}
    className="w-full text-left px-5 py-3 hover:bg-cyan-500/20"
>
    PDF (Visible Results)
</button>

                    <button
                        onClick={downloadCSV}
                        className="w-full text-left px-5 py-3 hover:bg-cyan-500/20"
                    >
                        CSV (Visible Results)
                    </button>

                    <button
                        onClick={downloadJSON}
                        className="w-full text-left px-5 py-3 hover:bg-cyan-500/20"
                    >
                        JSON (Visible Results)
                    </button>

                    <hr className="border-gray-700" />

                    <button
    onClick={downloadAllHistoryPDF}
    className="w-full text-left px-5 py-3 hover:bg-cyan-500/20"
>
    PDF (All History)
</button>

                    <button
    onClick={downloadAllHistoryCSV}
    className="w-full text-left px-5 py-3 hover:bg-cyan-500/20"
>
    CSV (All History)
</button>

<button
    onClick={downloadAllHistoryJSON}
    className="w-full text-left px-5 py-3 hover:bg-cyan-500/20"
>
    JSON (All History)
</button>

                </div>

            )}

        </div>

    );

}
