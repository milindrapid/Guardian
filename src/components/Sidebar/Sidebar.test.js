import React from "react";
import { shallow } from "enzyme";
import Sidebar from "./Sidebar";
import { formatToArrayItems } from "../../utils/helper";
import { sidebar } from "../../constants/sidebar";

describe("Sidebar Component", () => {
  const props = {
    items: formatToArrayItems(sidebar),
  };
  const wrapper = shallow(<Sidebar {...props} />);

  it("Sidebar Component should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("Should render children correctly", () => {
    expect(wrapper.find("div")).toHaveLength(1);
    expect(wrapper.find("ul")).toHaveLength(1);
  });
});
