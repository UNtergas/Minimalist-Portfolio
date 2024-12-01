import { Metadata } from "next";
import React from "react";
import DetailPageHeader from "@/containers/DetailPageHeader";


export const metadata: Metadata = {
    title: 'Perso Thoughts',
    description: 'My reflections on the projects I have worked on',
}



export default function ProjectLayout({ children, }: Readonly<{children: React.ReactNode }>) {
    return (
        <div>
            <DetailPageHeader/>
            {children}
        </div>

    );
}