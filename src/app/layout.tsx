
import type { Metadata } from "next";

import React from "react";
import '@/styles/main.css';
import Header from "@/containers/Header";



export const metadata: Metadata = {
  title: "Main page",
  description: "The landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
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
