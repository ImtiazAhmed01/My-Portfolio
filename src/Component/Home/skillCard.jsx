import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const SkillCard = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/skills")
            .then((response) => {
                console.log(response.data); // Log response for debugging
                setSkills(response.data);
            })
            .catch((error) => {
                console.error("Error fetching skills:", error);
            });

    }, []);

    const animationVariants = {
        hidden: (direction) => ({
            opacity: 0,
            x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
            y: direction === "bottom" ? 100 : 0,
        }),
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const handleCardClick = (website) => {
        if (website) {
            window.open(website, "_blank");
        }
    };

    return (
        <div className="bg-[#0f172a] min-h-screen p-8">
            <h1 className="text-3xl font-bold text-white text-center mb-8">My Skills</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill, index) => {
                    const direction = index % 3 === 0 ? "left" : index % 3 === 1 ? "bottom" : "right";

                    return (
                        <motion.div
                            key={index}
                            className="bg-[#1e293b] text-white p-4 rounded-2xl shadow-lg cursor-pointer"
                            custom={direction}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={animationVariants}
                            onClick={() => handleCardClick(skill.website)}
                        >
                            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                            <h3 className="text-xl font-bold">{skill.name}</h3>
                            <p>{skill.description}</p>
                            <p className="text-lg font-semibold mt-2">{skill.percentage}%</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default SkillCard;
