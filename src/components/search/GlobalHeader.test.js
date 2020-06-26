import React from "react";
import GlobalHeader from "./GlobalHeader";
import { shallow } from "enzyme";

const globalHeaderIconList = [
    {
        id: 1,
        name: "Email",
        image: "envelope-open-text"
    },
    {
        id: 2,
        name: "Calender",
        image: "calendar-alt"
    },
    {
        id: 3,
        name: "Activity",
        image: "chart-line"
    },
    {
        id: 4,
        name: "Favorite Tools",
        image: "th"
    }
]


describe("GlobalHeader component", () => {
    const props = {
        iconList: globalHeaderIconList,
        placeHolder: "Search Guardian Online..."
    };

    const wrapperComponent = shallow(<GlobalHeader {...props} />);

    it('Global header component should render correclty', () => {
        expect(wrapperComponent).toMatchSnapshot();
    });

    it("should render children components correclty", () => {
        expect(wrapperComponent.find("ul")).toHaveLength(1);
        expect(wrapperComponent.find("li")).toHaveLength(4);
    });
});
