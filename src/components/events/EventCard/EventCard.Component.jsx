import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EventCardContainer = styled.div`
    font-family: Effra;
    border: 1px solid #e9e9e7;
    height: 17rem;
    width: 14rem;
    display: flex;
    flex-direction: column;
    margin: .55rem .75rem .75rem .55rem;
    img {
        width: 100%;
        height: 9rem;
    }
`;
const DataView = styled.div`
    position: relative;
    flex-grow: 1;
    padding: 0.5rem .75rem .5rem .75rem;
`;
const EventDetails = styled.div`
    height: 4.4rem;
    margin: 0.2rem 0;
    overflow-y: auto;
`;
const EventTitle = styled.span`
    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
    font-style: normal;
    cursor: pointer;
    line-height: 1.2rem;
    position: relative;
    margin-bottom: 5px;
    padding: 0;
    display: block;
    color: #2B2B2B;
`;
const EventShedule = styled.span`
    font-family: inherit;
    font-weight: normal;
    line-height: 1.4rem;
    margin-right: 2px;
    margin-left: 2px;
    font-size: 1rem;
    color: #2b2b2b;
`;
const EventMore = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        margin-top: 0;
        font-family: inherit;
        font-size: 1rem;
        font-style: normal;
        font-weight: bold;
        text-decoration: underline;
        color: #00728d;
        cursor: pointer;
    }
    label {
        display: inline-flex;
        font-size: 12px;
        font-style: normal;
        font-weight: bold;
        margin-top: .7rem;
    }
`;
const StreamIcon = styled.div`
    width: 20px;
    height: 20px;
`;
const LiveIcon = styled.div`
    width: 20px;
    height: 20px;
    text-align: center;
`;

const EventCard = (props) => {
    const {
        eventId,
        imageUrl,
        eventTitle,
        eventDescription,
        redirectUrl,
        dateTime,
        isLive,
        learnMoreUrl,
        eventImageUrl,
        roles
    } = props.eventDetails;
    return (
        <EventCardContainer>
            <img src={require('../../../images/sample-image.png')} alt="" />
            <DataView>
                <EventDetails>
                    <EventTitle onClick={() => props.onItemClick(eventTitle)}>{eventTitle}</EventTitle>
                    <EventShedule>{dateTime}</EventShedule>
                </EventDetails>
                <EventMore>
                    <a href={learnMoreUrl} >Learn more</a>
                    <label>
                        <StreamIcon>
                            <FontAwesomeIcon icon="wifi" />
                        </StreamIcon>
                        {/* <LiveIcon>
                            <FontAwesomeIcon icon="male" />
                        </LiveIcon> */}
                        STREAMING
                    </label>
                </EventMore>
            </DataView>
        </EventCardContainer>
    );
}

EventCard.propTypes = {
    eventDetails: PropTypes.shape({
        eventId: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        eventTitle: PropTypes.string.isRequired,
        eventDescription: PropTypes.string,
        redirectUrl: PropTypes.string,
        dateTime: PropTypes.string.isRequired,
        isLive: PropTypes.bool.isRequired,
        learnMoreUrl: PropTypes.string,
        eventImageUrl: PropTypes.string,
        roles: PropTypes.array,
        onItemClick: PropTypes.func.isRequired
    })
};

EventCard.defaultProps = {
    eventDetails: {
        eventDescription: "",
        redirectUrl: "",
        learnMoreUrl: "/",
        eventImageUrl: "",
        roles: []
    }
};

export default EventCard;