import React from 'react';

import SocialmediaIcon from './SocialmediaIcon';

export default {
  title: 'SocialmediaIcon',
  component: SocialmediaIcon,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1D2225' }
      ],
    },
  },
};

const Template = (args) => <SocialmediaIcon  {...args} />;

export const Git = Template.bind({})

Git.args = {
    link:"https://github.com/MarcReetz/Portfolio",
    src:"icons/github.png",
    alt:"github"  
}
