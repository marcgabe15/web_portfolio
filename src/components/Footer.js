import React from 'react';
import "./footer.css";
import {faStar} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Footer = () => (
    <footer>
        <div>
            Inspired by my girlfriend and my family <FontAwesomeIcon icon={faStar}/>
            <br/>
            Built by Marc Diaz
        </div>
    </footer>
);

export default Footer;