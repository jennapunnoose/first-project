import React from "react";

const About = () => {
    return (
        <section className="section" id="about">
            <h2>About Me</h2>

            <div
                className="card"
                style={{
                    maxWidth: "900px",
                    margin: "auto",
                    textAlign: "center",
                    lineHeight: "1.9",
                    fontSize: "18px"
                }}
            >
                <p>
                    Hi, I’m <b>Jenna Punnoose</b> — a curious mind who enjoys
                    turning ideas into interactive digital experiences.
                </p>

                <p>
                    MCA graduate from St. Joseph’s University,
                    I love building modern web applications that are clean,
                    useful, and enjoyable to use.
                </p>

                <p>
                    I’m someone who believes learning never stops — every
                    project teaches me something new, and every challenge
                    pushes me to improve.
                </p>

                <p>
                    Beyond coding, I enjoy exploring new technologies,
                    refining designs, and creating solutions that make life
                    easier and smarter.
                </p>

                <p>
                    <b> Building today, learning for tomorrow.</b>
                </p>
            </div>
        </section>
    );
};

export default About;
