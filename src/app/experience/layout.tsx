import type {Metadata} from "next";
import React from "react";


export const metadata: Metadata = {
    title: "Experience page",
    description: "The experience page",
};

export default function ExperienceLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}


