"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center p-8 md:p-16">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-6xl">
                {/* Left side: Text content */}
                <div className="text-left w-full md:w-3/5">
                    {/* Override the hard-coded styles with !important classes */}
                    <TextGenerateEffect
                        words="Hey, I'm Malcolm."
                        className="!text-6xl md:!text-7xl lg:!text-8xl !mb-8 !text-custom-navy !leading-tight"
                        filter={true}
                        duration={0.5}
                        delay={0}
                    />

                    <TextGenerateEffect
                        words="I'm a developer who loves building useful, usable things for the web."
                        className="!text-base md:!text-lg !mb-4 !text-custom-navy/80 !font-normal !leading-normal"
                        filter={true}
                        duration={0.5}
                        delay={0.5}
                    />

                    <TextGenerateEffect
                        words="Always learning, occasionally debugging, usually caffeinated."
                        className="!text-base md:!text-lg !mb-6 !text-custom-navy/70 !font-normal !leading-normal"
                        filter={true}
                        duration={0.5}
                        delay={1}
                    />
                </div>

                {/* Middle: Vertical divider (hidden on mobile) */}
                <div className="hidden md:block h-[500px] border-l-4 border-[#e07a5f]"></div>

                {/* Right side: Image */}
                <div className="flex justify-center w-full md:w-1/3">
                    <Image
                        src="/images/profile_pics/malcolm-profile-transparent.png"
                        alt="Malcolm cartoon avatar"
                        width={320}
                        height={320}
                        className="object-contain rounded-full border-4 border-[#e07a5f]"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
