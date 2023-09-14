"use client";
import React from 'react'
import DarkModeToggle from "@/components/toggle/darkModeToggle";
import Link from "next/link";


export default function Navbar() {

    return (
        <nav className={"sticky top-0 h-navbar-height z-50 p-4 flex flex- bg-background "}>
            <Link href={"/"} className={"font-semibold"}>
                Maple Info
            </Link>
            <DarkModeToggle/>
        </nav>
    )
}