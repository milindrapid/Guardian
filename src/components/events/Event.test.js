import React from "react";
import Events from "./Events";
import { shallow } from "enzyme";

describe("Events component", () => {
  const props = [
        { id: 1, event: 'Smart Office Getting Started', date: 'May 11, 2020', time: '2:00PM EST', dateTime: 'May 11, 2020 | 2:00PM EST', eventTitle: 'Smart Office Getting Started' },
        { id: 2, event: 'Building Blocks: Delivery Policies Electronically and Efficiantly ', date: 'May 11, 2020', time: '2:00PM EST', dateTime: 'May 11, 2020 | 2:00PM EST', eventTitle: 'Building Blocks: Delivery Policies Electronically and Efficiantly ' },
        { id: 3, event: 'Smart Office Maximizing Contact Information', date: 'May 11, 2020', time: '2:00PM EST', dateTime: 'May 11, 2020 | 2:00PM EST', eventTitle: 'Smart Office Maximizing Contact Information' },
        { id: 4, event: 'Leveling Up', date: 'May 11, 2020', time: '2:00PM EST', dateTime: 'May 11, 2020 | 2:00PM EST', eventTitle: 'Leveling Up' },
        { id: 5, event: 'New Product Introduction', date: 'May 11, 2020', time: '2:00PM EST', dateTime: 'May 11, 2020 | 2:00PM EST', eventTitle: 'New Product Introduction' }
      ]
  const wrapperComponent = shallow(<Events eventsData={props} />);

  it("Event Card rendered correctly", () => {
    expect(wrapperComponent).toMatchSnapshot();
  });

  it("should render children components correclty", () => {
    expect(wrapperComponent.find('EventsContainer')).toHaveLength(1);
    expect(wrapperComponent.find('EventsTitle')).toHaveLength(1);
    expect(wrapperComponent.find('EventCard')).toHaveLength(5);
    expect(wrapperComponent.find('EventPageLink')).toHaveLength(1);
    expect(wrapperComponent.find("a")).toHaveLength(1);
    expect(wrapperComponent.find('LinkIconContainer')).toHaveLength(1);
    expect(wrapperComponent.find('FontAwesomeIcon')).toHaveLength(1);
    expect(wrapperComponent.find('FontAwesomeIcon').prop('icon')).toBe('arrow-right');
    expect(wrapperComponent.find("EventsTitle").text()).toBe("Upcoming Events");
    expect(wrapperComponent.find('a').text()).toBe("Go to Events");
  });
});
