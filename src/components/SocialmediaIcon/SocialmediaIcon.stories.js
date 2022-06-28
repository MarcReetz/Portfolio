import React from 'react';

import SocialmediaIcon from './SocialmediaIcon';

export default {
  title: 'SocialmediaIcon',
  component: SocialmediaIcon,
};

const Template = (args) => <SocialmediaIcon  {...args} />;

export const Git = Template.bind({})

Git.args = {
    link:"https://github.com/MarcReetz/Portfolio",
    src:"icons/github.png",
    alt:"github"  
}
