import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Home from "./Home";

export default {
  title: "Example/Home",
  component: Home,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home />;
export const Default = Template.bind({});
Default.args = {
  
};
