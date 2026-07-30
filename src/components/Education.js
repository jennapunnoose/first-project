import React from "react";
import sju from "./sju.jpg";
import bvm from "./bvm.jpg";
import bmm from "./bmm.jpg";

const Education = () => {
    return (
        <section className="section" id="education">
            <h2>Education</h2>

            <div className="education-grid">

                <div className="edu-card">
                    <img src={sju} alt="SJU" />
                    <div className="edu-content">
                        <h3>MCA</h3>
                        <p>St Joseph's University, Bangalore</p>
                        <span>2024 – 2026</span>
                    </div>
                </div>

                <div className="edu-card">
                    <img src={bvm} alt="BVM College" />
                    <div className="edu-content">
                        <h3>BCA</h3>
                        <p>BVM Holy Cross College, MGU</p>
                        <span>2021 – 2024</span>
                    </div>
                </div>

                <div className="edu-card">
                    <img src={bmm} alt="BMM School" />
                    <div className="edu-content">
                        <h3>Higher Secondary</h3>
                        <p>BMM Senior Secondary School</p>
                        <span>2020 – 2021</span>
                    </div>
                </div>

                <div className="edu-card">
                    <img src={bmm} alt="BMM School" />
                    <div className="edu-content">
                        <h3>Secondary School</h3>
                        <p>BMM Senior Secondary School</p>
                        <span>2018 – 2019</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Education;
