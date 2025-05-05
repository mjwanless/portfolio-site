"use client";

import React from "react";
import { techStack } from "@/data/data-techstack";
import SkillCard from "@/components/customized-components/skill-card";

const SkillsPage = () => {
    return (
        <section className="min-h-screen py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1 className="text-foreground text-3xl md:text-4xl font-bold mb-4 text-center">My Technical Skills</h1>
                <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
                    A collection of technologies I've worked with across various projects and applications.
                </p>
                <SkillCard techStackData={techStack} />
            </div>
        </section>
    );
};

export default SkillsPage;
