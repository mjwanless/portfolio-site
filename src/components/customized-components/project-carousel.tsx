"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { projects as projectsData } from "@/data/data-projects";
import { ArrowLeft, X, ChevronLeft, ChevronRight, Code, Github } from "lucide-react";

// Define the Project type based on your actual data
type Project = {
    id: number;
    title: string;
    stack_tags: string[];
    quick_description: string;
    github_href: string;
    example_img: string;
    project_imgs: string[];
    full_description: string;
};

// Colors from your style guide
const colors = {
    navy: "#3d405b",
    coral: "#e07a5f",
    cream: "#f4f1de",
    peach: "#eab69f",
    brick: "#8f5d5d",
    teal: "#5f797b",
    seafoam: "#81b29a",
    sage: "#babf95",
    gold: "#f2cc8f",
};

export default function ProjectGrid({ projects }: { projects: Project[] }) {
    // State management
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [hoveredProjectId, setHoveredProjectId] = useState<number | null>(null);
    const [isImageExpanded, setIsImageExpanded] = useState(false);

    // Refs for modal and expanded image
    const modalRef = useRef<HTMLDivElement>(null);
    const expandedImageRef = useRef<HTMLDivElement>(null);

    // Handle opening modal
    const openProjectModal = (project: Project, e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedProject(project);
        setCurrentImageIndex(0);
        document.body.style.overflow = "hidden"; // Prevent scrolling
    };

    // Handle closing modal
    const closeProjectModal = () => {
        setSelectedProject(null);
        setIsImageExpanded(false);
        document.body.style.overflow = ""; // Re-enable scrolling
    };

    // Handle image navigation
    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedProject) return;
        setCurrentImageIndex((prev) => (prev === selectedProject.project_imgs.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (!selectedProject) return;
        setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.project_imgs.length - 1 : prev + 1));
    };

    // Handle expanded image
    const expandImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsImageExpanded(true);
    };

    const closeExpandedImage = () => {
        setIsImageExpanded(false);
    };

    // Handle clicks outside modal
    useEffect(() => {
        const handleOutsideClick = (e: MouseEvent) => {
            // Only close the modal if the click is outside the modal AND not in the expanded image view
            if (modalRef.current && !modalRef.current.contains(e.target as Node) && !isImageExpanded) {
                closeProjectModal();
            }
        };

        // For expanded image, we want separate behavior
        const handleExpandedImageClick = (e: MouseEvent) => {
            // Don't close the whole modal, just close the expanded image view
            if (isImageExpanded && expandedImageRef.current && !expandedImageRef.current.querySelector("img")?.contains(e.target as Node)) {
                // Close just the expanded view, not the whole modal
                e.stopPropagation();
                closeExpandedImage();
            }
        };

        if (selectedProject) {
            document.addEventListener("mousedown", handleOutsideClick);
            if (isImageExpanded) {
                document.addEventListener("mousedown", handleExpandedImageClick);
            }
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            document.removeEventListener("mousedown", handleExpandedImageClick);
        };
    }, [selectedProject, isImageExpanded]);

    return (
        <>
            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="rounded-xl overflow-hidden shadow-md transition-all duration-300"
                        style={{
                            backgroundColor: colors.navy,
                            boxShadow:
                                hoveredProjectId === project.id
                                    ? "0 20px 30px -10px rgba(61,64,91,0.2), 0 10px 15px -6px rgba(61,64,91,0.15)"
                                    : "0 10px 15px -3px rgba(61,64,91,0.1), 0 4px 6px -2px rgba(61,64,91,0.05)",
                            transform: hoveredProjectId === project.id ? "translateY(-5px)" : "translateY(0)",
                        }}
                        onMouseEnter={() => setHoveredProjectId(project.id)}
                        onMouseLeave={() => setHoveredProjectId(null)}>
                        {/* Only show image container if there's an image */}
                        {project.example_img && (
                            <div className="w-full h-48 flex items-center justify-center" style={{ backgroundColor: "#272834" }}>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={project.example_img}
                                        alt={project.title}
                                        fill
                                        className="object-contain p-1"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Card Content */}
                        <div className="p-4">
                            <h3 className="text-xl font-bold mb-2" style={{ color: colors.cream }}>
                                {project.title}
                            </h3>

                            <p className="text-sm mb-4" style={{ color: colors.cream, opacity: 0.85 }}>
                                {project.quick_description}
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-1 mb-4">
                                {project.stack_tags.slice(0, 3).map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-2 py-1 rounded-full"
                                        style={{ backgroundColor: colors.coral, color: colors.navy }}>
                                        {tag}
                                    </span>
                                ))}
                                {project.stack_tags.length > 3 && (
                                    <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.coral, color: colors.navy }}>
                                        +{project.stack_tags.length - 3} more
                                    </span>
                                )}
                            </div>

                            {/* View Details Button */}
                            <button
                                className="w-full py-2 rounded text-sm font-medium transition-all duration-300"
                                style={{ backgroundColor: colors.coral, color: colors.navy }}
                                onClick={(e) => openProjectModal(project, e)}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "#c06a52";
                                    e.currentTarget.style.color = colors.cream;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.coral;
                                    e.currentTarget.style.color = colors.navy;
                                }}>
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                    <div
                        ref={modalRef}
                        className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-lg"
                        style={{ backgroundColor: colors.navy }}
                        onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button
                            onClick={closeProjectModal}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full"
                            style={{ backgroundColor: colors.coral, color: colors.navy }}>
                            <X className="h-5 w-5" />
                        </button>

                        <div className="flex flex-col md:flex-row">
                            {/* Left Column */}
                            <div className="w-full md:w-3/5 p-5">
                                <div className="flex items-center mb-4">
                                    <button
                                        className="flex items-center text-sm font-medium mr-3"
                                        style={{ color: colors.coral }}
                                        onClick={closeProjectModal}>
                                        <ArrowLeft className="h-4 w-4 mr-1" />
                                        Back
                                    </button>

                                    <h2 className="text-xl font-bold" style={{ color: colors.cream }}>
                                        {selectedProject.title}
                                    </h2>
                                </div>

                                {/* Section Title */}
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold" style={{ color: colors.coral }}>
                                        Depot Information
                                    </h3>
                                </div>

                                {/* Image Carousel */}
                                {selectedProject.project_imgs && selectedProject.project_imgs.length > 0 && (
                                    <div className="relative mb-6 rounded-lg border border-gray-700 overflow-hidden">
                                        <div className="h-64 bg-gray-800 flex items-center justify-center">
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={selectedProject.project_imgs[currentImageIndex]}
                                                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                                                    fill
                                                    className="object-contain p-2"
                                                    sizes="(max-width: 768px) 100vw, 60vw"
                                                    onClick={expandImage}
                                                    style={{ cursor: "pointer" }}
                                                />
                                            </div>
                                        </div>

                                        {/* Carousel Navigation */}
                                        <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                                            <button
                                                className="pointer-events-auto ml-2 h-8 w-8 rounded-full flex items-center justify-center"
                                                style={{ backgroundColor: colors.coral, color: colors.navy }}
                                                onClick={prevImage}>
                                                <ChevronLeft className="h-5 w-5" />
                                            </button>

                                            <button
                                                className="pointer-events-auto mr-2 h-8 w-8 rounded-full flex items-center justify-center"
                                                style={{ backgroundColor: colors.coral, color: colors.navy }}
                                                onClick={nextImage}>
                                                <ChevronRight className="h-5 w-5" />
                                            </button>
                                        </div>

                                        {/* Image Counter */}
                                        <div
                                            className="absolute bottom-2 right-2 px-2 py-1 rounded-md text-xs"
                                            style={{ backgroundColor: colors.coral, color: colors.navy }}>
                                            {currentImageIndex + 1} / {selectedProject.project_imgs.length}
                                        </div>
                                    </div>
                                )}

                                {/* Project Description */}
                                <div className="text-sm" style={{ color: colors.cream }}>
                                    <p>{selectedProject.full_description}</p>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="w-full md:w-2/5 p-5 md:border-l flex flex-col" style={{ borderColor: "rgba(224, 122, 95, 0.2)" }}>
                                {/* Technologies Section */}
                                <div className="mb-4">
                                    <div className="flex items-center mb-3">
                                        <Code className="h-5 w-5 mr-2" style={{ color: colors.coral }} />
                                        <span className="text-base font-medium" style={{ color: colors.cream }}>
                                            Technologies
                                        </span>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {selectedProject.stack_tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full text-sm"
                                                style={{ backgroundColor: colors.coral, color: colors.navy }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* GitHub Button - at bottom */}
                                <div className="mt-auto pt-4">
                                    <a
                                        href={selectedProject.github_href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex justify-center items-center gap-2 py-3 rounded-md text-sm font-medium w-full transition-all duration-300"
                                        style={{ backgroundColor: colors.coral, color: colors.navy }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = "#c06a52";
                                            e.currentTarget.style.color = colors.cream;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = colors.coral;
                                            e.currentTarget.style.color = colors.navy;
                                        }}>
                                        <Github className="h-5 w-5" />
                                        <span>View on GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Expanded Image Viewer - Separate from modal */}
            {selectedProject && isImageExpanded && (
                <div
                    ref={expandedImageRef}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90"
                    onClick={(e) => {
                        e.stopPropagation();
                        closeExpandedImage();
                    }}>
                    <div className="relative max-w-[90%] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedProject.project_imgs[currentImageIndex]}
                            alt="Expanded view"
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                        <button
                            className="absolute top-4 right-4 p-2 rounded-full"
                            style={{ backgroundColor: colors.coral, color: colors.navy }}
                            onClick={(e) => {
                                e.stopPropagation();
                                closeExpandedImage();
                            }}>
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
