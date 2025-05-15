"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

// Import colors directly as specified in style guide
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
                <div className="text-left w-full md:w-3/5">
                    {/* Update text colors to use navy from the style guide */}
                    <TextGenerateEffect
                        words="Hey, I'm Malcolm."
                        className="!text-6xl md:!text-7xl lg:!text-8xl !mb-8 !leading-tight"
                        filter={true}
                        duration={0.5}
                        delay={0}
                    />

                    <TextGenerateEffect
                        words="I'm a developer who loves building useful, usable things for the web."
                        className="!text-base md:!text-lg !mb-4 !font-normal !leading-normal"
                        filter={true}
                        duration={0.5}
                        delay={0.5}
                    />

                    <TextGenerateEffect
                        words="Always learning, occasionally debugging, usually caffeinated."
                        className="!text-base md:!text-lg !mb-6 !font-normal !leading-normal"
                        filter={true}
                        duration={0.5}
                        delay={1}
                    />
                </div>

                {/* Middle: Vertical divider (hidden on mobile) */}
                <div className="hidden md:block h-[500px] border-l-4" style={{ borderColor: colors.coral }}></div>

                {/* Right side: Image */}
                <div className="flex justify-center w-full md:w-1/3">
                    <Image
                        src="/images/profile_pics/malcolm-profile-transparent.png"
                        alt="Malcolm cartoon avatar"
                        width={320}
                        height={320}
                        className="object-contain rounded-full border-4"
                        style={{ borderColor: colors.coral }}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
