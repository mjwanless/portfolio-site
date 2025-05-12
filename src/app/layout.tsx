// src/app/layout.tsx
"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { MainSidebar } from "@/components/customized-components/main-sidebar";
import { useState } from "react";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <html lang="en" className={inter.variable}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className={`${inter.className} bg-background text-foreground font-sans overflow-x-hidden`}>
                {/* Mobile top bar - only visible on mobile */}
                <div className="block md:hidden sticky top-0 left-0 right-0 z-50">
                    <MainSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
                </div>

                <div className="flex flex-col md:flex-row min-h-screen">
                    {/* Desktop sidebar - only visible on desktop */}
                    <div className="hidden md:block fixed top-0 left-0 h-screen z-40">
                        <MainSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
                    </div>

                    {/* Main content */}
                    <div className="w-full md:ml-[300px]">
                        <main className="w-full min-h-screen">{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
