import React from "react";
import ToolCard from "./ToolCard";
import { shallow } from "enzyme";

describe("ToolCard component", () => {
  const props = {
    isFavorite: false,
    title: "Unit test",
    description: "Unit testing using jest & enzyme",
    callToAction: "",
    callToMore: "",
  };
  const wrapperComponent = shallow(<ToolCard {...props} />);
  it("should render children components correclty", () => {
    expect(wrapperComponent.find("img")).toHaveLength(1);
    expect(wrapperComponent.find("a")).toHaveLength(2);
    expect(wrapperComponent.find("div")).toHaveLength(8);
    expect(wrapperComponent.find("span").text()).toContain("Unit test");
    expect(wrapperComponent.find("a").last().text()).toBe("Learn More");
  });
});
