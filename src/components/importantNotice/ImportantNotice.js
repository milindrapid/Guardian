import React from 'react';
import './ImportantNotice.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const importantNotice = (props) => {

    const closeNotice = () => {
        props.close()
    }

    return (
        <div className="info-notice-container">
            <div className="info-icon">
                <FontAwesomeIcon icon="info-circle" />
            </div>
            <label className="info-text">Information alert message goes here.</label>
            <a className="info-link" href={props.url}>More Information</a>
            <div className="info-close-icon">
                <FontAwesomeIcon icon="times" onClick={closeNotice} />
            </div>
        </div >
    )
}

export default importantNotice;