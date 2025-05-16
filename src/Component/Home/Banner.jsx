import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
// import image from '../../assets/images/IMG_20241207_132634_enhanced.jpg.png'
import image from '../../assets/images/Adobe Express - file.png'

import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Banner = () => {
    const handleResumeAction = () => {
        window.open(
            "https://drive.google.com/file/d/1eidWndFBsogT_QG2XkaYBtG6aoK1x0KI/view?usp=drive_link",
            "_blank"
        );


        const downloadLink = document.createElement("a");
        downloadLink.href = "https://drive.google.com/uc?export=download&id=1eidWndFBsogT_QG2XkaYBtG6aoK1x0KI";
        downloadLink.download = "Imtiaz_Ahmed_Resume.pdf";
        downloadLink.click();
    };
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6 mt-3 md:px-12 py-12 md:py-20 relative" id="/">

            <motion.div
                className="md:w-1/2 flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src={image}
                    alt="Imtiaz Ahmed"
                    className="w-72 h-72 rounded-full shadow-lg"
                />
            </motion.div>


            <motion.div
                className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <p className="text-lg text-[#00FF88]">Hello, I'm</p>
                <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">
                    Imtiaz Ahmed
                </h1>
                <h2 className="text-2xl md:text-3xl text-[#00FF88] font-semibold mt-2">
                    <Typewriter
                        words={["Full Stack Developer"]}
                        loop={false}
                        cursor
                        cursorStyle="|"
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
                <p className="text-gray-300 mt-4">
                    Passionate about building efficient and scalable web applications.
                </p>


                <motion.a
                    onClick={handleResumeAction}
                    className="inline-block mt-6 px-6 py-3 text-black bg-[#00FF88] rounded transition-all duration-300 hover:bg-[#00CC66]"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Download Resume
                </motion.a>


                <div className="flex md:hidden justify-center gap-6 mt-6">
                    <a href="https://github.com/ImtiazAhmed01" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-[#00FF88] text-3xl transition-all duration-300 hover:text-[#00CC66]" />
                    </a>
                    <a href="https://www.linkedin.com/in/imtiaz-ahmed-25a357201" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-[#00FF88] text-3xl transition-all duration-300 hover:text-[#00CC66]" />
                    </a>
                    <a href="https://www.facebook.com/imtiaz.ahmedar" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-[#00FF88] text-3xl transition-all duration-300 hover:text-[#00CC66]" />
                    </a>
                </div>
            </motion.div>

            {/* Social Icons - Desktop (Vertical Alignment) */}
            <motion.div
                className="hidden md:flex flex-col items-center gap-6 absolute right-4 top-1/2 transform -translate-y-1/2 lg:mr-20"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <a href="https://github.com/ImtiazAhmed01" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-[#00FF88] text-3xl transition-all duration-300 hover:text-[#00CC66]" />
                </a>
                <a href="https://www.linkedin.com/in/imtiaz-ahmed-25a357201" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-[#00FF88] text-3xl transition-all duration-300 hover:text-[#00CC66]" />
                </a>
                <a href="https://www.facebook.com/imtiaz.ahmedar" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-[#00FF88] text-3xl transition-all duration-300 hover:text-[#00CC66]" />
                </a>
            </motion.div>
        </section>
    );
};

export default Banner;
