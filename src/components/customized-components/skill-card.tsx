// /components/customized-components/skill-card.tsx
"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { colors } from "@/lib/colors";

interface RelatedTech {
    id: number;
    name: string;
    icon: string;
}

interface TechStackItem {
    id: number;
    name: string;
    icon: string;
    description: string;
    relatedTech: RelatedTech[];
}

interface SkillCardProps {
    techStackData: TechStackItem[];
}

export default function SkillCard({ techStackData }: SkillCardProps) {
    return (
        <div
            className="w-full grid gap-6"
            style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                justifyContent: "center",
            }}>
            {techStackData.map((tech) => (
                <div
                    key={tech.id}
                    style={{
                        backgroundColor: colors.navy,
                        transform: "translateY(0)",
                        transition: "all 300ms ease",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                        maxWidth: "400px",
                        margin: "0 auto",
                        width: "100%",
                    }}
                    className="p-6 flex flex-col rounded-xl hover:shadow-xl h-full"
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-6px)";
                        e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
                    }}>
                    <div className="flex flex-col gap-4 w-full h-full">
                        <div className="flex justify-center items-center mt-1">
                            <Icon icon={tech.icon} width={65} height={65} style={{ color: colors.cream }} className="h-16 w-16" />
                        </div>
                        <div className="flex justify-center items-center flex-col flex-1 mt-2">
                            <h3 style={{ color: colors.cream }} className="font-semibold text-center text-2xl">
                                {tech.name}
                            </h3>
                            <p style={{ color: `${colors.cream}e6` }} className="text-center text-base mt-3">
                                {tech.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-center mt-auto pt-4">
                            {tech.relatedTech && tech.relatedTech.length > 0 ? (
                                tech.relatedTech.map((relatedTech) => (
                                    <div
                                        key={relatedTech.id}
                                        style={{
                                            backgroundColor: colors.coral,
                                            color: colors.navy,
                                            boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                                        }}
                                        className="rounded-full px-3 py-1 text-sm font-medium transition-all duration-300 hover:shadow-md">
                                        {relatedTech.name}
                                    </div>
                                ))
                            ) : (
                                <span style={{ color: `${colors.cream}80` }} className="text-sm">
                                    No related tech
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
