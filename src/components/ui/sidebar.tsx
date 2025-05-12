"use client";
import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";

interface Links {
    label: string;
    href: string;
    icon: React.JSX.Element | React.ReactNode;
}

interface SidebarContextProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};

export const SidebarProvider = ({
    children,
    open: openProp,
    setOpen: setOpenProp,
    animate = true,
}: {
    children: React.ReactNode;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animate?: boolean;
}) => {
    const [openState, setOpenState] = useState(false);

    const open = openProp !== undefined ? openProp : openState;
    const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

    return <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>{children}</SidebarContext.Provider>;
};

export const Sidebar = ({
    children,
    open,
    setOpen,
    animate,
}: {
    children: React.ReactNode;
    open?: boolean;
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
    animate?: boolean;
}) => {
    return (
        <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
            {children}
        </SidebarProvider>
    );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
    return (
        <>
            <DesktopSidebar {...props} />
            <MobileSidebar {...(props as React.ComponentProps<"div">)} />
        </>
    );
};

export const DesktopSidebar = ({ className, children, ...props }: React.ComponentProps<typeof motion.div>) => {
    const { open, setOpen, animate } = useSidebar();
    return (
        <>
            <motion.div
                className={cn(
                    "h-screen py-4 hidden md:flex md:flex-col bg-sidebar w-[300px] shrink-0 border-r-3 border-sidebar-primary fixed",
                    className
                )}
                animate={{
                    width: animate ? (open ? "300px" : "60px") : "300px",
                }}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                {...props}>
                {children}
            </motion.div>
        </>
    );
};

export const MobileSidebar = ({ className, children, ...props }: React.ComponentProps<"div">) => {
    const { open, setOpen } = useSidebar();
    return (
        <>
            <div
                className={cn(
                    "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-sidebar w-full border-b-3 border-sidebar-primary",
                    className
                )}
                {...props}>
                <div className="flex justify-end z-20 w-full">
                    <IconMenu2 className="text-sidebar-foreground" onClick={() => setOpen(!open)} />
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                            }}
                            className={cn(
                                "fixed h-full w-full inset-0 bg-sidebar p-10 z-[100] flex flex-col justify-between border-r-3 border-sidebar-primary",
                                className
                            )}>
                            <div className="absolute right-10 top-10 z-50 text-sidebar-foreground" onClick={() => setOpen(!open)}>
                                <IconX />
                            </div>
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export const SidebarLink = ({ link, className, ...props }: { link: Links; className?: string }) => {
    const { open, animate } = useSidebar();
    return (
        <Link
            href={link.href}
            className={cn(
                "flex items-center justify-center py-5 px-6 -mx-4 w-[calc(100%+32px)] transition-colors duration-100 group hover:bg-sidebar-accent hover:border-y-3 hover:border-sidebar-primary border-transparent relative",
                className
            )}
            {...props}>
            {link.icon && <div className="mr-4">{link.icon}</div>}

            <span className="text-sidebar-foreground text-2xl font-medium group-hover:text-sidebar-primary transition-colors duration-100 whitespace-pre inline-block">
                {link.label}
            </span>

            {/* Cream overlay on right side when hovered */}
            <div className="absolute right-[-3px] top-0 bottom-0 w-[3px] group-hover:bg-[#f4f1de] transition-colors duration-100 z-10"></div>
        </Link>
    );
};
