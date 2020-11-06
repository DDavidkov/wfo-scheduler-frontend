import React from "react";

import { Story, Meta } from "@storybook/react";
import { Button } from "../components/common/buttons";

import { theme } from "../theme";

interface ButtonProps {
  text: string;
  variant: string;
  theme: object;
}

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export default {
  component: Template,
  title: "WFO/Buttons"
} as Meta;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
  theme
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary",
  theme,
  variant: "secondary"
};

export const Success = Template.bind({});
Success.args = {
  text: "Success",
  theme,
  variant: "success"
};

export const Error = Template.bind({});
Error.args = {
  text: "Error",
  theme,
  variant: "error"
};
