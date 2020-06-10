import React from "react";
import ToolList from "../components/Tools/ToolList";

export default {
  title: "Tools list",
  component: ToolList,
};

const props = {
  isFavorite: false,
  title: "Unit test",
  description: "Unit testing using jest & enzyme",
  callToAction: "",
  callToMore: "",
};

export const ToStorybook = () => <ToolList {...props} />;

ToStorybook.story = {
  name: "ToolList",
};
