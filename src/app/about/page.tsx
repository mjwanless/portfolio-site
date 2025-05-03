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
        "/images/about_images/_HEN5904.jpg",
        "/images/about_images/_HEN5908.jpg",
        "/images/about_images/_HEN5909.jpg",
        "/images/about_images/_HEN5911.jpg",
        "/images/about_images/20160622_140740.jpeg",
        "/images/about_images/img_2.jpeg",
        "/images/about_images/IMG_0305.jpeg",
        "/images/about_images/IMG_0473.jpeg",
        "/images/about_images/IMG_1068.jpeg",
        "/images/about_images/IMG_1199.jpeg",
        "/images/about_images/IMG_1468.jpeg",
        "/images/about_images/IMG_1664.jpeg",
        "/images/about_images/IMG_1666.jpeg",
        "/images/about_images/IMG_1689.jpeg",
        "/images/about_images/IMG_1725.jpeg",
        "/images/about_images/IMG_1763.jpeg",
        "/images/about_images/IMG_1832.jpeg",
        "/images/about_images/IMG_1845.jpeg",
        "/images/about_images/IMG_2018.jpeg",
        "/images/about_images/IMG_2032.jpeg",
        "/images/about_images/IMG_2126.jpeg",
        "/images/about_images/IMG_2225.jpeg",
        "/images/about_images/IMG_2387.jpeg",
        "/images/about_images/IMG_2872.jpeg",
        "/images/about_images/IMG_2969.jpeg",
        "/images/about_images/IMG_3014.jpeg",
        "/images/about_images/IMG_3083.jpeg",
        "/images/about_images/IMG_3114.jpeg",
        "/images/about_images/IMG_3132.jpeg",
        "/images/about_images/IMG_3142.jpeg",
        "/images/about_images/IMG_3213.jpeg",
        "/images/about_images/IMG_3276.jpeg",
        "/images/about_images/IMG_3312.jpeg",
        "/images/about_images/IMG_3327.jpeg",
        "/images/about_images/IMG_3330.jpeg",
        "/images/about_images/IMG_3387.jpeg",
        "/images/about_images/IMG_3685.jpeg",
        "/images/about_images/IMG_3743.jpeg",
        "/images/about_images/IMG_3793.jpeg",
        "/images/about_images/IMG_20160407_205102.jpeg",
        "/images/about_images/IMG_20160730_110758.jpeg",
        "/images/about_images/IMG_20160730_112619.jpeg",
        "/images/about_images/IMG_20160920_124219.jpeg",
        "/images/about_images/IMG_20161028_173815.jpeg",
        "/images/about_images/IMG_20170102_132306.jpeg",
        "/images/about_images/IMG_20170121_173556.jpeg",
        "/images/about_images/IMG_20170126_143051.jpeg",
        "/images/about_images/IMG_20170205_132017.jpeg",
        "/images/about_images/IMG_20170210_130046.jpeg",
        "/images/about_images/IMG_20170216_190927.jpeg",
        "/images/about_images/IMG_20170222_150006.jpeg",
        "/images/about_images/IMG_20170222_214922.jpeg",
        "/images/about_images/IMG_20170223_144031.jpeg",
        "/images/about_images/IMG_20170226_123316.jpeg",
        "/images/about_images/IMG_20170304_141656.jpeg",
        "/images/about_images/IMG_20170307_144256.jpeg",
        "/images/about_images/IMG_20170307_162111.jpeg",
        "/images/about_images/IMG_20170709_094253.jpeg",
        "/images/about_images/IMG_20170707_200044.jpeg",
        "/images/about_images/IMG_20170821_222845.jpeg",
        "/images/about_images/IMG_20180802_125332.jpeg",
    ];

    return (
        <div className="relative w-full">
            <div className="relative mx-auto flex min-h-screen w-full flex-col items-center justify-start overflow-visible pt-8 md:pt-0 md:justify-center">
                <section className="py-5 relative z-20 w-full">
                    <div className="container mx-auto px-4 md:max-w-3xl lg:max-w-4xl">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-foreground">My Story</h2>

                        <div className="bg-foreground/25 backdrop-blur-md p-6 rounded-xl shadow-xl">
                            <div className="prose prose-sm md:prose-lg max-w-none dark:prose-invert text-foreground">
                                <p className="leading-relaxed text-foreground">Well, why don't I give you a quick rundown on what I do/who I am...</p>

                                <p className="leading-relaxed text-foreground">
                                    I was that kid with the Lego and K'nex; building things has always been my favorite thing to do. It's always
                                    exciting to figure out new ways of putting familiar things together. As I got older, I started enjoying taking
                                    apart electronics and trying to figure out what happened when you switched wires around or swapped parts.
                                </p>

                                <p className="leading-relaxed text-foreground">
                                    Eventually, I got into music in a big way; I still love it, and practice regularly to this day. I learned how to
                                    build instruments and do repair work and, for a while, I did some work as a luthier. During this whole time, I was
                                    busy playing with building websites and learning how the internet worked. I can't tell you how many mini-courses,
                                    tutorials, and other guided learning opportunities I've gone through and broken down. For the longest time, I just
                                    kind of played with code.
                                </p>

                                <p className="leading-relaxed text-foreground">
                                    However, one day, while working onboard a ship, I realized that I could build my own tools for practice. As I
                                    looked into it, I realized that I was going to be unable to develop onboard the ships as WiFi was scarce, slow,
                                    and expensive. I was able to build a Raspberry Pi server to store math and coding tutorials, and I ended up
                                    studying enough to be able to get into VCC for their Software Systems Certificate. After completing the entire
                                    program, COVID hit. I ended up working and taking some time to determine where I wanted to go. After determining
                                    that I wanted to get more fluent in my coding skills and develop in a more practical way, I enrolled in BCIT's CST
                                    program.
                                </p>

                                <p className="leading-relaxed text-foreground">
                                    Over the last two years, I've gone from having a rudimentary understanding of general web dev and an interest in
                                    technology to someone who has built multiple full-stack apps, programmed in more languages than I can remember,
                                    developed an appreciation for how the world connects, and a much stronger drive to see projects impact people in a
                                    much more positive way. I'm driven by the desire to take the potential we have for change and apply it, even in
                                    small ways, to make the internet a better place.
                                </p>

                                <p className="leading-relaxed text-foreground">
                                    I feel lucky that I got to travel for work for years; I was able to take my love of music and perform for a living
                                    in so many different situations, and learn a lot about people and how connected the world is. I am currently
                                    developing a platform of tools for creating and practicing music, and I hope that I will be able to assist people
                                    in their own educational journeys.
                                </p>

                                <p className="leading-relaxed text-foreground">
                                    Enjoy what I've built! If you've got questions or want to get in touch, feel free to contact me; I'd love to chat.
                                </p>

                                <p className="font-medium text-foreground">- Malcolm</p>
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
                    <ThreeDMarquee className="pointer-events-none fixed inset-0 h-full w-full z-1" images={images} />
                )}
            </div>
        </div>
    );
}
