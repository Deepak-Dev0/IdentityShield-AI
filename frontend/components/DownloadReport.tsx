"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function DownloadReport() {
  async function downloadPDF() {
    const report = document.getElementById("report");

    if (!report) return;

    const canvas = await html2canvas(report);

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const width = 190;

    const height =
      (canvas.height * width) / canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      10,
      10,
      width,
      height
    );

    pdf.save("IdentityShield_Report.pdf");
  }

  return (
    <button
      onClick={downloadPDF}
      className="
      mt-6
      rounded-xl
      bg-gradient-to-r
      from-purple-600
      to-cyan-500
      px-6
      py-3
      font-bold
      hover:scale-105
      transition-all
      "
    >
      📄 Download AI Report
    </button>
  );
}

