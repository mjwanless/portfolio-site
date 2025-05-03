"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";

const introTexts = [
    "Hey, I'm Malcolm.",
    "I'm a developer who loves building useful, usable things for the web.",
    "Always learning, occasionally debugging, usually caffeinated.",
];

export default function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <TextGenerateEffect words={introTexts[0]} className="text-6xl font-bold mb-6 text-foreground" duration={0.5} delay={0} />
                <TextGenerateEffect words={introTexts[1]} className="text-3xl mb-4 text-foreground/80" duration={0.5} delay={0.5} />
                <TextGenerateEffect words={introTexts[2]} className="text-2xl mb-6 text-foreground/70" duration={0.5} delay={1} />

                <hr className="my-8 border-t-4 border-primary/50 w-1/2 mx-auto" />

                <div className="flex justify-center">
                    <Image
                        src="/images/profile_pics/malcolm-cartoon-2.png"
                        alt="Malcolm cartoon avatar"
                        width={224}
                        height={224}
                        className="w-56 h-56 rounded-full object-cover shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}
