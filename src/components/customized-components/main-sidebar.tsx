"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconBriefcase, IconAddressBook, IconSchool, IconListCheck, IconStar, IconFlask } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";

export function MainSidebar() {
    const links = [
        {
            label: "About",
            href: "/about",
            icon: <IconAddressBook className="h-6 w-6 shrink-0 text-sidebar-foreground group-hover/sidebar:text-sidebar-primary" />,
        },
        {
            label: "Projects",
            href: "/projects",
            icon: <IconStar className="h-6 w-6 shrink-0 text-sidebar-foreground group-hover/sidebar:text-sidebar-primary" />,
        },
        {
            label: "Skills",
            href: "/skills",
            icon: <IconSchool className="h-6 w-6 shrink-0 text-sidebar-foreground group-hover/sidebar:text-sidebar-primary" />,
        },
        {
            label: "Contact",
            href: "/contact",
            icon: <IconListCheck className="h-6 w-6 shrink-0 text-sidebar-foreground group-hover/sidebar:text-sidebar-primary" />,
        },
    ];

    const [open, setOpen] = useState(false);

    return (
        <Sidebar open={open} setOpen={setOpen} animate={false}>
            <SidebarBody className="justify-between gap-10">
                {/* Top: Logo + Navigation */}
                <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
                    <Logo />
                    {/* Added more top margin to push links further down */}
                    <div className="mt-24 flex flex-col gap-6">
                        {links.map((link, idx) => (
                            <SidebarLink key={idx} link={link} />
                        ))}
                    </div>
                </div>
            </SidebarBody>
        </Sidebar>
    );
}

export const Logo = () => {
    return (
        <Link href="/" className="relative z-20 flex items-center space-x-3 py-4 px-4 text-sm font-normal text-sidebar-foreground">
            <div className="h-8 w-10 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-sidebar-primary" />
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium whitespace-pre text-sidebar-foreground text-xl">
                Malcolm
            </motion.span>
        </Link>
    );
};
