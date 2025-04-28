// import { useEffect } from "react"

const Contact = () => {
    // useEffect(() => {
    //     if (window.updateVantaColor) {
    //         window.updateVantaColor(0x0)
    //     }
    // }, [])

    return (
        <section className="min-h-screen py-12 flex">
            {/* Section Title */}
            <div className="container mx-auto text-center mb-8">
                <h1 className="text-white text-4xl font-bold">Contact Me</h1>
                <p className="text-gray-400 mt-2 text-lg">Get in touch with me through the form or social links below.</p>
                {/* Social Links & Resume Download */}
                <div className="container mx-auto text-center mt-12">
                    <h2 className="text-white text-2xl font-bold mb-4">Find Me On</h2>
                    <div className="flex justify-center gap-8">
                        <a
                            href="https://www.linkedin.com/in/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 text-xl hover:text-blue-400 transition text-lg">
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-xl hover:text-gray-400 transition text-lg">
                            GitHub
                        </a>
                        <a
                            href="/Malcolm_Wanless_Resume.pdf"
                            download
                            className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-700 transition text-lg">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="container mx-auto max-w-lg p-8 rounded-lg shadow-lg">
                <form className="flex flex-col gap-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-white font-semibold text-lg">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            className="w-full p-3 bg-gray-700 text-white rounded text-lg"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-white font-semibold text-lg">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full p-3 bg-gray-700 text-white rounded text-lg"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="subject"
                            className="block text-white font-semibold text-lg">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            placeholder="Enter the subject"
                            className="w-full p-3 bg-gray-700 text-white rounded text-lg"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-white font-semibold text-lg">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Enter your message"
                            className="w-full p-3 bg-gray-700 text-white rounded text-lg"></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition text-lg">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
