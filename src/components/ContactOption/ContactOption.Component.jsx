import React from 'react';
import './ContactOption.scss';

const ContactOption = (props) => {
    return (
        <div className="contact-item">
            <span className="contact-circle"></span>
            <h5>{props.contactItem.name}</h5>
            <p className="contact-desc">{props.contactItem.description}</p>
        </div>
    );
}

export default ContactOption;