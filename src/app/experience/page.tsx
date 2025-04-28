"use client";

import React from "react";
import { experienceData } from "@/data/data";

const ExperienceItems = () => {
    return (
        <div className="flex flex-wrap gap-8 justify-center">
            {experienceData.map((job) => (
                <div key={job.id} className=" text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center">
                    {/* Company Logo */}
                    <img src={job.logo} alt={`${job.company} logo`} className="w-24 h-24 rounded-full mr-6" />

                    {/* Job Details */}
                    <div>
                        <h2 className="text-lg font-bold">{job.title}</h2>
                        <p className="text-gray-300 text-lg">{job.company}</p>
                        <p className="text-gray-400 text-lg">{job.location}</p>
                        <p className="text-gray-400 text-lg">
                            {job.startDate} - {job.endDate}
                        </p>

                        {/* Job Points */}
                        <ul className="list-disc list-inside text-gray-200 mt-2 text-lg">
                            {job.jobPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ExperiencePage = () => {
    return (
        <section className="min-h-screen">
            {/* Section Title */}
            <div className="container mx-auto text-center">
                <h1>Experience</h1>
                <p>Here&apos;s a summary of my professional experience.</p>
            </div>

            {/* Experience Items */}
            <div className="container mx-auto">
                <ExperienceItems />
            </div>
        </section>
    );
};

export default ExperiencePage;
