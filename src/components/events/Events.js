import React from 'react';
import './Events.scss';
import EventCard from './EventCard/EventCard.Component';

const Events = (props) => {

    const eventCardClick = (event) => {
        props.onItemClick(event)
    }

    const getEvents = () => {
        return (
            props.eventsData.map(event => (
                <EventCard
                    eventDetails={event}
                    onItemClick={(event) => eventCardClick(event)}
                />
            ))
        )
    }

    return (
        <div className="event-container">
            <span className="main-title">Events</span>
            <ul className="event-data-container">
                {getEvents()}
            </ul>
            <div className="go-to-events-container">
                <a className="go-to-events" href="/">Go to Events</a>
                <img className="ic-goto" src={require('../../images/right-arrow.svg')} alt="close" />
            </div>
        </div>
    )
}

export default Events;