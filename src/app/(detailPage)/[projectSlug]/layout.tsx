import { Metadata } from "next";
import React from "react";
import DetailPageHeader from "@/containers/DetailPageHeader";


export const metadata: Metadata = {
    title: 'SinglePage',
    description: 'Detail page for projects.',
}



export default function ProjectLayout({ children, }: Readonly<{children: React.ReactNode }>) {
    return (
        <div>
            <DetailPageHeader/>
            {children}
        </div>

    );
}