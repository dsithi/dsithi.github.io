import React from 'react';
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    return (
        <div className="Navbar">
            <h1>Domenic Sithimolada</h1>
            <nav>
                <a href="https://github.com/dsithi" className="Navbar-item" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com/in/dsithim" target="_blank" className="Navbar-item" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon></a>
                <a href="https://www.instagram.com/d_sithim/" target="_blank" className="Navbar-item" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="2x"></FontAwesomeIcon></a>
            </nav>
        </div>

    )
};

export default Navbar;