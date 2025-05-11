"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandLinkedin, IconFileDownload } from "@tabler/icons-react";

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="min-h-screen py-12 md:py-16">
            <div className="mx-auto w-full max-w-6xl p-4">
                {/* Header */}
                <div className="w-full text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-custom-navy mb-4">Contact Me</h1>
                    <p className="mt-2 text-custom-navy max-w-2xl mx-auto">Get in touch with me through the form or social links.</p>
                </div>

                {/* Two-column layout */}
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                    {/* Left column: Contact Form */}
                    <div className="w-full md:w-3/5">
                        <form className="max-w-md mx-auto md:mx-0" onSubmit={handleSubmit}>
                            <LabelInputContainer className="mb-4">
                                <label htmlFor="name" className="block text-custom-navy font-medium text-sm">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="flex h-10 w-full rounded-md border border-custom-navy/30 bg-transparent px-3 py-2 text-sm 
                                    text-custom-navy placeholder:text-custom-navy/50 focus:outline-none focus:ring-1 focus:ring-custom-navy/50 
                                    focus:border-custom-navy/70 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </LabelInputContainer>

                            <LabelInputContainer className="mb-4">
                                <label htmlFor="email" className="block text-custom-navy font-medium text-sm">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Enter your email"
                                    className="flex h-10 w-full rounded-md border border-custom-navy/30 bg-transparent px-3 py-2 text-sm 
                                    text-custom-navy placeholder:text-custom-navy/50 focus:outline-none focus:ring-1 focus:ring-custom-navy/50 
                                    focus:border-custom-navy/70 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </LabelInputContainer>

                            <LabelInputContainer className="mb-4">
                                <label htmlFor="subject" className="block text-custom-navy font-medium text-sm">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Enter the subject"
                                    className="flex h-10 w-full rounded-md border border-custom-navy/30 bg-transparent px-3 py-2 text-sm 
                                    text-custom-navy placeholder:text-custom-navy/50 focus:outline-none focus:ring-1 focus:ring-custom-navy/50 
                                    focus:border-custom-navy/70 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </LabelInputContainer>

                            <LabelInputContainer className="mb-8">
                                <label htmlFor="message" className="block text-custom-navy font-medium text-sm">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={6}
                                    placeholder="Enter your message"
                                    className="flex w-full rounded-md border border-custom-navy/30 bg-transparent px-3 py-2 text-sm 
                                    text-custom-navy placeholder:text-custom-navy/50 focus:outline-none focus:ring-1 focus:ring-custom-navy/50 
                                    focus:border-custom-navy/70 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
                            </LabelInputContainer>

                            <button
                                type="submit"
                                className="group/btn relative block h-11 w-full rounded-md bg-custom-navy/10
                                font-medium text-custom-navy hover:bg-custom-navy/20 transition-colors border border-custom-navy/30">
                                Send Message &rarr;
                                <BottomGradient />
                            </button>
                        </form>
                    </div>

                    {/* Right column: Connect With Me */}
                    <div className="w-full md:w-2/5 flex flex-col">
                        <div className="max-w-md mx-auto md:mx-0 md:mt-8">
                            <h3 className="text-lg font-medium text-custom-navy mb-6">Connect With Me</h3>

                            <div className="flex flex-col space-y-4">
                                <Link
                                    href="https://github.com/yourusername"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn relative flex h-12 w-full items-center justify-start space-x-3 
                                    rounded-md bg-transparent border border-custom-navy/30 px-4 font-medium text-custom-navy
                                    hover:bg-custom-navy/10 transition-colors">
                                    <IconBrandGithub className="h-6 w-6 text-custom-navy" />
                                    <span className="text-custom-navy">GitHub</span>
                                    <BottomGradient />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/your-profile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn relative flex h-12 w-full items-center justify-start space-x-3 
                                    rounded-md bg-transparent border border-custom-navy/30 px-4 font-medium text-custom-navy
                                    hover:bg-custom-navy/10 transition-colors">
                                    <IconBrandLinkedin className="h-6 w-6 text-custom-navy" />
                                    <span className="text-custom-navy">LinkedIn</span>
                                    <BottomGradient />
                                </Link>
                                <Link
                                    href="/Malcolm_Wanless_Resume.pdf"
                                    download
                                    className="group/btn relative flex h-12 w-full items-center justify-start space-x-3 
                                    rounded-md bg-transparent border border-custom-navy/30 px-4 font-medium text-custom-navy
                                    hover:bg-custom-navy/10 transition-colors">
                                    <IconFileDownload className="h-6 w-6 text-custom-navy" />
                                    <span className="text-custom-navy">Download Resume</span>
                                    <BottomGradient />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-custom-navy/30 to-transparent opacity-0 transition duration-300 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-custom-navy/30 to-transparent opacity-0 blur-sm transition duration-300 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
