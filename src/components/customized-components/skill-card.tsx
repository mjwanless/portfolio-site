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
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

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
                <h4 className="text-neutral-900 dark:text-white font-medium">Related Technologies</h4>
                <div className="grid grid-cols-2 gap-3">
                    {tech.relatedTech.map((related) => (
                        <div key={related.id} className="flex items-center p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                            <img src={related.icon} alt={related.name} className="w-6 h-6 mr-2" />
                            <span className="text-sm text-neutral-700 dark:text-neutral-300">{related.name}</span>
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
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.name}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}>
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.name}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
                            <motion.div layoutId={`image-${active.name}-${id}`}>
                                <div className="w-full h-52 bg-neutral-100 dark:bg-neutral-800 flex justify-center items-center">
                                    <img width={80} height={80} src={active.icon} alt={active.name} className="h-24 w-24 object-contain" />
                                </div>
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.name}-${id}`}
                                            className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                                            {active.name}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-base">
                                            {active.description}
                                        </motion.p>
                                    </div>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-auto pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400">
                                        <h4 className="text-neutral-900 dark:text-white font-medium">Related Technologies</h4>
                                        <div className="grid grid-cols-2 gap-3 w-full">
                                            {active.relatedTech.map((tech) => (
                                                <div key={tech.id} className="flex items-center p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                                                    <img src={tech.icon} alt={tech.name} className="w-6 h-6 mr-2" />
                                                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{tech.name}</span>
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
            <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
                {cards.map((card) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(techStackData.find((tech) => tech.name === card.title) || null)}
                        className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
                        <div className="flex gap-4 flex-col w-full">
                            <motion.div layoutId={`image-${card.title}-${id}`} className="flex justify-center items-center">
                                <img width={60} height={60} src={card.src} alt={card.title} className="h-16 w-16 object-contain" />
                            </motion.div>
                            <div className="flex justify-center items-center flex-col">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base">
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-sm mt-2">
                                    {card.description}
                                </motion.p>
                            </div>

                            <div className="flex flex-wrap gap-2 justify-center">
                                {card.relatedTech.slice(0, 3).map((tech) => (
                                    <div
                                        key={tech.id}
                                        className="bg-neutral-100 dark:bg-neutral-800 rounded-full px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300">
                                        {tech.name}
                                    </div>
                                ))}
                                {card.relatedTech.length > 3 && (
                                    <div className="bg-neutral-100 dark:bg-neutral-800 rounded-full px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300">
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
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
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
            className="h-4 w-4 text-black">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
