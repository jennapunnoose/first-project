import React from "react";

const achievements = [
    {
        title: "10th Rank Holder in BCA",
        subtitle: "Mahatma Gandhi University",
        icon: "🏆",
    },
    {
        title: "Academic Representative",
        subtitle: "St. Joseph's University, Bangalore",
        icon: "🎓",
    },
    {
        title: "School Team Basketball Player",
        subtitle: "Team Member & Player",
        icon: "🏀",
    },
];

const Achievements = () => {
    return (
        <section className="section" id="achievements">
            <h2>Achievements</h2>

            <div className="achievements-container">
                {achievements.map((ach, index) => (
                    <div key={index} className="ach-card">
                        <div className="ach-icon">{ach.icon}</div>
                        <h3>{ach.title}</h3>
                        <p>{ach.subtitle}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
