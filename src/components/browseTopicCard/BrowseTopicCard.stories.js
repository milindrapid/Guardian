import React from "react";
import TopicCard from "./BrowseTopicCard";

export const topicCardData = [
    {
        topicId: 1,
        title: "Performance Qualifications & Awards",
        desc: "We've broken down requirements so you can spend time to figure it out, and more time growing your business"
    }
]

export default {
    title: 'Browse Topic Card',
    component: TopicCard,
};

const props = {
    data: topicCardData,
};

export const BrowseTopicCard = () => <TopicCard {...props} />;

BrowseTopicCard.story = {
    name: 'Default Topic Card'
};