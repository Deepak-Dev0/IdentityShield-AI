"use client";

import {
    History,
    Home,
    Menu,
    Shield,
    X,
} from "lucide-react";

import Link from "next/link";

interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
    open,
    setOpen,
}: Props) {

    return (

        <>

            <button
                onClick={() => setOpen(!open)}
                className="
                fixed
                top-5
                left-5
                z-50
                bg-cyan-600
                p-3
                rounded-xl
                "
            >

                {open ? <X /> : <Menu />}

            </button>

            <aside
                className={`
                fixed
                top-0
                left-0
                h-screen
                bg-[#111827]
                border-r
                border-cyan-500/20
                transition-all
                duration-300
                overflow-hidden
                z-40
                ${open ? "w-64" : "w-20"}
                `}
            >

                <div className="pt-20">

                    <div className="flex justify-center mb-12">

                        <Shield
                            size={42}
                            className="text-cyan-400"
                        />

                    </div>

                    <nav className="space-y-3 px-4">

                        <Link
                            href="/"
                            className="
                            flex
                            items-center
                            gap-4
                            rounded-xl
                            p-3
                            hover:bg-cyan-500/20
                            transition
                            "
                        >

                            <Home />

                            {open && <span>Dashboard</span>}

                        </Link>

                        <Link
                            href="/history"
                            className="
                            flex
                            items-center
                            gap-4
                            rounded-xl
                            p-3
                            hover:bg-cyan-500/20
                            transition
                            "
                        >

                            <History />

                            {open && <span>History</span>}

                        </Link>

                    </nav>

                </div>

            </aside>

        </>

    );

}
