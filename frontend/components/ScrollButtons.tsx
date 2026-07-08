"use client";

import { ArrowDown, ArrowUp } from "lucide-react";

export default function ScrollButtons() {

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    function scrollBottom() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }

    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

            <button
                onClick={scrollTop}
                className="w-12 h-12 rounded-full bg-cyan-600 hover:bg-cyan-500 flex items-center justify-center shadow-lg"
            >
                <ArrowUp size={22} />
            </button>

            <button
                onClick={scrollBottom}
                className="w-12 h-12 rounded-full bg-cyan-600 hover:bg-cyan-500 flex items-center justify-center shadow-lg"
            >
                <ArrowDown size={22} />
            </button>

        </div>
    );
}
