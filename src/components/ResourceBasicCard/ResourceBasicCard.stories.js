import React from 'react';
import ResourceBasicCard from './ResourceBasicCard';

export default {
    title: 'Resource Basic Card',
    component: 'ResourceBasicCard'
};

const props = {
    cardId: 1,
    resourceCardTypeIcon: 'external-link-alt',
    resourceCardTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
};

export const BasicCard = () => <ResourceBasicCard resourceCardDetails={props} />

BasicCard.story = {
    name: 'Basic Card'
};