import React from "react";

import Picture from "./Picture";

export default {
  title: 'Picture',
  component: Picture
}

const Template = (arg) => <Picture {...arg}/>;

export const pic = Template.bind({})

pic.args = {
    src:"pictures/me.jpeg"
}