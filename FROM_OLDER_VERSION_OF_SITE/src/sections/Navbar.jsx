import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../data/data";

const NavItems = ({ mobile, closeMobileMenu }) => (
    <ul className={`${mobile ? "flex flex-col space-y-4" : "hidden md:flex md:space-x-6"} text-lg`}>
        {navLinks.map((item) => (
            <li key={item.id}>
                <Link
                    to={item.href}
                    className="hover:text-gray-300 text-[#FD8E8E] transition-colors duration-200"
                    onClick={mobile ? closeMobileMenu : undefined}>
                    {item.name}
                </Link>
            </li>
        ))}
    </ul>
);

const MobileMenuButton = ({ isOpen, toggleMenu }) => (
    <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}>
        <div className="w-6 flex flex-col items-end space-y-1.5">
            <span className={`block h-0.5 bg-[#FD8E8E] transition-all duration-300 ${isOpen ? "w-6 -rotate-45 translate-y-2" : "w-6"}`}></span>
            <span className={`block h-0.5 bg-[#FD8E8E] transition-all duration-300 ${isOpen ? "opacity-0" : "w-5"}`}></span>
            <span className={`block h-0.5 bg-[#FD8E8E] transition-all duration-300 ${isOpen ? "w-6 rotate-45 -translate-y-2" : "w-4"}`}></span>
        </div>
    </button>
);

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center h-20 py-4 px-5">
                    <Link
                        to="/"
                        className="text-[#FD8E8E] font-bold text-2xl hover:text-gray-300 transition-colors duration-200"
                        onClick={closeMobileMenu}>
                        <h2>Malcolm Wanless</h2>
                    </Link>

                    <nav className="flex items-center">
                        <NavItems mobile={false} />
                        <MobileMenuButton
                            isOpen={mobileMenuOpen}
                            toggleMenu={toggleMobileMenu}
                        />
                    </nav>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden absolute w-full bg-black/95 backdrop-blur-sm transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "max-h-screen py-6 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"
                }`}>
                <div className="px-5 pb-6">
                    <NavItems
                        mobile={true}
                        closeMobileMenu={closeMobileMenu}
                    />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
