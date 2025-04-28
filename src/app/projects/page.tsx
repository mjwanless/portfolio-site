"use client";

import React from "react";
import ProjectCarousel from "@/components/customized-components/project-carousel";
import { projects } from "@/data/data";

const ProjectsPage = () => {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-white text-3xl font-bold mb-8">Check out some of the things that I&apos;ve worked on:</h1>
                <ProjectCarousel projects={projects} />
            </div>
        </section>
    );
};

export default ProjectsPage;
