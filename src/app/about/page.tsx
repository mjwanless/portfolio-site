"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import React, { useEffect, useState } from "react";

export default function AboutPage() {
    // Add state to track if we're on mobile
    const [isMobile, setIsMobile] = useState(false);

    // Check if device is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkIfMobile();

        // Add event listener for window resize
        window.addEventListener("resize", checkIfMobile);

        // Clean up event listener
        return () => window.removeEventListener("resize", checkIfMobile);
    }, []);

    const images = [
        "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
        "https://assets.aceternity.com/animated-modal.png",
        "https://assets.aceternity.com/animated-testimonials.webp",
        // More images...
    ];

    return (
        <div className="relative w-full">
            {/* Changed from h-screen to min-h-screen for mobile compatibility */}
            <div className="relative mx-auto flex min-h-screen w-full flex-col items-center justify-start overflow-visible pt-8 md:pt-0 md:justify-center">
                <section className="py-5 relative z-20 w-full">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-white">My Story</h2>

                        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                            {/* Left side content */}
                            <div className="w-full md:w-2/3 space-y-4 md:space-y-6">
                                <div className="prose prose-sm md:prose-lg max-w-none dark:prose-invert text-white">
                                    <p className="leading-relaxed text-white">
                                        Well, why don&apos;t I give you a quick rundown on what I do/who I am...
                                    </p>

                                    <p className="leading-relaxed text-white">
                                        I was that kid with the Lego and K&apos;nex; building things has always been my favorite thing to do.
                                        It&apos;s always exciting to figure out new ways of putting familiar things together. As I got older, I
                                        started enjoying taking apart electronics and trying to figure out what happened when you switched wires
                                        around or swapped parts.
                                    </p>

                                    <p className="leading-relaxed text-white">
                                        Eventually, I got into music in a big way; I still love it, and practice regularly to this day. I learned how
                                        to build instruments and do repair work and, for a while, I did some work as a luthier. During this whole
                                        time, I was busy playing with building websites and learning how the internet worked. I can&apos;t tell you
                                        how many mini-courses, tutorials, and other guided learning opportunities I&apos;ve gone through and broken
                                        down. For the longest time, I just kind of played with code.
                                    </p>

                                    <p className="leading-relaxed text-white">
                                        However, one day, while working onboard a ship, I realized that I could build my own tools for practice. As I
                                        looked into it, I realized that I was going to be unable to develop onboard the ships as WiFi was scarce,
                                        slow, and expensive. I was able to build a Raspberry Pi server to store math and coding tutorials, and I ended
                                        up studying enough to be able to get into VCC for their Software Systems Certificate. After completing the
                                        entire program, COVID hit. I ended up working and taking some time to determine where I wanted to go. After
                                        determining that I wanted to get more fluent in my coding skills and develop in a more practical way, I
                                        enrolled in BCIT&apos;s CST program.
                                    </p>

                                    <p className="leading-relaxed text-white">
                                        Over the last two years, I&apos;ve gone from having a rudimentary understanding of general web dev and an
                                        interest in technology to someone who has built multiple full-stack apps, programmed in more languages than I
                                        can remember, developed an appreciation for how the world connects, and a much stronger drive to see projects
                                        impact people in a much more positive way. I&apos;m driven by the desire to take the potential we have for
                                        change and apply it, even in small ways, to make the internet a better place.
                                    </p>

                                    <p className="leading-relaxed text-white">
                                        I feel lucky that I got to travel for work for years; I was able to take my love of music and perform for a
                                        living in so many different situations, and learn a lot about people and how connected the world is. I am
                                        currently developing a platform of tools for creating and practicing music, and I hope that I will be able to
                                        assist people in their own educational journeys.
                                    </p>

                                    <p className="leading-relaxed text-white">
                                        Enjoy what I&apos;ve built! If you&apos;ve got questions or want to get in touch, feel free to contact me;
                                        I&apos;d love to chat.
                                    </p>

                                    <p className="font-medium text-white">- Malcolm</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-6 md:mt-8">
                                    {/* Things I like */}
                                    <div className="dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md">
                                        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center text-white">
                                            <span className="text-[#FD8E8E] mr-2">❤️</span>
                                            Things I Love
                                        </h3>
                                        <ul className="space-y-2 md:space-y-3">
                                            <li className="flex items-center text-white">
                                                <span className="h-2 w-2 bg-[#FD8E8E] rounded-full mr-2"></span>
                                                Music &amp; Instruments
                                            </li>
                                            <li className="flex items-center text-white">
                                                <span className="h-2 w-2 bg-[#FD8E8E] rounded-full mr-2"></span>
                                                Building Things
                                            </li>
                                            <li className="flex items-center text-white">
                                                <span className="h-2 w-2 bg-[#FD8E8E] rounded-full mr-2"></span>
                                                Problem Solving
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Things I don't like */}
                                    <div className="dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md">
                                        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 flex items-center text-white">
                                            <span className="text-[#FD8E8E] mr-2">👎</span>
                                            Things I Avoid
                                        </h3>
                                        <ul className="space-y-2 md:space-y-3">
                                            <li className="flex items-center text-white">
                                                <span className="h-2 w-2 bg-[#FD8E8E] rounded-full mr-2"></span>
                                                Slow WiFi
                                            </li>
                                            <li className="flex items-center text-white">
                                                <span className="h-2 w-2 bg-[#FD8E8E] rounded-full mr-2"></span>
                                                Poorly Documented Code
                                            </li>
                                            <li className="flex items-center text-white">
                                                <span className="h-2 w-2 bg-[#FD8E8E] rounded-full mr-2"></span>
                                                Technical Debt
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overlay - made responsive */}
                <div className="fixed inset-0 z-5 h-full w-full bg-black/80 dark:bg-black/40" />

                {/* Only show marquee on desktop or make it more compact on mobile */}
                {isMobile ? (
                    <div className="fixed inset-0 z-1 opacity-20">
                        {/* Simplified background for mobile */}
                        <div className="w-full h-full bg-gradient-to-b from-purple-900/30 to-blue-900/30"></div>
                    </div>
                ) : (
                    <ThreeDMarquee className="pointer-events-none fixed inset-0 h-full w-full z-1" images={images} />
                )}
            </div>
        </div>
    );
}
