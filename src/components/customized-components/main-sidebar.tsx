"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { IconBriefcase, IconAddressBook, IconSchool, IconListCheck, IconStar, IconFlask } from "@tabler/icons-react";
import { motion } from "motion/react";

export function MainSidebar() {
    const links = [
        {
            label: "About",
            href: "/about",
            icon: <IconAddressBook className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
        },
        {
            label: "Projects",
            href: "/projects",
            icon: <IconStar className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
        },
        {
            label: "Skills",
            href: "/skills",
            icon: <IconSchool className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
        },
        // Let's skip this for now; I might update this later, if it makes sense.
        // {
        //     label: "Experience",
        //     href: "/experience",
        //     icon: <IconBriefcase className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
        // },
        {
            label: "Contact",
            href: "/contact",
            icon: <IconListCheck className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />,
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
                {/* <div>
                    <SidebarLink
                        link={{
                            label: "Malcolm",
                            href: "#",
                            icon: (
                                <img
                                    src="https://assets.aceternity.com/manu.png"
                                    className="h-7 w-7 shrink-0 rounded-full"
                                    width={50}
                                    height={50}
                                    alt="Avatar"
                                />
                            ),
                        }}
                    />
                </div> */}
            </SidebarBody>
        </Sidebar>
    );
}

export const Logo = () => {
    return (
        <a href="/" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black">
            <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" />
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium whitespace-pre text-black dark:text-white">
                Malcolm
            </motion.span>
        </a>
    );
};
