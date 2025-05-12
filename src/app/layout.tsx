// src/app/layout.tsx
"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { MainSidebar } from "@/components/customized-components/main-sidebar";
import { useState } from "react";
// import BackgroundGrid from "@/components/customized-components/background-grid";

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
            <body className={`${inter.className} bg-background text-foreground font-sans`}>
                {/* full‑screen, interactive background grid */}
                {/* <BackgroundGrid /> */}

                <div className="relative flex flex-col md:flex-row min-h-screen">
                    <div className="fixed top-0 left-0 h-screen z-40 md:relative">
                        <MainSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
                    </div>
                    <div className="flex-1 w-full md:ml-[300px]">
                        {" "}
                        {/* Add margin-left on desktop to account for sidebar width */}
                        <div className="h-12 md:h-0 block md:hidden" />
                        <main className="relative z-10 flex-1 w-full overflow-y-auto">{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
