import "./globals.css";
import { MainSidebar } from "@/components/customized-components/main-sidebar";
// import { MainSidebar } from "@/components/customized-components/generate-text-component";
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="bg-background text-foreground">
                {/* Mobile-friendly layout */}
                <div className="relative flex flex-col md:flex-row min-h-screen">
                    {/* Sidebar with higher z-index */}
                    <div className="relative z-40">
                        <MainSidebar />
                    </div>

                    {/* Main content wrapper */}
                    <div className="relative flex-1 w-full">
                        {/* Top spacer for mobile header */}
                        <div className="h-12 md:h-0 block md:hidden"></div>

                        {/* Main content */}
                        <main className="flex-1 w-full overflow-y-auto">{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
