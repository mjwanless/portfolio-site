"use client";

import React from "react";
import { techStack } from "@/data/data";

const SkillsPage = () => {
    return (
        <section className="container mx-auto px-4 py-10">
            <h1 className="text-white text-4xl font-bold mb-8 text-center">Skills Section</h1>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {techStack.map((tech) => (
                    <div key={tech.id} className="bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
                        {/* Main Tech */}
                        <div className="flex items-center mb-4">
                            <img src={tech.icon} alt={tech.name} className="w-12 h-12 mr-3" />
                            <h2 className="text-white text-2xl font-bold">{tech.name}</h2>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-4">{tech.description}</p>

                        {/* Related Tech */}
                        <div className="flex flex-wrap gap-4">
                            {tech.relatedTech.map((related) => (
                                <div key={related.id} className="flex items-center">
                                    <img src={related.icon} alt={related.name} className="w-10 h-10 mr-2" />
                                    <span className="text-white text-sm">{related.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillsPage;
