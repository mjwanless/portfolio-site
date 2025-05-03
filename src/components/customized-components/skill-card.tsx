"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface RelatedTech {
    id: number;
    name: string;
    icon: string;
}

interface TechStackItem {
    id: number;
    name: string;
    icon: string;
    description: string;
    relatedTech: RelatedTech[];
}

interface SkillCardProps {
    techStackData: TechStackItem[];
}

export default function SkillCard({ techStackData }: SkillCardProps) {
    const [active, setActive] = useState<TechStackItem | boolean | null>(null);
    const [isMobile, setIsMobile] = useState(false);
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    // Check if device is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkIfMobile();

        // Add event listener for window resize
        window.addEventListener("resize", checkIfMobile);

        // Clean up event listener
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            // Only apply overflow: hidden on desktop
            if (!isMobile) {
                document.body.style.overflow = "hidden";
            }
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => {
            // Make sure we clean up properly
            document.body.style.overflow = "auto";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [active, isMobile]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100] p-4">
                        <motion.button
                            key={`button-${active.name}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.05 },
                            }}
                            className="flex absolute top-4 right-4 items-center justify-center bg-[#f4f1de] rounded-full h-8 w-8 shadow-md"
                            onClick={() => setActive(null)}>
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.name}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-[90vh] md:h-auto md:max-h-[90%] flex flex-col bg-[#3d405b] rounded-xl overflow-hidden overflow-y-auto shadow-xl border-3 border-[#e07a5f]">
                            <motion.div layoutId={`image-${active.name}-${id}`}>
                                <div className="w-full h-40 md:h-52 bg-[#3d405b]/80 flex justify-center items-center">
                                    <img
                                        width={80}
                                        height={80}
                                        src={active.icon}
                                        alt={active.name}
                                        className="h-20 w-20 md:h-24 md:w-24 object-contain drop-shadow-md"
                                    />
                                </div>
                            </motion.div>

                            <div className="p-6">
                                <div className="flex justify-between items-start">
                                    <div className="">
                                        <motion.h3 layoutId={`title-${active.name}-${id}`} className="font-bold text-[#f4f1de] text-xl md:text-2xl">
                                            {active.name}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-[#f4f1de]/90 text-sm md:text-base mt-2">
                                            {active.description}
                                        </motion.p>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-[#f4f1de]/90">
                                        <h4 className="text-[#f4f1de] font-medium mb-4 text-lg">Related Technologies</h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {active.relatedTech.map((tech) => (
                                                <div
                                                    key={tech.id}
                                                    className="flex items-center p-3 bg-[#3d405b]/50 rounded-lg border-3 border-[#e07a5f]/80 transition-all hover:bg-[#3d405b]/70">
                                                    <img src={tech.icon} alt={tech.name} className="w-6 h-6 mr-3" />
                                                    <span className="text-[#f4f1de]">{tech.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {techStackData.map((tech) => (
                    <motion.div
                        layoutId={`card-${tech.name}-${id}`}
                        key={tech.name}
                        onClick={() => setActive(tech)}
                        className="p-5 flex flex-col bg-[#3d405b] hover:bg-[#3d405b]/90
                            rounded-xl cursor-pointer border-3 border-[#e07a5f] h-full
                            shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex gap-4 flex-col w-full h-full">
                            <motion.div layoutId={`image-${tech.name}-${id}`} className="flex justify-center items-center">
                                <img width={60} height={60} src={tech.icon} alt={tech.name} className="h-16 w-16 object-contain" />
                            </motion.div>
                            <div className="flex justify-center items-center flex-col flex-1">
                                <motion.h3 layoutId={`title-${tech.name}-${id}`} className="font-semibold text-[#f4f1de] text-center text-lg">
                                    {tech.name}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${tech.description}-${id}`}
                                    className="text-[#f4f1de]/90 text-center text-sm mt-2 line-clamp-3">
                                    {tech.description}
                                </motion.p>
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center mt-auto pt-4">
                                {tech.relatedTech.slice(0, 3).map((relatedTech) => (
                                    <div
                                        key={relatedTech.id}
                                        className="bg-[#3d405b]/70 rounded-full px-3 py-1 text-xs 
                                        text-[#f4f1de] border-2 border-[#e07a5f]/80">
                                        {relatedTech.name}
                                    </div>
                                ))}
                                {tech.relatedTech.length > 3 && (
                                    <div
                                        className="bg-[#3d405b]/70 rounded-full px-3 py-1 text-xs 
                                        text-[#f4f1de] border-2 border-[#e07a5f]/80">
                                        +{tech.relatedTech.length - 3} more
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.05 },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 text-[#3d405b]">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
