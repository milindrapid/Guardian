import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../../fontawesome';

export const EventCardContainer = styled.div`
    font-family: Effra;
    border: 1px solid #e9e9e7;
    height: 17rem;
    width: 14rem;
    display: flex;
    flex-direction: column;
    margin: .55rem .75rem .75rem .55rem;
    img {
        width: 100%;
        height: 8rem;
    }
`;
export const EventDataView = styled.div`
    position: relative;
    flex-grow: 1;
    padding: 0.5rem .75rem .5rem .75rem;
`;
export const EventDetails = styled.div`
    height: 5.5rem;
    margin: 0.2rem 0;
    overflow-y: auto;
`;
export const EventTitle = styled.span`
    font-family: inherit;
    font-size: 1rem;
    font-weight: bold;
    font-style: normal;
    cursor: pointer;
    line-height: 1.2rem;
    position: relative;
    margin-bottom: 0.313rem;
    padding: 0;
    display: block;
    color: #2B2B2B;
`;
export const EventShedule = styled.span`
    font-family: inherit;
    font-weight: normal;
    line-height: 1.4rem;
    margin-right: 0.125rem;
    margin-left: 0.125rem;
    font-size: 1rem;
    color: #2b2b2b;
`;
export const EventMore = styled.div`
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
        font-size: 0.75rem;
        font-style: normal;
        font-weight: bold;
        margin-top: .7rem;
    }
`;
export const StreamIcon = styled.span`
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    text-align: left;
`;
export const LiveIcon = styled.span`
    display: block;
    width: 1.25rem;
    height: 1.25rem;
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
            <EventDataView>
                <EventDetails>
                    <EventTitle onClick={() => props.onItemClick(eventTitle)}>{eventTitle}</EventTitle>
                    <EventShedule>{dateTime}</EventShedule>
                </EventDetails>
                <EventMore>
                    <a href={learnMoreUrl} >Learn more</a>
                    <label>
                        {isLive ?
                            <LiveIcon>
                                <FontAwesomeIcon icon="male" />
                            </LiveIcon>
                            :
                            <StreamIcon>
                                <FontAwesomeIcon icon="wifi" />
                            </StreamIcon>
                        }
                        {isLive? 'LIVE': 'STREAMING'}
                    </label>
                </EventMore>
            </EventDataView>
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
        roles: PropTypes.array
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