import React from "react";

import Navigation from "./Nav";

export default {
  title: 'Nav',
  component: Navigation
}

const Template = (arg) => <Navigation {...arg}/>;

export const nav = Template.bind({})

nav.args = {
    src:"pictures/me.jpeg"
}