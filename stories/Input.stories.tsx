import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import CInput from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Input",
  component: CInput,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CInput> = () => <CInput />;
export const Default = Template.bind({});
Default.args = {

};
// More on args: https://storybook.js.org/docs/react/writing-stories/args
