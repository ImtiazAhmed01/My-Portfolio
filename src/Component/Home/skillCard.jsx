import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn } from './Variants.js';

const SkillCard = () => {
    const [frontendSkills, setFrontendSkills] = useState([]);
    const [backendSkills, setBackendSkills] = useState([]);
    const [tools, settools] = useState([]);
    const [visible, setVisible] = useState([]);
    const [directions, setDirections] = useState([]);

    useEffect(() => {
        // Fetch frontend skills
        axios.get("https://portfolio-server-three-lemon.vercel.app/skills")
            .then((response) => {
                console.log(response.data);
                setFrontendSkills(response.data);
                setVisible(new Array(response.data.length).fill(false));
                setDirections(new Array(response.data.length).fill("up"));
            })
            .catch((error) => {
                console.error("Error fetching frontend skills:", error);
            });

        // Fetch backend skills
        axios.get("https://portfolio-server-three-lemon.vercel.app/backendskills")
            .then((response) => {
                console.log(response.data);
                setBackendSkills(response.data);
                setVisible(new Array(response.data.length).fill(false));
                setDirections(new Array(response.data.length).fill("down"));
            })
            .catch((error) => {
                console.error("Error fetching backend skills:", error);
            });
        axios.get("https://portfolio-server-three-lemon.vercel.app/tools")
            .then((response) => {
                console.log(response.data);
                settools(response.data);
                setVisible(new Array(response.data.length).fill(false));
                setDirections(new Array(response.data.length).fill("down"));
            })
            .catch((error) => {
                console.error("Error fetching backend skills:", error);
            });
    }, []);

    const handleCardClick = (website) => {
        if (website) {
            window.open(website, "_blank");
        }
    };

    return (
        <div className="bg-black min-h-screen p-8" id="skills">
            <h1 className="text-3xl font-bold text-white text-center mb-8">My Skills</h1>

            {/* Frontend Skills */}

            < motion.h1
                initial='hidden'
                variants={fadeIn("up", 0.2)}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-3xl font-bold text-[#00FF88] text-center mb-8">Frontend</ motion.h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {frontendSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-card bg-neutral-900 text-white p-4 rounded-2xl shadow-lg cursor-pointer hover:-transition-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-green-800"
                        initial='hidden'
                        variants={fadeIn("up", 0.2)}
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        onClick={() => handleCardClick(skill.website)}
                    >
                        <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                        <h3 className="text-xl font-bold">{skill.name}</h3>
                        <p>{skill.description}</p>

                    </motion.div>
                ))}
            </div>

            < motion.h1
                initial='hidden'
                variants={fadeIn("up", 0.2)}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-3xl font-bold text-[#00FF88] text-center my-8">Backend</ motion.h1>
            {/* Backend Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {backendSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-card bg-neutral-900 text-white p-4 rounded-2xl shadow-lg cursor-pointer hover:-transition-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-green-800"
                        initial='hidden'

                        variants={fadeIn("up", 0.2)}
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        onClick={() => handleCardClick(skill.website)}
                    >
                        <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                        <h3 className="text-xl font-bold">{skill.name}</h3>
                        <p>{skill.description}</p>

                    </motion.div>
                ))}
            </div>
            < motion.h1
                initial='hidden'
                variants={fadeIn("up", 0.2)}
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-3xl font-bold text-[#00FF88] text-center my-8">Development and tools</ motion.h1>
            {/* Backend Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {tools.map((tool, index) => (
                    <motion.div
                        key={index}
                        className="skill-card bg-neutral-900 text-white p-4 rounded-2xl shadow-lg cursor-pointer hover:-transition-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-green-800"
                        initial='hidden'

                        variants={fadeIn("up", 0.2)}
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        onClick={() => handleCardClick(tool.website)}
                    >
                        <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-2" />
                        <h3 className="text-xl font-bold">{tool.name}</h3>
                        <p>{tool.description}</p>

                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
