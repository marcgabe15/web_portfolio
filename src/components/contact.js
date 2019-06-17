import React, {Component} from 'react';
import "./contact.css";
import contactList from "../data/contacts.json";


class Contact extends Component {
    render() {
        return (
            <section id="contact" className="section-contact">
                <h2 className="text-center">CONTACT</h2>
                <div className="container contact-img">
                    {contactList.map(contact => (
                    <div className="col-sm-2 align-icon" key={contact.url}>
                        <a
                        href={contact.url}
                        target="_blank"
                        title={`External link to my ${contact.name} account`}
                        className="btn-social-icon"
                        rel="noopener noreferrer"
                        >
                        <span
                            className={`${contact.prefix} fa-${contact.icon}`}
                            alt={`External link to my ${contact.name} account`}
                        />
                        </a>
                    </div>
                    ))}
                </div>
            </section>
        )
    }
}

export default Contact;