import React from 'react';
import './EventCard.scss';

const EventCard = (props) => {
    return (
        <div className="event-card-container">
            <img className="banner" src={require('../../images/sample-image.png')} alt="sample" />
            <div className="data-view">
                <div className="event-details">
                    <span className="event-title" onClick={() => props.onItemClick()}>{props.eventDetails.event}</span>
                    <span className="event-sche">{props.eventDetails.date} | {props.eventDetails.time}</span>
                </div>
                <div className="event-more">
                    <a className="learn-more-link" href="/" >Learn more</a>
                    <label className="streaming"><span className="ic-streaming"></span>STREAMING</label>
                </div>
            </div>
        </div >
    );
}

export default EventCard;