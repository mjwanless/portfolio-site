"use client";
import { cn } from "@/lib/utils";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { colors } from "@/lib/colors";

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
                className={cn("h-screen py-4 hidden md:flex md:flex-col bg-sidebar w-[300px] shrink-0", className)}
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

    // Function to handle closing with delay
    const handleClose = () => {
        // Use setTimeout to delay the actual state change
        setTimeout(() => {
            setOpen(false);
        }, 500); // 500ms delay
    };

    return (
        <>
            <div
                className={cn("h-16 flex flex-row md:hidden items-center w-full", className)}
                style={{
                    backgroundColor: "#f4f1de", // cream background
                    boxShadow: "none",
                    padding: "0 1rem", // Even padding on both sides
                }}
                {...props}>
                <div className="flex items-center justify-end w-full">
                    <AnimatePresence initial={false} mode="wait">
                        {!open ? (
                            <motion.div
                                key="hamburger"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}>
                                <IconMenu2
                                    style={{ color: "#3d405b" }} // navy color for the hamburger
                                    className="h-8 w-8 cursor-pointer" // Larger hamburger icon
                                    onClick={() => setOpen(true)}
                                />
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </div>
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ x: "-100%", opacity: 1 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                            }}
                            className={cn("fixed h-full w-full inset-0 z-[100] flex flex-col", className)}
                            style={{ backgroundColor: "#3d405b" }} // Navy background for open menu
                        >
                            <div className="p-10 flex flex-col flex-1">
                                <div className="flex justify-end mb-8">
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}>
                                        <IconX
                                            style={{ color: "#f4f1de" }} // cream color for the X
                                            className="h-8 w-8 cursor-pointer" // Match size with hamburger
                                            onClick={handleClose} // Use delayed close handler
                                        />
                                    </motion.div>
                                </div>
                                <div className="flex-1">{children}</div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export const SidebarLink = ({ link, className, ...props }: { link: Links; className?: string }) => {
    const { open, setOpen, animate } = useSidebar();
    const pathname = usePathname(); // Get current pathname

    // Check exact path match
    const isActive = pathname === link.href;

    const handleClick = () => {
        // Close the sidebar on mobile when a link is clicked
        if (window.innerWidth < 768) {
            setOpen(false);
        }
    };

    return (
        <div className={cn("w-full", className)}>
            <Link href={link.href} onClick={handleClick} className="block w-full" {...props}>
                <div
                    className="flex items-center justify-center py-5 px-6 transition-all duration-300 ease-in-out group relative"
                    style={{
                        backgroundColor: isActive ? "#f4f1de" : undefined,
                        borderTop: isActive ? "3px solid #e07a5f" : "3px solid transparent",
                        borderBottom: isActive ? "3px solid #e07a5f" : "3px solid transparent",
                    }}>
                    {link.icon && <div className="mr-4">{link.icon}</div>}

                    <span
                        className="text-2xl font-medium whitespace-pre inline-block transition-all duration-300 ease-in-out"
                        style={{
                            color: isActive ? "#e07a5f" : "#f4f1de",
                        }}
                        onMouseEnter={(e) => {
                            if (!isActive) {
                                e.currentTarget.style.color = "#e07a5f";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!isActive) {
                                e.currentTarget.style.color = "#f4f1de";
                            }
                        }}>
                        {link.label}
                    </span>

                    {/* Right border indicator - removed for simplicity */}
                </div>
            </Link>
        </div>
    );
};
