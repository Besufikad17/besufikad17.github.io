import React from 'react';
import "../components/assets/css/style.css";
import {FaTelegram, FaTwitter, FaGithub, FaLinkedin} from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                {/*<p className="footer-links">*/}
                {/*    <a to="#skills"><a>Skills</a></a>*/}
                {/*    |*/}
                {/*    <a to="#experience"><a>Experience</a></a>*/}
                {/*    |*/}
                {/*    <a to="#projects"><a>Projects</a></a>*/}
                {/*    |*/}
                {/*    <a to="#contact"><a>Contact</a></a>*/}
                {/*</p>*/}

                <p className="footer-company-name">© 2021 Besufikad Micheal.</p>
            </div>

            <div className="footer-center">
                <div>
                    <p><span>Addis Ababa, Ethiopia</span></p>
                </div>
                <div>
                    <p>+251973132132</p>
                </div>
                <div>
                    <p>besumicheal@gmail.com</p>
                </div>
            </div>
            <div className="footer-right">
                <i className="footer-icons"><a href="https://t.me/Itachiinthesky"><FaTelegram/></a></i>
                <i className="footer-icons"><a href="https://twitter.com/besumicheal"><FaTwitter/></a></i>
                <i className="footer-icons"><a href="https://github.com/Besufikad17"><FaGithub/></a></i>
                <i className="footer-icons"><a href="https://www.linkedin.com/in/besufikad-tilahun-6592281b4"><FaLinkedin/></a></i>
            </div>
        </footer>
    );
}

export default Footer;
