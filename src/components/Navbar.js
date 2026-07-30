import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setMenuOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <h2 className="logo">My Portfolio</h2>

            <div
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </div>

            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li onClick={() => handleScroll("home")}>Home</li>
                <li onClick={() => handleScroll("about")}>About</li>
                <li onClick={() => handleScroll("skills")}>Skills</li>
                <li onClick={() => handleScroll("experience")}>Experience</li>
                <li onClick={() => handleScroll("projects")}>Projects</li>
                <li onClick={() => handleScroll("achievements")}>Achievements</li>
                <li onClick={() => handleScroll("education")}>Education</li>
                <li onClick={() => handleScroll("contact")}>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;
