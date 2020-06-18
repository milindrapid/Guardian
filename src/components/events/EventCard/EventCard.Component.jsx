import React from 'react';
import styled from 'styled-components';
import streamIconImage from '../../../images/streaming.svg';
import liveIconImage from '../../../images/ic-live.svg';

const EventCardContainer = styled.div`
    border: 1px solid #e9e9e7;
    height: 18rem;
    width: 250px;
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
    height: 5rem;
    margin: 0.2rem 0;
    overflow-y: auto;
`;
const EventTitle = styled.span`
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    cursor: pointer;
    position: relative;
    margin-bottom: 5px;
    padding: 0;
    display: block;
    color: $text-color;
`;
const EventShedule = styled.span`
    font-weight: normal;
    margin-right: 2px;
    margin-left: 2px;
    font-size: 15px;
    color: #2b2b2b;
`;
const EventMore = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
        margin-top: 0;
        font-size: 16px;
        font-style: normal;
        font-weight: bold;
        text-decoration: underline;
        color: #00728d;
    }
    label {
        display: inline-flex;
        font-size: 12px;
        font-style: normal;
        font-weight: bold;
        margin-top: .7rem;
    }
`;
const StreamIcon = styled.span`
    width: 20px;
    height: 20px;
    background: url(${streamIconImage});
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 0.5rem;
`;
const LiveIcon = styled.span`
    width: 14px;
    height: 14px;
    background: url(${liveIconImage});
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 0.5rem;
    margin-top: 0.2rem;
`;


const EventCard = (props) => {
    return (
        <EventCardContainer>
            <img className="banner" src={require('../../../images/sample-image.png')} alt="sample" />
            <DataView>
                <EventDetails>
                    <EventTitle onClick={() => props.onItemClick(props.eventDetails.event)}>{props.eventDetails.event}</EventTitle>
                    <EventShedule>{props.eventDetails.date} | {props.eventDetails.time}</EventShedule>
                </EventDetails>
                <EventMore>
                    <a href="/" >Learn more</a>
                    <label>
                        <StreamIcon />
                        {/* <LiveIcon /> */}
                        STREAMING
                    </label>
                </EventMore>
            </DataView>
        </EventCardContainer>
    );
}

export default EventCard;