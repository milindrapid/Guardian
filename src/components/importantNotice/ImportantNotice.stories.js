import React from 'react';
import ImportantNotice from './ImportantNotice';

export default {
    title: 'Important Notice',
    component: ImportantNotice,
};

const props = {
    message: "Information alert message goes here.",
    url: "/#"
};

export const ImportantInfo = () => <ImportantNotice {...props} />;

ImportantInfo.story = {
    name: "Important Notice"
};