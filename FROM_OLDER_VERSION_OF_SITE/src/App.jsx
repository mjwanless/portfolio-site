import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Experience from "./sections/Experience"

function App() {
    return (
        <Router>
            <div className="relative">
                <main className="relative z-10 text-5xl mx-auto">
                    <Navbar />
                    <Routes>
                        <Route
                            path="/"
                            element={<Hero />}
                        />
                        <Route
                            path="/about"
                            element={<About />}
                        />
                        <Route
                            path="/contact"
                            element={<Contact />}
                        />
                        <Route
                            path="/projects"
                            element={<Projects />}
                        />
                        <Route
                            path="/skills"
                            element={<Skills />}
                        />
                        <Route
                            path="/experience"
                            element={<Experience />}
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App
