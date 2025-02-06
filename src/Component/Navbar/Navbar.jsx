import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded ${isActive ? "bg-[#00CC66] text-white" : "text-[#00FF88]"
                        } hover:bg-[#00CC66] hover:text-white transition-all duration-300`
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className="mx-1">
                <NavLink
                    to="/about-me"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded ${isActive ? "bg-[#00CC66] text-white" : "text-[#00FF88]"
                        } hover:bg-[#00CC66] hover:text-white transition-all duration-300`
                    }
                >
                    About Me
                </NavLink>
            </li>
            <li className="mx-1">
                <NavLink
                    to="/skills"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded ${isActive ? "bg-[#00CC66] text-white" : "text-[#00FF88]"
                        } hover:bg-[#00CC66] hover:text-white transition-all duration-300`
                    }
                >
                    Skills
                </NavLink>
            </li>
            <li className="mx-1">
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded ${isActive ? "bg-[#00CC66] text-white" : "text-[#00FF88]"
                        } hover:bg-[#00CC66] hover:text-white transition-all duration-300`
                    }
                >
                    Projects
                </NavLink>
            </li>
            <li className="mx-1">
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded ${isActive ? "bg-[#00CC66] text-white" : "text-[#00FF88]"
                        } hover:bg-[#00CC66] hover:text-white transition-all duration-300`
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>

    );

    return (
        <div
            className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-opacity-40 backdrop-blur-md" : ""
                }`}
            style={{ backgroundColor: isScrolled ? "rgba(10, 15, 13, 0.6)" : "#0A0F0D" }}
        >
            <div className="navbar px-5 py-3">
                <div className="navbar-start">
                    <NavLink
                        to="/"
                        className="text-xl font-bold text-[#00FF88] hover:text-[#00CC66] transition-all duration-300"
                    >
                        Imtiaz Ahmed
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-3 flex gap-5">{links}</ul>
                </div>

                <div className="navbar-end">
                    <a
                        href="/resume.pdf"
                        download
                        className="px-5 py-2 rounded bg-[#00FF88] text-black font-semibold transition-all duration-300 hover:bg-[#00CC66]"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
