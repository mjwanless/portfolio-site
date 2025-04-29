"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandLinkedin, IconFileDownload } from "@tabler/icons-react";
// import styles from "./page.module.css";

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <div className="mx-auto w-full max-w-4xl p-4 flex flex-col items-center">
            {/* Header */}
            <div className="w-full text-center mb-12">
                <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">Contact Me</h2>
                <p className="mt-2 text-neutral-600 dark:text-neutral-300">Get in touch with me through the form or social links below.</p>
            </div>

            <div className="shadow-input w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
                {/* Contact Form */}
                <form className="my-8" onSubmit={handleSubmit}>
                    <LabelInputContainer className="mb-4">
                        <label htmlFor="name" className="block text-neutral-800 dark:text-neutral-300 font-medium text-sm">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="flex h-10 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:placeholder:text-neutral-500"
                        />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <label htmlFor="email" className="block text-neutral-800 dark:text-neutral-300 font-medium text-sm">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="flex h-10 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:placeholder:text-neutral-500"
                        />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-4">
                        <label htmlFor="subject" className="block text-neutral-800 dark:text-neutral-300 font-medium text-sm">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Enter the subject"
                            className="flex h-10 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:placeholder:text-neutral-500"
                        />
                    </LabelInputContainer>

                    <LabelInputContainer className="mb-8">
                        <label htmlFor="message" className="block text-neutral-800 dark:text-neutral-300 font-medium text-sm">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Enter your message"
                            className="flex w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:placeholder:text-neutral-500"></textarea>
                    </LabelInputContainer>

                    <button
                        type="submit"
                        className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]">
                        Send Message &rarr;
                        <BottomGradient />
                    </button>
                </form>

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                {/* Connect With Me */}
                <div className="text-center mb-4">
                    <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200">Connect With Me</h3>
                    {/* The below is here for reference */}
                    {/* <p className={styles.test}>Feel free to reach out through my social media channels.</p> */}
                </div>

                <div className="flex flex-col space-y-4">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]">
                        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">GitHub</span>
                        <BottomGradient />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]">
                        <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">LinkedIn</span>
                        <BottomGradient />
                    </a>
                    <a
                        href="/Malcolm_Wanless_Resume.pdf"
                        download
                        className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]">
                        <IconFileDownload className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">Download Resume</span>
                        <BottomGradient />
                    </a>
                </div>
            </div>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
};
