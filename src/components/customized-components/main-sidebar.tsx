"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconBriefcase, IconAddressBook, IconSchool, IconListCheck, IconStar, IconFlask } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";

// Change these for my own icons later
export function MainSidebar() {
    const links = [
        {
            label: "About",
            href: "/about",
            icon: <IconAddressBook className="h-5 w-5 shrink-0 text-sidebar-foreground group-hover/sidebar:text-sidebar-primary" />,
        },
        {
            label: "Projects",
            href: "/projects",
            icon: <IconStar className="h-5 w-5 shrink-0 text-sidebar-foreground group-hover/sidebar:text-sidebar-primary" />,
        },
        {
            label: "Skills",
            href: "/skills",
            icon: <IconSchool className="h-5 w-5 shrink-0 text-sidebar-foreground group-hover/sidebar:text-sidebar-primary" />,
        },
        {
            label: "Contact",
            href: "/contact",
            icon: <IconListCheck className="h-5 w-5 shrink-0 text-sidebar-foreground group-hover/sidebar:text-sidebar-primary" />,
        },
    ];

    const [open, setOpen] = useState(false);

    return (
        <Sidebar open={open} setOpen={setOpen} animate={false}>
            <SidebarBody className="justify-between gap-10">
                {/* Top: Logo + Navigation */}
                <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                    <Logo />
                    <div className="mt-8 flex flex-col gap-2">
                        {links.map((link, idx) => (
                            <SidebarLink key={idx} link={link} />
                        ))}
                    </div>
                </div>
            </SidebarBody>
        </Sidebar>
    );
}

// I should eliminate the animation portion of this; I'll end up putting my own logo in here later
export const Logo = () => {
    return (
        <Link href="/" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-sidebar-foreground">
            <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-sidebar-primary" />
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium whitespace-pre text-sidebar-foreground">
                Malcolm
            </motion.span>
        </Link>
    );
};
