import React from "react";
import OldGolItem from "./OldGolItem";
import { shallow } from "enzyme";

describe("EventCard component", () => {
    const props = {
        itemId: 1,
        itemName: 'Book of Business',
        itemDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        iconName: 'chart-line'
    };
    
  const wrapperComponent = shallow(<OldGolItem oldGolItem={props} />);

  it("Old GOL item rendered correctly", () => {
    expect(wrapperComponent).toMatchSnapshot();
  });

  it("should render children components correclty", () => {
    expect(wrapperComponent.find('FontAwesomeIcon')).toHaveLength(1);
    expect(wrapperComponent.find('a')).toHaveLength(1);
    expect(wrapperComponent.find('p')).toHaveLength(1);
  });

//   it("should render children components correclty", () => {
//     props.isLive = true;
//     wrapperComponent.setProps({eventDetails: props});
//     expect(wrapperComponent.find(LiveIcon)).toHaveLength(1);
//     expect(wrapperComponent.find("label").text()).toMatch("LIVE");
//   });
});
