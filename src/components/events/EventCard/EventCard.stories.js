import React from "react";
import EventCard from "./EventCard.Component";

export default {
    title: 'Event Card',
    component: 'EventCard'
};

const streamingProps = {
    eventId: 1,
    imageUrl: "",
    eventTitle: "Smart Office Getting Started",
    eventDescription: "Smart Office Getting Started",
    redirectUrl: "",
    dateTime: "May 11, 2020 | 2:00PM EST",
    isLive: false,
    learnMoreUrl: "",
    eventImageUrl: "",
    roles: [],
};

const liveProps = {
    eventId: 1,
    imageUrl: "",
    eventTitle: "Smart Office Getting Started",
    eventDescription: "Smart Office Getting Started",
    redirectUrl: "",
    dateTime: "May 11, 2020 | 2:00PM EST",
    isLive: true,
    learnMoreUrl: "",
    eventImageUrl: "",
    roles: [],
};

export const StreamingEventCard = () => <EventCard eventDetails={streamingProps} />
export const LiveEventCard = () => <EventCard eventDetails={liveProps} />

StreamingEventCard.story = {
    name: 'Streaming View'
};

LiveEventCard.story = {
    name: 'Live View'
};