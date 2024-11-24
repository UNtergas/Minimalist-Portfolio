
import type { Metadata } from "next";
import { Inter } from 'next/font/google'

import React from "react";
import '@/styles/main.css';
import Header from "@/containers/Header";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

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
      <body className={inter.className}>
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
