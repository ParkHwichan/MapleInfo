"use client";
import React from 'react'
import DarkModeToggle from "@/components/toggle/darkModeToggle";


export default function Navbar() {

    return (
        <nav className={"sticky top-0 h-navbar-height z-50 p-4 border-b flex flex-row"}>
            <div className={"font-semibold"}>
                Maple Info
            </div>
            <DarkModeToggle/>
        </nav>
    )
}