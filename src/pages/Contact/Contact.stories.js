import React, { Component } from "react";

import Contact from "./Contact";

export default {
  title:"Contact",
  component: Contact
}

const Template = (args) => <Contact {...args}/>

export const First = Template.bind({})

First.args = {

}