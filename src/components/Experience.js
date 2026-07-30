import React from "react";

const Experience = () => {
    const experiences = [
        {
            title: "React Developer Intern",
            role: "Intern / Frontend Developer",
            company: "Eoxon Exploring Opportunities",
            location: "Kochi, Kerala",
            duration: "Feb 2026 – April 2026",
            description:
                "Working as a React Developer Intern for 3 months, developing responsive web applications, building reusable React components, integrating APIs, and exploring new frontend technologies. Gaining hands-on experience with React.js, JavaScript, and UI/UX best practices.",
        },
        {
            title: "Python Django Developer",
            role: "Intern / Developer",
            company: "Dishasoft Info Solutions Pvt Ltd",
            location: "Muvattupuzha, Kerala",
            duration: "Dec 2023 – Mar 2024",
            description:
                "Worked as a Python Django developer for 4 months, developing web applications, building backend APIs, handling database models, and implementing frontend-backend integration. Gained hands-on experience with Django, REST APIs, and MySQL.",
        },
    ];

    return (
        <section className="section" id="experience">
            <h2>Experience</h2>

            <div className="experience-container">
                {experiences.map((exp, index) => (
                    <div className="exp-card" key={index}>
                        <h3>{exp.title}</h3>
                        <span className="role">{exp.role}</span>
                        <span className="company">{exp.company}, {exp.location}</span>
                        <span className="duration">{exp.duration}</span>
                        <p>{exp.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
