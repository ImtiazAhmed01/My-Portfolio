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
        axios.get("http://localhost:5000/skills")
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
        axios.get("http://localhost:5000/backendskills")
            .then((response) => {
                console.log(response.data);
                setBackendSkills(response.data);
                setVisible(new Array(response.data.length).fill(false));
                setDirections(new Array(response.data.length).fill("down"));
            })
            .catch((error) => {
                console.error("Error fetching backend skills:", error);
            });
        axios.get("http://localhost:5000/tools")
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
        <div className="bg-[#0f172a] min-h-screen p-8">
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
                        className="skill-card bg-[#1e293b] text-white p-4 rounded-2xl shadow-lg cursor-pointer"
                        initial='hidden'
                        variants={fadeIn("up", 0.2)}
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        onClick={() => handleCardClick(skill.website)}
                    >
                        <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                        <h3 className="text-xl font-bold">{skill.name}</h3>
                        <p>{skill.description}</p>
                        <p className="text-lg font-semibold mt-2">{skill.percentage}%</p>
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
                        className="skill-card bg-[#1e293b] text-white p-4 rounded-2xl shadow-lg cursor-pointer"
                        initial='hidden'

                        variants={fadeIn("up", 0.2)}
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        onClick={() => handleCardClick(skill.website)}
                    >
                        <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                        <h3 className="text-xl font-bold">{skill.name}</h3>
                        <p>{skill.description}</p>
                        <p className="text-lg font-semibold mt-2">{skill.percentage}%</p>
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
                        className="skill-card bg-[#1e293b] text-white p-4 rounded-2xl shadow-lg cursor-pointer"
                        initial='hidden'

                        variants={fadeIn("up", 0.2)}
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        onClick={() => handleCardClick(tool.website)}
                    >
                        <img src={tool.icon} alt={tool.name} className="w-12 h-12 mb-2" />
                        <h3 className="text-xl font-bold">{tool.name}</h3>
                        <p>{tool.description}</p>
                        <p className="text-lg font-semibold mt-2">{tool.percentage}%</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
