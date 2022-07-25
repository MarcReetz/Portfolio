import React from "react";

import SkillIcon from "./SkillIcon";

export default {
  title: 'Skillicon',
  component: SkillIcon,
  argTypes: { onClick: { action: 'clicked' } }
};

const Template = (args) => <SkillIcon {...args} />;

export const First = Template.bind({})
export const Selected = Template.bind({});
export const RelationHigh = Template.bind({});
export const RelationMedium = Template.bind({});

First.args = {
  icon:{
    iconClass:"fa-css3-alt"
  }
}

Selected.args = {
  icon:{
    iconClass:"fa-css3-alt",
    relations:1
  }
}

RelationHigh.args = {
  icon:{
    iconClass:"fa-css3-alt",
    relations:2
  }
}

RelationMedium.args = {
  icon:{
    iconClass:"fa-css3-alt",
    relations:3
  }
}

