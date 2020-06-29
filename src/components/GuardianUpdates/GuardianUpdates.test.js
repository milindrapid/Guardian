import React from 'react';
import GuardianUpdates from './GuardianUpdates';
import { shallow } from 'enzyme';

const updatesFromGuardian = [
    { id: 1, title: 'Marketing', link: 'Coronavirus and Market Volatility Playbook', content: 'Your resource of managing coronavirus and market volatility' },
]


describe('GuardianUpdates component', () => {
    const props = {
        data: updatesFromGuardian,
    };

    const wrapperComponent = shallow(<GuardianUpdates {...props} />);

    it('Global header component should render correclty', () => {
        expect(wrapperComponent).toMatchSnapshot();
    });

    it('should render children components correclty', () => {
        expect(wrapperComponent.find('ul')).toHaveLength(1);
        expect(wrapperComponent.find('a')).toHaveLength(2);
        expect(wrapperComponent.find('h1')).toHaveLength(1);
        expect(wrapperComponent.find('span')).toHaveLength(1);
    });
});
