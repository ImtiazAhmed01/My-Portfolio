import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section className="flex items-center justify-center px-6 py-12" id="aboutme">
            <motion.div
                className="flex flex-col md:flex-row bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden max-w-4xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Left - Text Content */}
                <div className="p-8 flex flex-col justify-center w-full md:w-2/3">
                    <motion.h2
                        className="text-3xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        About Me
                    </motion.h2>

                    <motion.p
                        className="text-lg mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        When I first started programming, it felt overwhelming. But with
                        time, practice, and persistence, I became confident in solving
                        complex problems and building functional applications. Now, I love
                        crafting smooth user experiences and staying updated with the latest
                        web technologies.
                    </motion.p>

                    <motion.p
                        className="text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Outside of coding, I enjoy watching movies and exploring new cultures.
                        These interests help me stay creative and think outside the box. As a
                        developer, I’m always eager to learn, collaborate, and create impactful
                        digital experiences.
                    </motion.p>
                </div>

                {/* Right - Image */}
                <motion.div
                    className="w-full md:w-1/3 bg-gray-800 flex items-center justify-center p-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <img
                        src="your-image-link.jpg"
                        alt="Imtiaz Ahmed"
                        className="w-48 h-48 rounded-full object-cover border-4 border-gray-700"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
