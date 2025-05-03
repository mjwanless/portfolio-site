import "./globals.css";
import { Inter } from "next/font/google";
import { MainSidebar } from "@/components/customized-components/main-sidebar";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable}`}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body
                className={`
                    ${inter.className} 
                    bg-background 
                    text-foreground 
                    font-sans
                `}>
                {/* Existing layout code remains the same */}
                <div className="relative flex flex-col md:flex-row min-h-screen">
                    <div className="relative z-40">
                        <MainSidebar />
                    </div>

                    <div className="relative flex-1 w-full">
                        <div className="h-12 md:h-0 block md:hidden"></div>
                        <main className="flex-1 w-full overflow-y-auto">{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
