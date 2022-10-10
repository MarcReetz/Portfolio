import React from 'react';
import LinkButton from './LinkeButton';


export default {
  title: 'LinkButton',
  component: LinkButton,
};

const Template = (args) => <LinkButton  {...args} />;

export const First = Template.bind({})

First.args = {
    text:"click me"
}
