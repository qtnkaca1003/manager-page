import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CButtonFl from "./Button";
import { Button } from "@chakra-ui/react";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: CButtonFl,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CButtonFl>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CButtonFl> = (args) => (
  <CButtonFl {...args} />
);
export const Default = Template.bind({});
Default.args = {
  fontSize: "15px",
  borderRadius: "5px",
  color: "red",
  fontWeight: "bold",
  height: "50px",
  title: "Test button",
  width: "150px",
};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
