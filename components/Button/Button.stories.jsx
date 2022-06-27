import React from 'react';

import { Button } from './Button';
import { PlusOutlined } from '@ant-design/icons';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Button',
};

export const Icon = Template.bind({});
Icon.args = {
  icon: <PlusOutlined/>,
  label: 'Button',
};

