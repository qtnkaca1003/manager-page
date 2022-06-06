import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Title from "./Title";

export default {
  title: "Example/Title",
  component: Title,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;
export const Default = Template.bind({});
Default.args = {
  color: "blue",
  fontSize: "20px",
  fontWeight: "bolder",
  title: "Nhan",
};
