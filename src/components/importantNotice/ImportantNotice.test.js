import React from "react";
import ImportantNotice from "./ImportantNotice";
import { shallow } from "enzyme";

describe("ImportantNotice component", () => {
  const props = {
    message: "Information alert message goes here.",
    linkText: "More Information",
    url: "test_url"
  };

  const wrapperComponent = shallow(<ImportantNotice {...props} />);

  it("should render children components correclty", () => {
    expect(wrapperComponent.find("a")).toHaveLength(1);
    expect(wrapperComponent.find("span").text()).toContain(
      "Information alert message goes here."
    );
    expect(wrapperComponent.find("a").text()).toContain("More Information");
  });
});
