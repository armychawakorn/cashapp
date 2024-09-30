'use client'
import { SessionProvider } from "next-auth/react";
import Nav from "../components/Nav";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SessionProvider>
            <Nav/>
            { children }
        </SessionProvider>
    );
}
