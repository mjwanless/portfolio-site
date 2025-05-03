"use client";
import React, { useEffect, useState } from "react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { aboutText } from "@/data/data-about";
import { aboutImages } from "@/data/data-about-images";

export default function AboutPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    return (
        <div className="relative w-full">
            <div className="relative mx-auto flex min-h-screen w-full flex-col items-center justify-start overflow-visible pt-8 md:pt-0 md:justify-center">
                <section className="py-5 relative z-20 w-full">
                    <div className="container mx-auto px-4 md:max-w-3xl lg:max-w-4xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-foreground">My Story</h2>

                        <div className="bg-foreground/25 backdrop-blur-md p-6 rounded-xl shadow-xl">
                            <div className="prose prose-sm md:prose-lg max-w-none dark:prose-invert text-foreground">
                                <p className="leading-relaxed text-foreground">{aboutText.intro}</p>
                                {aboutText.paragraphs.map((para, index) => (
                                    <p key={index} className="leading-relaxed text-foreground">
                                        {para}
                                    </p>
                                ))}
                                <p className="font-medium text-foreground">{aboutText.signature}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="fixed inset-0 z-5 h-full w-full bg-foreground/25 dark:bg-foreground/20" />

                {isMobile ? (
                    <div className="fixed inset-0 z-1 opacity-25">
                        <div className="w-full h-full bg-gradient-to-b from-primary/30 to-primary/20"></div>
                    </div>
                ) : (
                    <ThreeDMarquee className="pointer-events-none fixed inset-0 h-full w-full z-1" images={aboutImages} />
                )}
            </div>
        </div>
    );
}
