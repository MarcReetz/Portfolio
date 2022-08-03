import React from "react";

import NavMenu from "./NavMenu";

export default {
  title: 'NavMenu',
  component: NavMenu
}

const Template = (arg) => <NavMenu {...arg}/>;

export const nav = Template.bind({})

nav.args = {

}