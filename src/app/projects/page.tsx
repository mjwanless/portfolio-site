"use client";

import React from "react";
import ProjectCarousel from "@/components/customized-components/project-carousel";
import { projects } from "@/data/data";

const ProjectsPage = () => {
    return (
        // Add these responsive classes to ensure content is visible on mobile
        <section className="py-8 md:py-12 w-full min-h-0">
            <div className="container mx-auto px-4">
                <h1 className="text-white text-2xl md:text-3xl font-bold mb-6 md:mb-8">Check out some of the things that I&apos;ve worked on:</h1>
                <ProjectCarousel projects={projects} />
            </div>
        </section>
    );
};

export default ProjectsPage;
