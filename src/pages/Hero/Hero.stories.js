import React from "react";

import Hero from "./Hero";

export default {
  title: 'Hero Page',
  component: Hero,
};

const Template = (args) => <Hero {...args} />;

export const First = Template.bind({})

First.args = {
  
}