"use client";

import React, { useState } from "react";
import { Modal, ModalBody, ModalContent } from "../ui/animated-modal";
import { IconBrandGithub, IconX } from "@tabler/icons-react";
import { motion } from "motion/react";

interface ProjectModalProps {
    project: {
        id: number;
        title: string;
        stack_tags: string[];
        quick_description: string;
        full_description: string;
        github_href: string;
        example_img: string;
        project_imgs: string[];
    } | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const [currentImage, setCurrentImage] = useState<string | null>(project ? project.example_img : null);

    // Update current image when project changes
    React.useEffect(() => {
        if (project) {
            setCurrentImage(project.example_img);
        }
    }, [project]);

    if (!project) return null;

    return (
        <Modal open={isOpen} onOpenChange={onClose}>
            <ModalBody>
                <ModalContent className="max-w-4xl w-full">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-1 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors z-10">
                        <IconX className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                    </button>

                    <div className="flex flex-col md:flex-row gap-6">
                        {/* Left Section with details */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 flex items-center gap-2">
                                {project.title}
                                <a
                                    href={project.github_href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors flex items-center gap-1 text-sm"
                                    onClick={(e) => e.stopPropagation()}>
                                    <IconBrandGithub className="h-4 w-4" />
                                    <span>View on GitHub</span>
                                </a>
                            </h2>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.stack_tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs px-3 py-1 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-6 prose prose-neutral dark:prose-invert max-w-none">
                                <p className="text-neutral-700 dark:text-neutral-300">{project.full_description}</p>
                            </div>
                        </div>

                        {/* Right Section with images */}
                        <div className="flex-1">
                            {/* Main Image */}
                            <div className="rounded-lg overflow-hidden bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-4">
                                <img src={currentImage || project.example_img} alt={project.title} className="w-full h-64 object-cover" />
                            </div>

                            {/* Thumbnail Images */}
                            <div className="grid grid-cols-3 gap-2">
                                {project.project_imgs.map((img, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className={`rounded-md overflow-hidden cursor-pointer border-2 ${
                                            img === currentImage ? "border-blue-500 dark:border-blue-400" : "border-transparent"
                                        }`}
                                        onClick={() => setCurrentImage(img)}>
                                        <img src={img} alt={`Project Image ${index + 1}`} className="w-full h-24 object-cover" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ModalContent>
            </ModalBody>
        </Modal>
    );
}
