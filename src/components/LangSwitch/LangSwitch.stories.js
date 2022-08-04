import React from "react";

import LangSwitch from "./LangSwitch";

export default {
  title: 'Language Switch',
  component: LangSwitch
}

const Template = (arg) => <LangSwitch {...arg}/>;

export const first = Template.bind({})

first.args = {
  
}