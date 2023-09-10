'use client';
import React from "react";
import classNames from "@/utils/classNames";
import {useRouter} from "next/navigation";

type CardColor = "red" | "blue" | "green" | "yellow" | "pink" | "purple" | "indigo" | "gray" | "white" | "black"

export default function Card(
    props :{
        href?: string,
        children: React.ReactNode, className?: string}
                             ) {
    const className =
        classNames("p-4 flex rounded-md shadow-md text-white cursor-pointer "
            , props.className,
            props.href ? "hover:bg-opacity-80" : "hover:bg-opacity-100"
            )

    const router = useRouter();

    const handleClick = () => {
        if (props.href) {
            router.push(props.href);
        }
    }

    return <div
        onClick={handleClick}
        style={{
            transition: "all 0.2s ease-in-out",
    }
        }
        className={className}>
        {
            props.children
        }
    </div>
}