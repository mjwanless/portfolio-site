"use client";
import React from "react";
import { aboutText } from "@/data/data-about";

export default function AboutPage() {
    return (
        <section className="min-h-screen py-12 md:py-16 bg-gradient-to-b from-background to-background/90">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-foreground text-3xl md:text-4xl font-bold mb-6 text-center">About Me</h1>

                <div className="bg-[#3d405b] rounded-xl shadow-lg p-6 md:p-8 border-3 border-[#e07a5f]">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-[#f4f1de] mb-6">{aboutText.intro}</p>

                        {aboutText.paragraphs.map((paragraph, index) => (
                            <p key={index} className="text-[#f4f1de] mb-6">
                                {paragraph}
                            </p>
                        ))}

                        <p className="text-[#f4f1de] font-medium mt-8">{aboutText.signature}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
