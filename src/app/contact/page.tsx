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
        <div className="mx-auto w-full max-w-4xl p-4 flex flex-col items-center">
            {/* Header */}
            <div className="w-full text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground">Contact Me</h2>
                <p className="mt-2 text-foreground/70">Get in touch with me through the form or social links below.</p>
            </div>

            <div className="shadow-input w-full max-w-md rounded-none bg-card-background p-4 md:rounded-2xl md:p-8 dark:bg-card-background/10">
                {/* Contact Form */}
                <form className="my-8" onSubmit={handleSubmit}>
                    <LabelInputContainer className="mb-4">
                        <label htmlFor="name" className="block text-foreground font-medium text-sm">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="flex h-10 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm 
                            placeholder:text-foreground/50 focus:outline-none focus:ring-1 focus:ring-border 
                            focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <label htmlFor="email" className="block text-foreground font-medium text-sm">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="flex h-10 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm 
                            placeholder:text-foreground/50 focus:outline-none focus:ring-1 focus:ring-border 
                            focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <label htmlFor="subject" className="block text-foreground font-medium text-sm">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Enter the subject"
                            className="flex h-10 w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm 
                            placeholder:text-foreground/50 focus:outline-none focus:ring-1 focus:ring-border 
                            focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-8">
                        <label htmlFor="message" className="block text-foreground font-medium text-sm">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Enter your message"
                            className="flex w-full rounded-md border border-border bg-transparent px-3 py-2 text-sm 
                            placeholder:text-foreground/50 focus:outline-none focus:ring-1 focus:ring-border 
                            focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
                    </LabelInputContainer>

                    <button
                        type="submit"
                        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-foreground to-foreground/70 
                        font-medium text-background shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]">
                        Send Message &rarr;
                        <BottomGradient />
                    </button>
                </form>

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* Connect With Me */}
                <div className="text-center mb-4">
                    <h3 className="text-lg font-medium text-foreground">Connect With Me</h3>
                </div>

                <div className="flex flex-col space-y-4">
                    <Link
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 
                        rounded-md bg-card-background/10 px-4 font-medium text-foreground">
                        <IconBrandGithub className="h-4 w-4 text-foreground/70" />
                        <span className="text-sm text-foreground/70">GitHub</span>
                        <BottomGradient />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 
                        rounded-md bg-card-background/10 px-4 font-medium text-foreground">
                        <IconBrandLinkedin className="h-4 w-4 text-foreground/70" />
                        <span className="text-sm text-foreground/70">LinkedIn</span>
                        <BottomGradient />
                    </Link>
                    <Link
                        href="/Malcolm_Wanless_Resume.pdf"
                        download
                        className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 
                        rounded-md bg-card-background/10 px-4 font-medium text-foreground">
                        <IconFileDownload className="h-4 w-4 text-foreground/70" />
                        <span className="text-sm text-foreground/70">Download Resume</span>
                        <BottomGradient />
                    </Link>
                </div>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-border to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-border to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
