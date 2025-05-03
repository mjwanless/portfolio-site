export default function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <h1 className="text-5xl font-bold mb-6 text-foreground">Hello, I&apos;m Malcolm!</h1>
                <p className="text-2xl mb-4 text-foreground/80">I&apos;m a full-stack developer based in Vancouver.</p>
                <p className="text-xl mb-6 text-foreground/70">Take a look around.</p>

                <hr className="my-8 border-border" />

                <div className="flex justify-center">
                    <img
                        src="/images/profile_pics/_HEN5909.jpg"
                        alt="Malcolm profile picture"
                        className="w-56 h-56 rounded-full object-cover shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}
