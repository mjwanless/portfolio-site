"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { IconBrandGithub } from "@tabler/icons-react";

interface ProjectType {
    id: number;
    title: string;
    stack_tags: string[];
    quick_description: string;
    full_description: string;
    github_href: string;
    example_img: string;
    project_imgs: string[];
}

interface ProjectCardProps {
    projectsData: ProjectType[];
}

export default function ProjectCard({ projectsData }: ProjectCardProps) {
    const [active, setActive] = useState<ProjectType | boolean | null>(null);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
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
            setCurrentImage(active.example_img);
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

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
                            key={`button-${active.title}-${id}`}
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
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white dark:bg-neutral-800 rounded-full h-6 w-6"
                            onClick={() => setActive(null)}>
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.id}-${id}`}
                            ref={ref}
                            className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
                            <motion.div layoutId={`image-${active.id}-${id}`}>
                                <div className="w-full h-64 bg-neutral-100 dark:bg-neutral-800 flex justify-center items-center overflow-hidden">
                                    <img src={currentImage || active.example_img} alt={active.title} className="w-full h-full object-cover" />
                                </div>
                            </motion.div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <motion.h3
                                            layoutId={`title-${active.id}-${id}`}
                                            className="font-medium text-neutral-800 dark:text-neutral-200 text-xl mb-2">
                                            {active.title}
                                        </motion.h3>
                                        <motion.div layoutId={`tags-${active.id}-${id}`} className="flex flex-wrap gap-2 mb-4">
                                            {active.stack_tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="bg-neutral-100 dark:bg-neutral-800 rounded-full px-3 py-1 text-xs text-neutral-700 dark:text-neutral-300">
                                                    {tag}
                                                </span>
                                            ))}
                                        </motion.div>
                                    </div>
                                    <a
                                        href={active.github_href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors">
                                        <IconBrandGithub className="h-5 w-5" />
                                        <span className="text-sm">View Code</span>
                                    </a>
                                </div>

                                <motion.p
                                    layoutId={`description-${active.id}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-base mb-6">
                                    {active.full_description}
                                </motion.p>

                                {active.project_imgs.length > 0 && (
                                    <div className="pt-4">
                                        <h4 className="text-neutral-800 dark:text-neutral-200 font-medium mb-3">Project Images</h4>
                                        <div className="grid grid-cols-3 gap-3 w-full">
                                            {active.project_imgs.map((img, index) => (
                                                <div
                                                    key={index}
                                                    className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                                                        img === currentImage ? "border-blue-500" : "border-transparent"
                                                    }`}
                                                    onClick={() => setCurrentImage(img)}>
                                                    <img
                                                        src={img}
                                                        alt={`${active.title} screenshot ${index + 1}`}
                                                        className="w-full h-24 object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6">
                {projectsData.map((project) => (
                    <motion.div
                        layoutId={`card-${project.id}-${id}`}
                        key={project.id}
                        onClick={() => setActive(project)}
                        className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-neutral-200 dark:border-neutral-800 h-full">
                        <div className="flex gap-4 flex-col w-full">
                            <motion.div layoutId={`image-${project.id}-${id}`} className="rounded-lg overflow-hidden">
                                <img
                                    src={project.example_img}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </motion.div>
                            <div className="flex flex-col">
                                <motion.h3
                                    layoutId={`title-${project.id}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-lg">
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${project.id}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-sm mt-2 mb-4">
                                    {project.quick_description}
                                </motion.p>
                            </div>

                            <motion.div layoutId={`tags-${project.id}-${id}`} className="flex flex-wrap gap-2 mt-auto">
                                {project.stack_tags.slice(0, 3).map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-neutral-100 dark:bg-neutral-800 rounded-full px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300">
                                        {tag}
                                    </span>
                                ))}
                                {project.stack_tags.length > 3 && (
                                    <span className="bg-neutral-100 dark:bg-neutral-800 rounded-full px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300">
                                        +{project.stack_tags.length - 3} more
                                    </span>
                                )}
                            </motion.div>
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
            className="h-4 w-4 text-black dark:text-white">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};
