import React from "react";
import ContactOption from "./ContactOption.Component";

export default {
    title: 'Contact Option',
    component: 'ContactOption'
};

const faqProps = {
    contactId: 1,
    name: 'FAQs',
    description: 'Find out more information in our library of Frequesntly Asked Questions.',
    imageUrl: ""
};

const forumProps = {
    contactId: 2,
    name: 'Forums',
    description: 'Learn from our knowledgeable and growing community.',
    imageUrl: ""
};

const contactProps = {
    contactId: 3,
    name: 'Contact',
    description: 'Chat the Guardian service desk, or checkout our directory of home office staff.',
    imageUrl: ""
};

export const FaqOption = () => <ContactOption contactItem={faqProps} />
export const ForumOption = () => <ContactOption contactItem={forumProps} />
export const PhoneOption = () => <ContactOption contactItem={contactProps} />

FaqOption.story = {
    name: 'FAQ'
};

ForumOption.story = {
    name: 'Forums'
};

PhoneOption.story = {
    name: 'Contacts'
};