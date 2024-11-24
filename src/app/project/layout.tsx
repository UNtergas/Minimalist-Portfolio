import type {Metadata} from "next";
import React from "react";


export const metadata: Metadata = {
    title: "Project page",
    description: "The project page",
};

export default function ProjectLayout({
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


