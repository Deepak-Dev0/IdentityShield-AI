"use client";

import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface Props {
    children: React.ReactNode;
}

export default function AppShell({
    children,
}: Props) {

    const [open, setOpen] = useState(false);

    return (

        <>

            <Sidebar
                open={open}
                setOpen={setOpen}
            />

            <Navbar
                open={open}
            />

            <main
                className={`
                pt-20
                transition-all
                duration-300
                ${open ? "ml-64" : "ml-20"}
                `}
            >

                {children}

            </main>

        </>

    );

}
