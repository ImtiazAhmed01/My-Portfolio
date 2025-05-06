import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import logo from "../../assets/favicon-32x32.png"
import { motion } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleResumeAction = () => {
        window.open(
            "https://drive.google.com/file/d/1EWtLUm_iJaBF9HtxQc6nlb0touFnztFY/view?usp=sharing",
            "_blank"
        );


        const downloadLink = document.createElement("a");
        downloadLink.href = "https://drive.google.com/uc?export=download&id=1eidWndFBsogT_QG2XkaYBtG6aoK1x0KI";
        downloadLink.download = "Imtiaz_Ahmed_Resume.pdf";
        downloadLink.click();
    };

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
                <Link to="/" spy={true} smooth={true} offset={0} duration={500} className="px-4 py-2 rounded text-[#00FF88] hover:bg-[#00CC66] hover:text-white transition-all duration-300"
                >
                    Home
                </Link>
            </li>
            <li className="mx-1">
                <Link to='aboutme' spy={true} smooth={true} offset={-50} duration={500} className="px-4 py-2 rounded text-[#00FF88] hover:bg-[#00CC66] hover:text-white transition-all duration-300">
                    About Me
                </Link>
                {/* <a href="#aboutme" className="px-4 py-2 rounded text-[#00FF88] hover:bg-[#00CC66] hover:text-white transition-all duration-300">
                    About Me
                </a> */}
            </li>
            <li className="mx-1">
                <Link to="skills" spy={true} smooth={true} offset={-50} duration={500} className="px-4 py-2 rounded text-[#00FF88] hover:bg-[#00CC66] hover:text-white transition-all duration-300"
                >
                    Skills
                </Link>
            </li>
            <li className="mx-1">
                <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} className="px-4 py-2 rounded text-[#00FF88] hover:bg-[#00CC66] hover:text-white transition-all duration-300">
                    Projects
                </Link>
            </li>
            <li className="mx-1">
                <Link to="contact" spy={true} smooth={true} offset={-50} duration={500} className="px-4 py-2 rounded text-[#00FF88] hover:bg-[#00CC66] hover:text-white transition-all duration-300">
                    Contact
                </Link>
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
                    <NavLink
                        to="/"
                        className="btn btn-ghost normal-case md:text-xl font-bold text-[#00FF88]"
                    >
                        <img src={logo} alt="" /> Imtiaz Ahmed
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-3 flex gap-5">{links}</ul>
                </div>

                {/* Resume Download Button */}
                <div className="navbar-end">
                    <motion.a
                        onClick={handleResumeAction}
                        className="inline-block py-2 px-6 text-black bg-[#00FF88] rounded transition-all duration-300 hover:bg-[#00CC66]"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Download Resume
                    </motion.a>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {
                isMenuOpen && (
                    <div className="absolute top-[60px] left-0 w-full bg-[#0A0F0D] shadow-md lg:hidden">
                        <ul className="menu flex flex-col items-center py-3">{links}</ul>
                    </div>
                )
            }
        </div >
    );
};

export default Navbar;
