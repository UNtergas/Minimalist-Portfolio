import type {Metadata} from "next";
import React from "react";


export const metadata: Metadata = {
    title: "About page",
    description: "The about page",
};

export default function AboutLayout({
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


