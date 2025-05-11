"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IconBrandGithub, IconX } from "@tabler/icons-react";
import { projects as projectsData } from "@/data/data-projects";

// Define the type explicitly to avoid TypeScript errors
type Project = (typeof projectsData)[0];

// Use explicit typing for the props
const ProjectGrid = ({ projects }: { projects: Project[] }) => {
    // State to track which project is selected for the modal
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImage, setCurrentImage] = useState<string | null>(null);

    // Open modal with project details
    const openModal = (project: Project) => {
        setSelectedProject(project);
        setCurrentImage(project.example_img);
    };

    // Close modal
    const closeModal = () => {
        setSelectedProject(null);
        setCurrentImage(null);
    };

    return (
        <>
            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                {projects.map((project: Project) => (
                    <div
                        key={project.id}
                        className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                        onClick={() => openModal(project)}>
                        {/* Project Image (if available) */}
                        {project.example_img ? (
                            <div className="relative w-full h-48">
                                <Image
                                    src={project.example_img}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                        ) : (
                            <div className="h-48 bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center">
                                <span className="text-neutral-500 dark:text-neutral-400">No image available</span>
                            </div>
                        )}

                        {/* Project Content */}
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-neutral-800 dark:text-white mb-2">{project.title}</h3>

                            <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4">{project.quick_description}</p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.stack_tags.slice(0, 3).map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="bg-neutral-100 dark:bg-neutral-700 rounded-full px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300">
                                        {tag}
                                    </span>
                                ))}
                                {project.stack_tags.length > 3 && (
                                    <span className="bg-neutral-100 dark:bg-neutral-700 rounded-full px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300">
                                        +{project.stack_tags.length - 3} more
                                    </span>
                                )}
                            </div>

                            {/* GitHub Link */}
                            <div onClick={(e) => e.stopPropagation()} className="inline-block">
                                <a
                                    href={project.github_href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                                    <IconBrandGithub className="h-4 w-4" />
                                    <span className="text-sm">View on GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-800 rounded-lg shadow-xl">
                        {/* Close button */}
                        <button onClick={closeModal} className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-neutral-700 rounded-full shadow-md">
                            <IconX className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
                        </button>

                        {/* Main image */}
                        {currentImage || selectedProject.example_img ? (
                            <div className="relative w-full h-64 md:h-80">
                                <Image
                                    src={currentImage || selectedProject.example_img}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 800px"
                                    priority
                                />
                            </div>
                        ) : (
                            <div className="w-full h-64 md:h-80 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700">
                                <span className="text-neutral-500 dark:text-neutral-400">No image available</span>
                            </div>
                        )}

                        {/* Content */}
                        <div className="p-6 md:p-8">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-white mb-3">{selectedProject.title}</h2>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {selectedProject.stack_tags.map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="bg-neutral-100 dark:bg-neutral-700 rounded-full px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={selectedProject.github_href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                    <IconBrandGithub className="h-5 w-5" />
                                    <span>View on GitHub</span>
                                </a>
                            </div>

                            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                                <p className="text-neutral-700 dark:text-neutral-300">{selectedProject.full_description}</p>
                            </div>

                            {/* Project images gallery */}
                            {selectedProject.project_imgs && selectedProject.project_imgs.length > 0 && (
                                <div className="mt-8">
                                    <h3 className="text-xl font-semibold text-neutral-800 dark:text-white mb-4">Project Images</h3>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {selectedProject.project_imgs.map((img: string, index: number) => (
                                            <div
                                                key={index}
                                                className={`relative h-24 md:h-32 cursor-pointer rounded-lg overflow-hidden border-2 ${
                                                    img === currentImage ? "border-blue-500" : "border-transparent"
                                                }`}
                                                onClick={() => setCurrentImage(img)}>
                                                <Image
                                                    src={img}
                                                    alt={`${selectedProject.title} screenshot ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 50vw, 25vw"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectGrid;
