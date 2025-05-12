// app/skills/page.tsx
"use client";

import React from "react";
import { techStack } from "@/data/data-techstack";
import SkillCard from "@/components/customized-components/skill-card";

const SkillsPage = () => {
    return (
        <section className="min-h-screen py-6">
            <div className="w-full px-6 md:px-8 lg:px-10">
                <SkillCard techStackData={techStack} />
            </div>
        </section>
    );
};

export default SkillsPage;
