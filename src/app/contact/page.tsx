"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/colors"; // Import your colors
import { IconBrandGithub, IconBrandLinkedin, IconFileDownload } from "@tabler/icons-react";

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="min-h-[calc(100vh-64px)] py-12 md:py-16" style={{ backgroundColor: colors.cream }}>
            <div className="mx-auto w-full max-w-6xl p-4">
                {/* Header */}
                <div className="w-full text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.navy }}>
                        Contact Me
                    </h1>
                    <p className="mt-2 max-w-2xl mx-auto" style={{ color: colors.navy }}>
                        Get in touch with me through the form or social links.
                    </p>
                </div>

                {/* Two-column layout with increased gap */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* Left column: Contact Form */}
                    <div className="w-full md:w-3/5">
                        {/* Navy blue background container with shadow */}
                        <div
                            className="rounded-xl p-6 md:p-8"
                            style={{
                                backgroundColor: colors.navy,
                                boxShadow: "0 20px 30px -10px rgba(61,64,91,0.2), 0 10px 15px -6px rgba(61,64,91,0.15)",
                            }}>
                            <form className="max-w-xl mx-auto" onSubmit={handleSubmit}>
                                <LabelInputContainer className="mb-5">
                                    <label htmlFor="name" className="block font-medium text-sm" style={{ color: colors.cream }}>
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter your name"
                                        className="flex h-11 w-full rounded-md px-3 py-2 text-sm focus:outline-none"
                                        style={{
                                            backgroundColor: colors.cream,
                                            color: colors.navy,
                                            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
                                            transition: "box-shadow 0.4s ease", // Slower transition
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.boxShadow = `inset 0 0 0 2px ${colors.coral}`;
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.06)";
                                        }}
                                    />
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-5">
                                    <label htmlFor="email" className="block font-medium text-sm" style={{ color: colors.cream }}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="flex h-11 w-full rounded-md px-3 py-2 text-sm focus:outline-none"
                                        style={{
                                            backgroundColor: colors.cream,
                                            color: colors.navy,
                                            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
                                            transition: "box-shadow 0.4s ease", // Slower transition
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.boxShadow = `inset 0 0 0 2px ${colors.coral}`;
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.06)";
                                        }}
                                    />
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-5">
                                    <label htmlFor="subject" className="block font-medium text-sm" style={{ color: colors.cream }}>
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        placeholder="Enter the subject"
                                        className="flex h-11 w-full rounded-md px-3 py-2 text-sm focus:outline-none"
                                        style={{
                                            backgroundColor: colors.cream,
                                            color: colors.navy,
                                            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
                                            transition: "box-shadow 0.4s ease", // Slower transition
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.boxShadow = `inset 0 0 0 2px ${colors.coral}`;
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.06)";
                                        }}
                                    />
                                </LabelInputContainer>

                                <LabelInputContainer className="mb-8">
                                    <label htmlFor="message" className="block font-medium text-sm" style={{ color: colors.cream }}>
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={6}
                                        placeholder="Enter your message"
                                        className="flex w-full rounded-md px-3 py-2 text-sm focus:outline-none"
                                        style={{
                                            backgroundColor: colors.cream,
                                            color: colors.navy,
                                            boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
                                            transition: "box-shadow 0.4s ease", // Slower transition
                                        }}
                                        onFocus={(e) => {
                                            e.currentTarget.style.boxShadow = `inset 0 0 0 2px ${colors.coral}`;
                                        }}
                                        onBlur={(e) => {
                                            e.currentTarget.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.06)";
                                        }}></textarea>
                                </LabelInputContainer>

                                <button
                                    type="submit"
                                    className="relative block h-12 w-full rounded-md font-medium transition-all duration-300"
                                    style={{
                                        backgroundColor: colors.coral,
                                        color: colors.navy,
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = "#c06a52";
                                        e.currentTarget.style.color = colors.cream;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.coral;
                                        e.currentTarget.style.color = colors.navy;
                                    }}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right column: Connect With Me */}
                    <div className="w-full md:w-2/5 flex flex-col">
                        <div
                            className="rounded-xl p-6 md:p-8"
                            style={{
                                backgroundColor: colors.navy,
                                boxShadow: "0 20px 30px -10px rgba(61,64,91,0.2), 0 10px 15px -6px rgba(61,64,91,0.15)",
                            }}>
                            <h3 className="text-lg font-medium mb-6" style={{ color: colors.cream }}>
                                Connect With Me
                            </h3>

                            <div className="flex flex-col space-y-4">
                                <Link
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-full items-center justify-start space-x-3 
                                    rounded-md px-4 font-medium transition-all duration-300"
                                    style={{
                                        backgroundColor: colors.coral,
                                        color: colors.navy,
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = "#c06a52";
                                        e.currentTarget.style.color = colors.cream;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.coral;
                                        e.currentTarget.style.color = colors.navy;
                                    }}>
                                    <IconBrandGithub className="h-6 w-6" />
                                    <span>GitHub</span>
                                </Link>

                                <Link
                                    href="https://www.linkedin.com/in/your-profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-full items-center justify-start space-x-3 
                                    rounded-md px-4 font-medium transition-all duration-300"
                                    style={{
                                        backgroundColor: colors.coral,
                                        color: colors.navy,
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = "#c06a52";
                                        e.currentTarget.style.color = colors.cream;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.coral;
                                        e.currentTarget.style.color = colors.navy;
                                    }}>
                                    <IconBrandLinkedin className="h-6 w-6" />
                                    <span>LinkedIn</span>
                                </Link>

                                <Link
                                    href="/Malcolm_Wanless_Resume.pdf"
                                    download
                                    className="flex h-12 w-full items-center justify-start space-x-3 
                                    rounded-md px-4 font-medium transition-all duration-300"
                                    style={{
                                        backgroundColor: colors.coral,
                                        color: colors.navy,
                                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.06)",
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = "#c06a52";
                                        e.currentTarget.style.color = colors.cream;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = colors.coral;
                                        e.currentTarget.style.color = colors.navy;
                                    }}>
                                    <IconFileDownload className="h-6 w-6" />
                                    <span>Download Resume</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// This component wraps form inputs and labels for consistent spacing and layout
const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
