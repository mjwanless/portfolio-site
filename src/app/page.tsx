export default function Home() {
    return (
        <section>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center min-h-screen px-4">
                {/* Left-hand text container for hero/intro section */}
                <div className="mb-8 md:mb-0">
                    <h1 className="text-4xl font-bold mb-4">Hello, I&apos;m Malcolm!</h1>
                    <p className="text-xl mb-2">I&apos;m a full-stack developer based in Vancouver.</p>
                    <p className="text-lg">Take a look around.</p>
                </div>
                {/* Image for hero section */}
                <div className="flex justify-center">
                    <img
                        src="/images/profile_pics/_HEN5909.jpg"
                        alt="Malcolm profile picture"
                        className="w-48 h-48 rounded-full object-cover shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
