import React from "react";

const Contact = () => {
    return (
        <section className="section" id="contact">
            <h2>Contact Me</h2>

            <div className="contact-card">
                <p>
                    Interested in working together or have questions?
                    Feel free to reach out to me.
                </p>

                <p><b>Email:</b> jennapunnoose02@gmail.com</p>
                <p><b>Phone:</b> +91 6282607533</p>

                <div className="contact-buttons">
                    <a href="mailto:jennapunnoose02@gmail.com" className="contact-btn">
                        ✉ Send Email
                    </a>

                    <a href="tel:+916282607533" className="contact-btn">
                        📞 Call Me
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="contact-footer">
                © 2026 Jenna Punnoose. All rights reserved.
            </footer>
        </section>
    );
};

export default Contact;
