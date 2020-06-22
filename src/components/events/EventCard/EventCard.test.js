import React from "react";
import EventCard, { EventCardContainer, 
  EventDataView, 
  EventDetails, 
  EventTitle,
  EventShedule,
  EventMore,
  StreamIcon } from "./EventCard.Component";
import { shallow } from "enzyme";

describe("EventCard component", () => {
  const props = {
    eventId: 1,
    imageUrl: "",
    eventTitle: "Smart Office Getting Started",
    eventDescription: "Smart Office Getting Started",
    redirectUrl: "",
    dateTime: "May 11, 2020 | 2:00PM EST",
    isLive: false,
    learnMoreUrl: "",
    eventImageUrl: "",
    roles: [],
    onItemClick: jest.fn()
  };
  const wrapperComponent = shallow(<EventCard eventDetails={props} />);

  it("Event Card rendered correctly", () => {
    expect(wrapperComponent).toMatchSnapshot();
  });

  it("should render children components correclty", () => {
    expect(wrapperComponent.find(EventCardContainer)).toHaveLength(1);
    expect(wrapperComponent.find('img')).toHaveLength(1);
    expect(wrapperComponent.find(EventDataView)).toHaveLength(1);
    expect(wrapperComponent.find(EventDetails)).toHaveLength(1);
    expect(wrapperComponent.find(EventTitle)).toHaveLength(1);
    expect(wrapperComponent.find(EventShedule)).toHaveLength(1);
    expect(wrapperComponent.find(EventMore)).toHaveLength(1);
    expect(wrapperComponent.find("a")).toHaveLength(1);
    expect(wrapperComponent.find("label")).toHaveLength(1);
    expect(wrapperComponent.find(StreamIcon)).toHaveLength(1);
    expect(wrapperComponent.find("a").text()).toBe("Learn more");
    expect(wrapperComponent.find(EventTitle).text()).toBe("Smart Office Getting Started");
    expect(wrapperComponent.find("label").text()).toMatch("STREAMING");
  });
});
