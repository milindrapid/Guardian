import React from "react";
import ToolCard from "../components/Tools/ToolCard";

export default {
  title: "Tools Card",
  component: ToolCard,
};

const props = {
  isFavorite: false,
  title: "Unit test",
  description: "Unit testing using jest & enzyme",
  callToAction: "",
  callToMore: "",
};

export const ToStorybook = () => <ToolCard {...props} />;

ToStorybook.story = {
  name: "ToolCard",
};
