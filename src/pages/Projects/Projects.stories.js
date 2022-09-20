import React from "react";

import Projects from "./Projects";

export default {
  title:"Projects",
  component: Projects
}

const Template = (args) => <Projects {...args}/>

export const First = Template.bind({})

First.args = {
  
}