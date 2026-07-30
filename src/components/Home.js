import React from "react";
import "./Home.css";
import profileImg from "./jenna1.jpg";

const Home = () => {
    return (
        <div className="home-container" id="home">
            <div className="home-card">

                {/* Left Image */}
                <div className="left-section">
                    <img
                        src={profileImg}
                        alt="Jenna"
                        className="profile-img"
                    />
                </div>

                {/* Right Content */}
                <div className="right-section">
                    <h1>Hello, I'm</h1>
                    <h2 className="name">Jenna Punnoose</h2>

                    <p className="description">
                        A passionate MCA graduate student from
                        St. Joseph’s University, Bangalore, focused on
                        creating modern, user-friendly web applications.
                        I enjoy turning ideas into practical digital solutions
                        and continuously learning new technologies to grow as
                        a developer.
                    </p>

                    <div className="buttons">
                        <a
                            href="https://www.linkedin.com/in/jenna-punnoose-3608582b0/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/jennapunnoose"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>

                        <a href="#contact">
                            Contact
                        </a>

                        <a
                            href="/JENNA PUNNOOSE (6).pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Resume
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
