import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Header from "./Header";

export default {
  title: "Example/Header",
  component: Header,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;
export const Default = Template.bind({});
Default.args = {
  
};
