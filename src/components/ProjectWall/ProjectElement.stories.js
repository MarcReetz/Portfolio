import React from "react";

import ProjectElement from "./ProjectElement";

export default {
  title:'ProjectElement',
  component: ProjectElement
}

const Template = (args) => <ProjectElement {...args}/>

export const First = Template.bind({})

First.args = {
  title:'super nice Project',
  text:'i developed a super nice project'
}