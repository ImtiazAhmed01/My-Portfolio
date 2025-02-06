import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/projects/${id}`)
            .then((response) => setProject(response.data))
            .catch((error) => console.error("Error fetching project details:", error));
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-8 text-white bg-black">
            <h1 className="text-3xl font-bold mb-4">{project.project_name}</h1>

            <div className="mb-6">
                <a
                    href={project.details?.live_project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#00FF88] text-black px-4 py-2 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
                >
                    🔗 Visit Live Project
                </a>
            </div>

            <img src={project.project_image} alt={project.project_name} className="w-full rounded-lg mb-4" />
            <p className="text-lg">{project.details?.brief_description}</p>

            <h3 className="text-xl font-semibold mt-6">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mt-2">
                {(project.details?.main_technology_stack || []).map((tech, index) => (
                    <span key={index} className="bg-gray-700 text-white px-3 py-1 rounded-md text-sm">
                        {tech}
                    </span>
                ))}
            </div>

            <h3 className="text-xl font-semibold mt-6">Challenges Faced</h3>
            <p className="ml-6">{project.details?.challenges_faced}</p>

            <h3 className="text-xl font-semibold mt-6">Potential Improvements</h3>
            <p className="ml-6">{project.details?.potential_improvements}</p>

            <div className="mt-6">
                <a href={project.details?.github_repository_link} target="_blank" rel="noopener noreferrer" className="text-[#00FF88]">
                    GitHub Repo
                </a>
            </div>
        </div>
    );
};

export default ProjectDetails;
