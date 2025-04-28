"use client";

import React, { useState } from "react";
import { projects } from "@/data/data";

const ProjectItems = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
    };

    return (
        <div>
            {/* Project Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow cursor-pointer"
                        onClick={() => handleOpenModal(project)}>
                        {/* Image */}
                        <img src={project.example_img} alt={project.title} className="w-full h-48 object-cover rounded-t-md" />

                        {/* Title */}
                        <h2 className="mt-4 text-white text-xl font-bold">{project.title}</h2>

                        {/* Stack Tags */}
                        <div className="flex flex-wrap gap-2 mt-2">
                            {project.stack_tags.map((tag) => (
                                <span key={tag} className="bg-blue-500 text-white text-sm px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Quick Description */}
                        <p className="text-gray-400 text-sm mt-3">{project.quick_description}</p>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
                    <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative">
                        {/* Close Button */}
                        <button
                            className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-700 rounded-full w-8 h-8 flex justify-center items-center"
                            onClick={handleCloseModal}>
                            X
                        </button>

                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Left Section */}
                            <div className="flex-1">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    {selectedProject.title}
                                    <a
                                        href={selectedProject.github_href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline text-sm">
                                        View on GitHub
                                    </a>
                                </h2>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {selectedProject.stack_tags.map((tag) => (
                                        <span key={tag} className="bg-blue-500 text-white text-sm px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p className="mt-4">{selectedProject.full_description}</p>
                            </div>

                            {/* Right Section */}
                            <div className="flex-1">
                                {/* Main Image */}
                                <img
                                    src={currentImage || selectedProject.example_img} // Display the current image
                                    alt={selectedProject.title}
                                    className="rounded-md mb-4 w-full h-64 object-cover"
                                />
                                {/* Smaller Images for Carousel */}
                                <div className="grid grid-cols-3 gap-2">
                                    {selectedProject.project_imgs.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt={`Project Image ${index + 1}`}
                                            className={`w-full h-24 object-cover rounded-md cursor-pointer ${
                                                img === currentImage ? "border-2 border-blue-500" : "border border-gray-500"
                                            }`}
                                            onClick={() => setCurrentImage(img)} // Update the current image on click
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const ProjectsPage = () => {
    return (
        <section>
            {/* We need a space for text */}
            <div className="container mx-auto">
                <h1 className="text-white text-3xl font-bold">Check out some of the things that I&apos;ve worked on:</h1>
                <div>
                    <ProjectItems />
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;
