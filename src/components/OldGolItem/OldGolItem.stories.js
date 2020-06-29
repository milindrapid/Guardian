import React from "react";
import OldGolItem from "./OldGolItem";

export default {
    title: 'Old GOL Item',
    component: 'OldGolItem'
};

const bookOfBusinessProps = {
    itemId: 1,
    itemName: 'Book of Business',
    itemDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    iconName: 'chart-line'
};

const eServicesProps = {
    itemId: 2,
    itemName: 'eServices',
    itemDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    iconName: 'clipboard-list'
};

const trackNewBusinessProps = {
    itemId: 3,
    itemName: 'Track New Business',
    itemDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    iconName: 'briefcase'
};

const clientManagerProps = {
    itemId: 4,
    itemName: 'Client Manager',
    itemDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    iconName: 'user'
};

export const bookOfBusinessCard = () => <OldGolItem oldGolItem={bookOfBusinessProps} />
export const eServicesCard = () => <OldGolItem oldGolItem={eServicesProps} />
export const trackNewBusinessCard = () => <OldGolItem oldGolItem={trackNewBusinessProps} />
export const clientManagerCard = () => <OldGolItem oldGolItem={clientManagerProps} />


bookOfBusinessCard.story = {
    name: 'Book of Business'
};

eServicesCard.story = {
    name: 'eServices'
};

trackNewBusinessCard.story = {
    name: 'Track New Business'
};

clientManagerCard.story = {
    name: 'Client Manager'
};