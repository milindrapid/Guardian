import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../fontawesome';
import EventCard from './EventCard/EventCard.Component';

const EventsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    background-color: #FFFFFF;
    border: 1px solid #a7a8aa;
    margin: 2rem 2rem 0 2rem;
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding-left: 1rem;
        padding-bottom: 0.5rem;
        margin: 0;
    }
`;
EventsContainer.displayName = 'EventsContainer';

const EventsTitle = styled.span`
    font-style: normal;
    font-size: 2rem;
    line-height: 1.625rem;
    font-weight: bold;
    margin-left: 1.5rem;
    color: #0d3f5e;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
`;
EventsTitle.displayName = 'EventsTitle';

const EventPageLink = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 1rem 1rem 1.5rem;
    align-items: center;
    a {
        width: fit-content;
        font-size: 1rem;
        font-weight: bold;
        font-style: normal;
        line-height: 1.188rem;
        color: #00728d;
        text-decoration: underline;
        margin-right: 0.75rem;
    }
`;
EventPageLink.displayName = 'EventPageLink';

const LinkIconContainer = styled.span`
    display: block;
    width: 1rem;
    height: 1rem;
    text-align: center;
    font-style: normal;
    font-weight: 900;
    font-size: 0.938rem;
    line-height: 1.063rem;
    color: #0D3F5E;
`;
LinkIconContainer.displayName = 'LinkIconContainer';

const Events = (props) => {

    const { eventsData, onItemClick } = props;

    const eventCardClick = (event) => {
        onItemClick(event);
    }

    const getEvents = () => {
        return (
            eventsData.map(event => (
                <EventCard
                    eventDetails={event}
                    onItemClick={(event) => eventCardClick(event)}
                />
            ))
        )
    }

    return (
        <EventsContainer>
            <EventsTitle>Upcoming Events</EventsTitle>
            <ul>
                {getEvents()}
            </ul>
            <EventPageLink>
                <a href="/">Go to Events</a>
                <LinkIconContainer>
                    <FontAwesomeIcon icon="arrow-right" />
                </LinkIconContainer>
            </EventPageLink>
        </EventsContainer>
    )
}

Events.propTypes = {
    eventsData: PropTypes.arrayOf(Object).isRequired,
    onItemClick: PropTypes.func
};

Events.defaultProps = {
    onItemClick: () => {}
};

export default Events;