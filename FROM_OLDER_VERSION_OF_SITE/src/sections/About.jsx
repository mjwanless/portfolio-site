import React from "react";

const About = () => {
    return (
        <section
            id="about"
            className="py-20 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    {/* Left side content */}
                    <div className="w-full md:w-2/3 space-y-6">
                        <div className="prose prose-lg max-w-none dark:prose-invert">
                            <p className="leading-relaxed">Well, why don't I give you a quick rundown on what I do/who I am...</p>

                            <p className="leading-relaxed">
                                I was that kid with the Lego and K'nex; building things has always been my favorite thing to do. It's always exciting
                                to figure out new ways of putting familiar things together. As I got older, I started enjoying taking apart
                                electronics and trying to figure out what happened when you switched wires around or swapped parts.
                            </p>

                            <p className="leading-relaxed">
                                Eventually, I got into music in a big way; I still love it, and practice regularly to this day. I learned how to build
                                instruments and do repair work and, for a while, I did some work as a luthier. During this whole time, I was busy
                                playing with building websites and learning how the internet worked. I can't tell you how many mini-courses,
                                tutorials, and other guided learning opportunities I've gone through and broken down. For the longest time, I just
                                kind of played with code.
                            </p>

                            <p className="leading-relaxed">
                                However, one day, while working onboard a ship, I realized that I could build my own tools for practice. As I looked
                                into it, I realized that I was going to be unable to develop onboard the ships as WiFi was scarce, slow, and
                                expensive. I was able to build a Raspberry Pi server to store math and coding tutorials, and I ended up studying
                                enough to be able to get into VCC for their Software Systems Certificate. After completing the entire program, COVID
                                hit. I ended up working and taking some time to determine where I wanted to go. After determining that I wanted to get
                                more fluent in my coding skills and develop in a more practical way, I enrolled in BCIT's CST program.
                            </p>

                            <p className="leading-relaxed">
                                Over the last two years, I've gone from having a rudimentary understanding of general web dev and an interest in
                                technology to someone who has built multiple full-stack apps, programmed in more languages than I can remember,
                                developed an appreciation for how the world connects, and a much stronger drive to see projects impact people in a
                                much more positive way. I'm driven by the desire to take the potential we have for change and apply it, even in small
                                ways, to make the internet a better place.
                            </p>

                            <p className="leading-relaxed">
                                I feel lucky that I got to travel for work for years; I was able to take my love of music and perform for a living in
                                so many different situations, and learn a lot about people and how connected the world is. I am currently developing a
                                platform of tools for creating and practicing music, and I hope that I will be able to assist people in their own
                                educational journeys.
                            </p>

                            <p className="leading-relaxed">
                                Enjoy what I've built! If you've got questions or want to get in touch, feel free to contact me; I'd love to chat.
                            </p>

                            <p className="font-medium">- Malcolm</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mt-8">
                            {/* Things I like */}
                            <div className="dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <span className="text-[#FD8E8E] mr-2">❤️</span>
                                    Things I Love
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="h-2 w-2 bg-[#FD8E8E] rounded-full mr-2"></span>
                                        Music &amp; Instruments
                                    </li>
                                    <li className="flex items-center">
                                        <span className="h-2 w-2 bg-[#FD8E8E] rounded-full mr-2"></span>
                                        Building Things
                                    </li>
                                    <li className="flex items-center">
                                        <span className="h-2 w-2 bg-[#FD8E8E] rounded-full mr-2"></span>
                                        Problem Solving
                                    </li>
                                </ul>
                            </div>

                            {/* Things I don't like */}
                            <div className="dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <span className="text-[#FD8E8E] mr-2">👎</span>
                                    Things I Avoid
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="h-2 w-2 bg-[#FD8E8E] rounded-full mr-2"></span>
                                        Slow WiFi
                                    </li>
                                    <li className="flex items-center">
                                        <span className="h-2 w-2 bg-[#FD8E8E] rounded-full mr-2"></span>
                                        Poorly Documented Code
                                    </li>
                                    <li className="flex items-center">
                                        <span className="h-2 w-2 bg-[#FD8E8E] rounded-full mr-2"></span>
                                        Technical Debt
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right side image and caption */}
                    <div className="w-full md:w-1/3 flex flex-col items-center sticky top-24">
                        <div className="relative overflow-hidden rounded-lg shadow-xl mb-4 w-full max-w-md">
                            <img
                                src="https://via.placeholder.com/400x500"
                                alt="Malcolm working on a project"
                                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <p className="text-center text-gray-600 dark:text-gray-400 italic">
                            From music to code: creating tools that make a difference.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
