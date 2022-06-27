import React from 'react';
import { Pin } from './Pin';

export default {
  title: 'Example/Pin',
  component: Pin,
};

const Template = (args) => <Pin {...args} />;

export const Length = Template.bind({});
Length.args = {
  length: 4,
};

export const Secret = Template.bind({});
Secret.args = {
  secret: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Type = Template.bind({});
Type.args = {
  type: 'numeric',
};

export const Alphanumeric = Template.bind({});
Alphanumeric.args = {
  length: 5,
  type: 'alphanumeric',
};