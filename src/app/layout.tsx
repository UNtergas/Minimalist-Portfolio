
import type { Metadata } from "next";
import {Comic_Neue} from "next/font/google";

import React from "react";
import '@/styles/main.css';
import Header from "@/containers/Header";

const font = Comic_Neue({
    subsets: ['latin'],
    weight: ["400", "700"],
    display: 'swap',
})

export const metadata: Metadata = {
  title: "Tubab-Portfolio",
  description: "An simple portfolio website for a very simple person",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <>
            <Header/>
            <div id="page">
                {children}
            </div>
        </>
      </body>
    </html>
  );
}
