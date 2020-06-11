import React from "react";
import ImportantNotice from "./ImportantNotice";
import { shallow } from "enzyme";

describe("ImportantNotice component", () => {
  const url = "test_url";

  const wrapperComponent = shallow(<ImportantNotice {...url} />);
  it("should render children components correclty", () => {
    expect(wrapperComponent.find("label")).toHaveLength(1);
    expect(wrapperComponent.find("a")).toHaveLength(1);
    expect(wrapperComponent.find("label").text()).toContain(
      "Information alert message goes here."
    );
    expect(wrapperComponent.find("a").text()).toContain("More Information");
  });
});
