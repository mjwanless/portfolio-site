"use client";

import React from "react";
import ProjectCarousel from "@/components/customized-components/project-carousel";
import { projects } from "@/data/data-projects";

const ProjectsPage = () => {
    return (
        <section className="py-4 w-full min-h-0">
            <div className="container mx-auto px-4">
                <ProjectCarousel projects={projects} />
            </div>
        </section>
    );
};

export default ProjectsPage;
