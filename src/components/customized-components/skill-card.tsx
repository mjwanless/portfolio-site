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

    // Convert techStack data to the format expected by the card component
    const cards = techStackData.map((tech) => ({
        id: tech.id,
        title: tech.name,
        description: tech.description,
        src: tech.icon,
        relatedTech: tech.relatedTech,
        ctaText: "Learn More",
        ctaLink: "#",
        content: () => (
            <div className="space-y-4">
                <h4 className="text-foreground font-medium">Related Technologies</h4>
                <div className="grid grid-cols-2 gap-3">
                    {tech.relatedTech.map((related) => (
                        <div key={related.id} className="flex items-center p-2 bg-card-background/10 dark:bg-card-background/20 rounded-lg">
                            <img src={related.icon} alt={related.name} className="w-6 h-6 mr-2" />
                            <span className="text-sm text-foreground/70">{related.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    }));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-foreground/50 h-full w-full z-10"
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
                            className="flex absolute top-4 right-4 items-center justify-center bg-background dark:bg-background/80 rounded-full h-8 w-8"
                            onClick={() => setActive(null)}>
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.name}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-[90vh] md:h-auto md:max-h-[90%] flex flex-col bg-card-background dark:bg-card-background/10 rounded-xl overflow-hidden overflow-y-auto">
                            <motion.div layoutId={`image-${active.name}-${id}`}>
                                <div className="w-full h-40 md:h-52 bg-card-background/20 dark:bg-card-background/10 flex justify-center items-center">
                                    <img
                                        width={80}
                                        height={80}
                                        src={active.icon}
                                        alt={active.name}
                                        className="h-20 w-20 md:h-24 md:w-24 object-contain"
                                    />
                                </div>
                            </motion.div>

                            <div className="p-4 md:p-6">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <motion.h3 layoutId={`title-${active.name}-${id}`} className="font-medium text-foreground text-lg md:text-xl">
                                            {active.name}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-foreground/70 text-sm md:text-base mt-2">
                                            {active.description}
                                        </motion.p>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-foreground/70">
                                        <h4 className="text-foreground font-medium mb-4">Related Technologies</h4>
                                        <div className="grid grid-cols-2 gap-3 w-full">
                                            {active.relatedTech.map((tech) => (
                                                <div
                                                    key={tech.id}
                                                    className="flex items-center p-2 bg-card-background/10 dark:bg-card-background/20 rounded-lg">
                                                    <img src={tech.icon} alt={tech.name} className="w-6 h-6 mr-2" />
                                                    <span className="text-sm text-foreground/70">{tech.name}</span>
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
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-0">
                {cards.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(techStackData.find((tech) => tech.name === card.title) || null)}
                        className="p-4 flex flex-col hover:bg-card-background/50 dark:hover:bg-card-background/20 rounded-xl cursor-pointer border border-border">
                        <div className="flex gap-4 flex-col w-full">
                            <motion.div layoutId={`image-${card.title}-${id}`} className="flex justify-center items-center">
                                <img width={60} height={60} src={card.src} alt={card.title} className="h-16 w-16 object-contain" />
                            </motion.div>
                            <div className="flex justify-center items-center flex-col">
                                <motion.h3 layoutId={`title-${card.title}-${id}`} className="font-medium text-foreground text-center text-base">
                                    {card.title}
                                </motion.h3>
                                <motion.p layoutId={`description-${card.description}-${id}`} className="text-foreground/70 text-center text-sm mt-2">
                                    {card.description}
                                </motion.p>
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center mt-2">
                                {card.relatedTech.slice(0, 3).map((tech) => (
                                    <div key={tech.id} className="bg-card-background/10 rounded-full px-2 py-1 text-xs text-foreground/70">
                                        {tech.name}
                                    </div>
                                ))}
                                {card.relatedTech.length > 3 && (
                                    <div className="bg-card-background/10 rounded-full px-2 py-1 text-xs text-foreground/70">
                                        +{card.relatedTech.length - 3} more
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
            className="h-5 w-5 text-foreground">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
