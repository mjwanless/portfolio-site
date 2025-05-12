"use client";

import React from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/components/ui/sidebar";

interface MainSidebarProps {
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MainSidebar({ open, setOpen }: MainSidebarProps) {
    const pathname = usePathname();
    const links = [
        {
            label: "About",
            href: "/about",
            icon: null,
        },
        {
            label: "Projects",
            href: "/projects",
            icon: null,
        },
        {
            label: "Skills",
            href: "/skills",
            icon: null,
        },
        {
            label: "Contact",
            href: "/contact",
            icon: null,
        },
    ];

    return (
        <Sidebar open={open} setOpen={setOpen} animate={false}>
            <SidebarBody className="justify-between gap-10">
                {/* Top: Logo + Navigation */}
                <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                    <LogoWithClose />
                    {/* Navigation links with tighter vertical spacing */}
                    <div className="mt-16 flex flex-col gap-4">
                        {links.map((link, idx) => (
                            <div key={idx} className="flex justify-center">
                                <SidebarLink
                                    link={link}
                                    className={pathname === link.href ? "bg-sidebar-primary/10 hover:bg-sidebar-primary/10 !border-transparent" : ""}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </SidebarBody>
        </Sidebar>
    );
}

export const LogoWithClose = () => {
    const { setOpen } = useSidebar();

    const handleClick = () => {
        // Always close the sidebar when the logo is clicked on mobile
        if (window.innerWidth < 768) {
            setOpen(false);
        }
    };

    return (
        <Link href="/" className="relative z-20 flex justify-center items-center px-4 py-8 text-sidebar-foreground" onClick={handleClick}>
            <div className="flex justify-center w-full">
                <div className="h-24 w-24 overflow-hidden rounded-full border-3 border-sidebar-primary">
                    <img src="/images/logos/logo-dark-letters.png" alt="Malcolm Logo" className="h-full w-full object-cover" />
                </div>
            </div>
        </Link>
    );
};
