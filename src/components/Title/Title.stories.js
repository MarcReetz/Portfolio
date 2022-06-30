import React from "react";

import Title from "./Title";

export default {
  title: 'title',
  component: Title
};

const Template = (args) => <Title {...args} />;

export const First = Template.bind({})

First.args = {
  title:"About",
  number: "01"
}