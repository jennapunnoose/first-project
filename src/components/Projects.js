import React from "react";

// Project Images
import pawfetchImg from "./pawfetch.jpg";
import situpImg from "./situp.jpg";
import epanchayatImg from "./panchayat.jpg";
import inoutImg from "./inout.jpg";

const Projects = () => {
    return (
        <section className="section" id="projects">
            <h2>Projects</h2>

            <div className="projects-container">

                {/* Project 1 */}
                <div className="card">
                    <img src={pawfetchImg} alt="Pawfetch Project" className="project-img" />

                    <h3>Pawfect Pet Care Platform - PAWFETCH</h3>
                    <p>
                        A platform connecting pet owners with adoption,
                        grooming, boarding and veterinary services.
                    </p>
                    <p><b>Tech:</b> HTML, CSS, JavaScript, Node.js, MongoDB</p>

                    <div className="project-links">
                        <a href="https://github.com/jennapunnoose/PAWFETCH2"
                            target="_blank" rel="noreferrer">
                            GitHub
                        </a>

                        <a href="https://github.com/jennapunnoose/PAWFETCH2"
                            target="_blank" rel="noreferrer">
                            Demo
                        </a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="card">
                    <img src={situpImg} alt="SITUP Project" className="project-img" />

                    <h3>Smart Chair Monitoring System - SITUP</h3>
                    <p>
                        IoT-based chair system to monitor posture, heart rate,
                        and comfort in real-time.
                    </p>
                    <p><b>Tech:</b> Arduino, Sensors, OLED, Servo Motor</p>

                    <div className="project-links">
                        <a href="https://github.com/jennapunnoose/Situp"
                            target="_blank" rel="noreferrer">
                            GitHub
                        </a>

                        <a href="https://github.com/jennapunnoose/Situp"
                            target="_blank" rel="noreferrer">
                            Demo
                        </a>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="card">
                    <img src={epanchayatImg} alt="E-Panchayat" className="project-img" />

                    <h3>E-Panchayat Platform</h3>
                    <p>
                        Digital governance platform enabling citizens to access
                        local services online.
                    </p>
                    <p><b>Tech:</b> Python, Django, MySQL</p>

                    <div className="project-links">
                        <a href="https://github.com/jennapunnoose/EPanchayat" target="_blank" rel="noreferrer">
                            GitHub
                        </a>


                        <a href="https://github.com/jennapunnoose/EPanchayat" target="_blank" rel="noreferrer">
                            Demo
                        </a>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="card">
                    <img src={inoutImg} alt="In-Out Register" className="project-img" />

                    <h3>In-Out Register System</h3>
                    <p>
                        Web application to record daily student entry and exit
                        details efficiently.
                    </p>
                    <p><b>Tech:</b> HTML, CSS, JavaScript, MySQL</p>

                    <div className="project-links">
                        <a href="https://github.com/jennapunnoose/Inout"
                            target="_blank" rel="noreferrer">
                            GitHub
                        </a>

                        <a href="https://github.com/jennapunnoose/Inout"
                            target="_blank" rel="noreferrer">
                            Demo
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
