import "./globals.css";
import { MainSidebar } from "@/components/customized-components/main-sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="flex h-screen overflow-hidden ">
                    {/* Sidebar */}
                    <MainSidebar />

                    {/* Main content */}
                    <main className="flex-1 overflow-y-auto ">{children}</main>
                </div>
            </body>
        </html>
    );
}
