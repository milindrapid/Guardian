import React from "react";
import { shallow } from "enzyme";
import SidebarItem from "./SidebarItem";
import { arrayItems } from "../../__mocks__/mockData";

describe("SidebarItem Component", () => {
  const props = {
    name: "home",
    children: arrayItems,
    isExpanded: false,
  };

  const wrapper = shallow(<SidebarItem {...props} />);

  it("SidebarItem Component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render children correctly", () => {
    expect(wrapper.find("ul")).toHaveLength(0);
    expect(wrapper.find("li")).toHaveLength(1);
    expect(wrapper.find("div")).toHaveLength(2);
  });
});
