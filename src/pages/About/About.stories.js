import React from "react";

import About from "./About";

export default {
  title: 'About Page',
  component: About,
};

const Template = (args) => <About {...args} />;

export const First = Template.bind({})

First.args = {
  test:"test"
}