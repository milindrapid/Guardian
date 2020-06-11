import React from 'react';
import './GuradianUpdates.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GuradianUpdates = (props) => {

    const onItemClick = (link) => {
        props.onItemClick(link)
        // alert(link)
    }

    const getGuardianUpdates = () => {
        return (
            props.data.map(update => (
                <div className="data-content">
                    <div className="close-image">
                        <FontAwesomeIcon icon="times" />
                    </div>
                    <label className="item-title">{update.title}</label>
                    <label className="item-link" onClick={() => onItemClick(update.link)}>{update.link}</label>
                    <label className="item-content">{update.content}</label>
                    <div className="hr-line" />
                </div>
            ))
        )
    }

    return (
        <div className="base-container">
            <span className="update-main-title">Updates from Guardian</span>
            <div>
                <ul className="item-container">
                    {getGuardianUpdates()}
                </ul>
            </div>
            <div className="go-to-link-container">
                <a className="go-to-link" href="/">Go to Resource Center</a>
                <img className="go-to-link-icon" src={require('../../images/right-arrow.svg')} alt="close" />
            </div>
        </div>
    )
}
export default GuradianUpdates;