import React, {Component} from 'react';
import "./contact.css";
import contactList from "../data/contacts.json";
import {faGithub, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
    render() {
        const logomap = [
            {
                logo: 'github',
                icon: faGithub
            },
            {
                logo: 'linkedin',
                icon: faLinkedin
            },
            {
                logo: 'envelope',
                icon: faEnvelope
            },
            {
                logo: 'facebook',
                icon: faFacebook
            }
        ]
        return (
            <section id="contact" className="section-contact">
                <h2 className="text-center">CONTACT</h2>
                <div className="container contact-img">
                    {contactList.map(contact => {
                       const logo = logomap.find(n => {
                            return n.logo === contact.icon
                        })
                        return (
                            <div className="col-sm-2 align-icon" key={contact.url}>
                                <a
                                href={contact.url}
                                target="_blank"
                                title={`External link to my ${contact.name} account`}
                                className="btn-social-icon"
                                rel="noopener noreferrer"
                                >
                                <FontAwesomeIcon icon={logo.icon}  size="2x" className="contact-icon"/>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }
}

export default Contact;