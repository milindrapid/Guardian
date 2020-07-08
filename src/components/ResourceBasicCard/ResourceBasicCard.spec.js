import React from 'react';
import ResourceBasicCard from './ResourceBasicCard';
import { shallow } from "enzyme";

describe("ResourceBasicCard component", () => {
    const props = {
        cardId: 1,
        resourceCardTypeIcon: 'external-link-alt',
        resourceCardTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    };
    const wrapperComponent = shallow(<ResourceBasicCard resourceCardDetails={props} />);

    it("Resource Basic Card rendered correctly", () => {
        expect(wrapperComponent).toMatchSnapshot();
    });

    it("should render children components correclty", () => {
        expect(wrapperComponent.find('p')).toHaveLength(1);
        expect(wrapperComponent.find('p').text()).toBe('Lorem Ipsum is simply dummy text of the printing and typesetting industry');
    });

});
