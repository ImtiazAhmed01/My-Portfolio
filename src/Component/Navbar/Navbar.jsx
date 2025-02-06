import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const links = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) =>
                    `px-4 py-2 rounded ${isActive ? "bg-[#00CC66] text-white" : "text-[#00FF88]"} hover:bg-[#00CC66] hover:text-white transition-all duration-300`
                }>
                    Home
                </NavLink>
            </li>
            <li className="mx-1">
                <a href="#aboutme" className="px-4 py-2 rounded text-[#00FF88] hover:bg-[#00CC66] hover:text-white transition-all duration-300">
                    About Me
                </a>
            </li>
            <li className="mx-1">
                <NavLink to="/skills" className={({ isActive }) =>
                    `px-4 py-2 rounded ${isActive ? "bg-[#00CC66] text-white" : "text-[#00FF88]"} hover:bg-[#00CC66] hover:text-white transition-all duration-300`
                }>
                    Skills
                </NavLink>
            </li>
            <li className="mx-1">
                <NavLink to="/projects" className={({ isActive }) =>
                    `px-4 py-2 rounded ${isActive ? "bg-[#00CC66] text-white" : "text-[#00FF88]"} hover:bg-[#00CC66] hover:text-white transition-all duration-300`
                }>
                    Projects
                </NavLink>
            </li>
            <li className="mx-1">
                <NavLink to="/contact" className={({ isActive }) =>
                    `px-4 py-2 rounded ${isActive ? "bg-[#00CC66] text-white" : "text-[#00FF88]"} hover:bg-[#00CC66] hover:text-white transition-all duration-300`
                }>
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        <div className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-opacity-40 backdrop-blur-md" : ""}`} style={{ backgroundColor: isScrolled ? "rgba(10, 15, 13, 0.6)" : "#0A0F0D" }}>
            <div className="navbar px-5 py-3 flex justify-between items-center">

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                </div>

                {/* Navbar Logo */}
                <div className="navbar-start">
                    <NavLink to="/" className="text-xl font-bold text-[#00FF88] hover:text-[#00CC66] transition-all duration-300">
                        Imtiaz Ahmed
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-3 flex gap-5">{links}</ul>
                </div>

                {/* Resume Download Button */}
                <div className="navbar-end">
                    <a href="https://drive.google.com/file/d/1eidWndFBsogT_QG2XkaYBtG6aoK1x0KI/view?usp=sharing"
                        download
                        className="px-5 py-2 rounded bg-[#00FF88] text-black font-semibold transition-all duration-300 hover:bg-[#00CC66]"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="absolute top-[60px] left-0 w-full bg-[#0A0F0D] shadow-md lg:hidden">
                    <ul className="menu flex flex-col items-center py-3">{links}</ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
