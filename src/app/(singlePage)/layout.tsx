import type { Metadata } from "next";
import Header from "@/containers/Header";


export const metadata: Metadata = {
    title: 'Next.js Content Page',
    description: 'Learn how to route to different pages.',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            {children}
        </div>

    );
}