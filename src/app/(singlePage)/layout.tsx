import type { Metadata } from "next";
import Header from "@/containers/Header";


export const metadata: Metadata = {
    title: 'Tubab-Portfolio',
    description: 'A minimalist portfolio website for a chill guy',
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