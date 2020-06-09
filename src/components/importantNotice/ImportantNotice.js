import React from 'react';
import './ImportantNotice.scss';

const importantNotice = (props) => {

    const closeNotice = () => {
        props.close()
    }

    const moreInfo = () => {
        alert('More Information')
    }

    return (
        <div className="info-notice-container">
            <img className="info-icon" src={require('../../images/info.svg')} alt="info" />
            <label className="info-text">Information alert message goes here.</label>
            <label className="info-link" onClick={moreInfo}>More Information</label>
            <img
                className="info-close-icon"
                src={require('../../images/white-close.svg')}
                onClick={closeNotice}
                alt="close" />
        </div >
    )
}

export default importantNotice;