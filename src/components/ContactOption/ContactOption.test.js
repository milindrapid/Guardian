import React from 'react';
import ContactOption from './ContactOption.Component';
import { shallow } from 'enzyme';

describe('ContactOption component', () => {
    const props = {
        contactId: 1,
        name: 'FAQs',
        description: 'Find out more information in our library of Frequesntly Asked Questions.',
        imageUrl: ''
    };
    const wrapperComponent = shallow(<ContactOption contactItem={props} />);

    it('Contact option rendered correctly', () => {
        expect(wrapperComponent).toMatchSnapshot();
    });

    it('should render children components correclty', () => {
        expect(wrapperComponent.find('img')).toHaveLength(1);
        expect(wrapperComponent.find('h5')).toHaveLength(1);
        expect(wrapperComponent.find('p')).toHaveLength(1);
        expect(wrapperComponent.find('h5').text()).toBe('FAQs');
        expect(wrapperComponent.find('p').text()).toBe('Find out more information in our library of Frequesntly Asked Questions.');
    });
});
