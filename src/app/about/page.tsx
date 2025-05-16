"use client";
import React, { useState } from "react";
import { aboutText } from "@/data/data-about";
import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconCopy, IconCheck, IconMail } from "@tabler/icons-react";
import { colors } from "@/lib/colors";

export default function AboutPage() {
    const [copied, setCopied] = useState(false);

    const copyEmailToClipboard = () => {
        navigator.clipboard.writeText("malcolm@malcolmwanless.ca");
        setCopied(true);

        // Reset the copied state after 2 seconds
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

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

                    {/* Connect buttons */}
                    <div className="mt-12 mb-8">
                        <h3 className="text-xl font-medium mb-6 text-custom-navy">Connect With Me</h3>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                            <Link
                                href="https://github.com/mjwanless"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 items-center justify-center sm:justify-start space-x-3 
                                rounded-md px-6 font-medium transition-all duration-300"
                                style={{
                                    backgroundColor: colors.navy,
                                    color: colors.cream,
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.coral;
                                    e.currentTarget.style.color = colors.navy;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.navy;
                                    e.currentTarget.style.color = colors.cream;
                                }}>
                                <IconBrandGithub className="h-6 w-6" />
                                <span>GitHub</span>
                            </Link>

                            <Link
                                href="https://www.linkedin.com/in/malcolm-wanless/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-12 items-center justify-center sm:justify-start space-x-3 
                                rounded-md px-6 font-medium transition-all duration-300"
                                style={{
                                    backgroundColor: colors.navy,
                                    color: colors.cream,
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.coral;
                                    e.currentTarget.style.color = colors.navy;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.navy;
                                    e.currentTarget.style.color = colors.cream;
                                }}>
                                <IconBrandLinkedin className="h-6 w-6" />
                                <span>LinkedIn</span>
                            </Link>

                            <Link
                                href="mailto:malcolm@malcolmwanless.ca"
                                className="flex h-12 items-center justify-center sm:justify-start space-x-3 
                                rounded-md px-6 font-medium transition-all duration-300"
                                style={{
                                    backgroundColor: colors.navy,
                                    color: colors.cream,
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.coral;
                                    e.currentTarget.style.color = colors.navy;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = colors.navy;
                                    e.currentTarget.style.color = colors.cream;
                                }}>
                                <IconMail className="h-6 w-6" />
                                <span>Email Me</span>
                            </Link>

                            <button
                                onClick={copyEmailToClipboard}
                                className="flex h-12 items-center justify-center sm:justify-start space-x-3 
                                rounded-md px-6 font-medium transition-all duration-300"
                                style={{
                                    backgroundColor: copied ? colors.coral : colors.navy,
                                    color: copied ? colors.navy : colors.cream,
                                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)",
                                }}
                                onMouseEnter={(e) => {
                                    if (!copied) {
                                        e.currentTarget.style.backgroundColor = colors.coral;
                                        e.currentTarget.style.color = colors.navy;
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!copied) {
                                        e.currentTarget.style.backgroundColor = colors.navy;
                                        e.currentTarget.style.color = colors.cream;
                                    }
                                }}>
                                {copied ? (
                                    <>
                                        <IconCheck className="h-6 w-6" />
                                        <span>Email Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <IconCopy className="h-6 w-6" />
                                        <span>Copy Email</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
