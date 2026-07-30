import React from "react";
import {
    FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaLinux, FaCode
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiDjango, SiDotnet, SiCplusplus } from "react-icons/si";

const Skills = () => {
    const skillCategories = [
        {
            category: "Frontend",
            skills: [
                { name: "HTML", icon: <FaHtml5 /> },
                { name: "CSS", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <FaJsSquare /> },
                { name: "React.js", icon: <FaReact /> },
            ],
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "Python", icon: <FaPython /> },
                { name: "Django", icon: <SiDjango /> },
                { name: "C#", icon: <FaCode /> },  // placeholder for C#
                { name: "ASP.NET", icon: <SiDotnet /> },
                { name: "ADO.NET", icon: <FaDatabase /> },
            ],
        },
        {
            category: "Databases",
            skills: [
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "NoSQL", icon: <FaDatabase /> },
            ],
        },
        {
            category: "Languages & Concepts",
            skills: [
                { name: "C++", icon: <SiCplusplus /> },
                { name: "DSA", icon: <FaGitAlt /> },
                { name: "Hadoop", icon: <FaDatabase /> },
                { name: "OOPS", icon: <FaDatabase /> },
            ],
        },
        {
            category: "Tools & Others",
            skills: [
                { name: "Git", icon: <FaGitAlt /> },
                { name: "Linux Basics", icon: <FaLinux /> },
            ],
        },
    ];

    return (
        <section className="section" id="skills">
            <h2>My Skills</h2>

            <div className="skills-modern">
                {skillCategories.map((category, index) => (
                    <div className="skill-card" key={index}>
                        <h3>{category.category}</h3>
                        <div className="skill-tags">
                            {category.skills.map((skill, i) => (
                                <span key={i}>
                                    {skill.icon} {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
