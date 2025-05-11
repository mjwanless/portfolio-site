"use client";
import React from "react";
import { aboutText } from "@/data/data-about";

export default function AboutPage() {
    return (
        <section className="min-h-screen py-12 md:py-16">
            <div className="container mx-auto px-4 max-w-4xl mt-8">
                <div>
                    {/* Intro text */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl mb-10 text-custom-navy leading-relaxed font-medium">{aboutText.intro}</h2>

                    {/* Main content */}
                    <div className="prose prose-lg max-w-none">
                        {aboutText.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-base md:text-lg mb-6 text-custom-navy font-normal leading-relaxed">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
