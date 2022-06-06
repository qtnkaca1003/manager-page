import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import LinkNavigation from "./LinkNavigation";

export default {
  title: "Example/LinkNavigation",
  component: LinkNavigation,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LinkNavigation>;

const Template: ComponentStory<typeof LinkNavigation> = () => (
  <LinkNavigation />
);
export const Default = Template.bind({});
Default.args = {

};