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
            <div className="mx-auto w-full max-w-4xl p-4 flex flex-col items-center">
                {/* Header */}
                <div className="w-full text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#f4f1de] mb-4">Contact Me</h1>
                    <p className="mt-2 text-[#f4f1de]/90 max-w-2xl mx-auto">Get in touch with me through the form or social links below.</p>
                </div>

                <div className="shadow-xl w-full max-w-md rounded-xl bg-[#3d405b] p-6 md:p-8 border-3 border-[#e07a5f]">
                    {/* Contact Form */}
                    <form className="my-6" onSubmit={handleSubmit}>
                        <LabelInputContainer className="mb-4">
                            <label htmlFor="name" className="block text-[#f4f1de] font-medium text-sm">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="flex h-10 w-full rounded-md border-2 border-[#e07a5f]/80 bg-[#3d405b]/70 px-3 py-2 text-sm 
                                text-[#f4f1de] placeholder:text-[#f4f1de]/50 focus:outline-none focus:ring-1 focus:ring-[#e07a5f] 
                                focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </LabelInputContainer>

                        <LabelInputContainer className="mb-4">
                            <label htmlFor="email" className="block text-[#f4f1de] font-medium text-sm">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="flex h-10 w-full rounded-md border-2 border-[#e07a5f]/80 bg-[#3d405b]/70 px-3 py-2 text-sm 
                                text-[#f4f1de] placeholder:text-[#f4f1de]/50 focus:outline-none focus:ring-1 focus:ring-[#e07a5f] 
                                focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </LabelInputContainer>

                        <LabelInputContainer className="mb-4">
                            <label htmlFor="subject" className="block text-[#f4f1de] font-medium text-sm">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Enter the subject"
                                className="flex h-10 w-full rounded-md border-2 border-[#e07a5f]/80 bg-[#3d405b]/70 px-3 py-2 text-sm 
                                text-[#f4f1de] placeholder:text-[#f4f1de]/50 focus:outline-none focus:ring-1 focus:ring-[#e07a5f] 
                                focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </LabelInputContainer>

                        <LabelInputContainer className="mb-8">
                            <label htmlFor="message" className="block text-[#f4f1de] font-medium text-sm">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Enter your message"
                                className="flex w-full rounded-md border-2 border-[#e07a5f]/80 bg-[#3d405b]/70 px-3 py-2 text-sm 
                                text-[#f4f1de] placeholder:text-[#f4f1de]/50 focus:outline-none focus:ring-1 focus:ring-[#e07a5f] 
                                focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
                        </LabelInputContainer>

                        <button
                            type="submit"
                            className="group/btn relative block h-11 w-full rounded-md bg-[#e07a5f] 
                            font-medium text-[#f4f1de] shadow-md hover:bg-[#e07a5f]/90 transition-colors border-2 border-[#e07a5f]">
                            Send Message &rarr;
                            <BottomGradient />
                        </button>
                    </form>

                    <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-[#e07a5f]/50 to-transparent" />

                    {/* Connect With Me */}
                    <div className="text-center mb-4">
                        <h3 className="text-lg font-medium text-[#f4f1de]">Connect With Me</h3>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <Link
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn shadow-md relative flex h-11 w-full items-center justify-start space-x-2 
                            rounded-md bg-[#3d405b]/70 border-2 border-[#e07a5f]/80 px-4 font-medium text-[#f4f1de]
                            hover:bg-[#3d405b] transition-colors">
                            <IconBrandGithub className="h-5 w-5 text-[#f4f1de]/90" />
                            <span className="text-sm text-[#f4f1de]/90">GitHub</span>
                            <BottomGradient />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn shadow-md relative flex h-11 w-full items-center justify-start space-x-2 
                            rounded-md bg-[#3d405b]/70 border-2 border-[#e07a5f]/80 px-4 font-medium text-[#f4f1de]
                            hover:bg-[#3d405b] transition-colors">
                            <IconBrandLinkedin className="h-5 w-5 text-[#f4f1de]/90" />
                            <span className="text-sm text-[#f4f1de]/90">LinkedIn</span>
                            <BottomGradient />
                        </Link>
                        <Link
                            href="/Malcolm_Wanless_Resume.pdf"
                            download
                            className="group/btn shadow-md relative flex h-11 w-full items-center justify-start space-x-2 
                            rounded-md bg-[#3d405b]/70 border-2 border-[#e07a5f]/80 px-4 font-medium text-[#f4f1de]
                            hover:bg-[#3d405b] transition-colors">
                            <IconFileDownload className="h-5 w-5 text-[#f4f1de]/90" />
                            <span className="text-sm text-[#f4f1de]/90">Download Resume</span>
                            <BottomGradient />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-[#f4f1de]/30 to-transparent opacity-0 transition duration-300 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-[#f4f1de]/30 to-transparent opacity-0 blur-sm transition duration-300 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
