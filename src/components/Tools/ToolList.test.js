import React from "react";
import ToolList from "./ToolList";
import { shallow } from "enzyme";

describe("ToolList component", () => {
  const props = {
    isFavorite: false,
    title: "Unit test",
    description: "Unit testing using jest & enzyme",
    callToAction: "",
    callToMore: "",
  };
  const wrapperComponent = shallow(<ToolList {...props} />);
  it("should render children components correclty", () => {
    expect(wrapperComponent.find("a")).toHaveLength(2);
    expect(wrapperComponent.find("div")).toHaveLength(6);
    expect(wrapperComponent.find("span").text()).toBe("Unit test");
    expect(wrapperComponent.find(".list-description").text()).toBe(
      "Unit testing using jest & enzyme"
    );
    expect(wrapperComponent.find("a").last().text()).toBe("Learn More");
  });
});
