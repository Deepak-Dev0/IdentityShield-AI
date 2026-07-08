"use client";

import { Shield } from "lucide-react";

interface Props {
    open: boolean;
}

export default function Navbar({
    open,
}: Props) {

    return (

        <header
            className={`
                fixed
                top-0
                right-0
                h-20
                bg-[#111827]
                border-b
                border-cyan-500/20
                flex
                items-center
                px-8
                z-30
                transition-all
                duration-300
                ${open ? "left-64" : "left-20"}
            `}
        >

            <div className="flex items-center gap-4">

                <Shield
                    size={32}
                    className="text-cyan-400"
                />

                <div>

                    <h1 className="text-3xl font-bold">
                        IdentityShield AI
                    </h1>

                    <p className="text-gray-400 text-sm">
                        AI Powered Fake Profile Detection
                    </p>

                </div>

            </div>

        </header>

    );

}
