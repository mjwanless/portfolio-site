"use client";

import React from "react";
import { techStack } from "@/data/data";
import SkillCard from "@/components/customized-components/skill-card";

const SkillsPage = () => {
    return (
        <section className="container mx-auto px-4 py-10">
            <h1 className="text-foreground text-4xl font-bold mb-8 text-center">Skills Section</h1>
            <SkillCard techStackData={techStack} />
        </section>
    );
};

export default SkillsPage;
