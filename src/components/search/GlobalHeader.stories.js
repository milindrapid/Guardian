import React from 'react';
import GlobalHeader from './GlobalHeader';

const globalHeaderIconList = [
    {
        id: 1,
        name: 'Email',
        image: 'envelope-open-text'
    },
    {
        id: 2,
        name: 'Calender',
        image: 'calendar-alt'
    },
    {
        id: 3,
        name: 'Activity',
        image: 'chart-line'
    },
    {
        id: 4,
        name: 'Favorite Tools',
        image: 'th'
    }
]

export default {
    title: 'Global Header',
    component: GlobalHeader,
};

const props = {
    iconList: globalHeaderIconList,
    placeHolder: 'Search Guardian Online...'
};

export const Search = () => <GlobalHeader {...props} />;

Search.story = {
    name: 'Global Header'
};