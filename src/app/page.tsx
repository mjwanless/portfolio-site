"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

const colors = {
    navy: "#3d405b",
    coral: "#e07a5f",
    cream: "#f4f1de",
    peach: "#eab69f",
    brick: "#8f5d5d",
    teal: "#5f797b",
    seafoam: "#81b29a",
    sage: "#babf95",
    gold: "#f2cc8f",
};

export default function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center p-8 md:p-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl">
                {/* Left side: Text content */}
                <div className="w-full md:w-3/5">
                    {/* Update text colors to use navy from the style guide */}
                    <TextGenerateEffect
                        words="Hey, I'm Malcolm."
                        className="!text-6xl md:!text-7xl lg:!text-8xl !mb-8 !leading-tight"
                        filter={true}
                        duration={0.5}
                        delay={0}
                    />

                    <TextGenerateEffect
                        words="Crafting responsive websites and applications with purpose."
                        className="!text-base md:!text-lg !mb-4 !font-normal !leading-normal"
                        filter={true}
                        duration={0.5}
                        delay={0.5}
                    />

                    <TextGenerateEffect
                        words="Turning ideas into elegant, functional solutions."
                        className="!text-base md:!text-lg !mb-4 !font-normal !leading-normal"
                        filter={true}
                        duration={0.5}
                        delay={1}
                    />

                    <TextGenerateEffect
                        words="Browse my work and drop me a message to discuss your next project."
                        className="!text-base md:!text-lg !mb-6 !font-normal !leading-normal"
                        filter={true}
                        duration={0.5}
                        delay={1.5}
                    />
                </div>
            </div>
        </section>
    );
}
