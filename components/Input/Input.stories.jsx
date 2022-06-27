import React from 'react';
import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: 'Basic usage',
};

export const AddonBefore = Template.bind({});
AddonBefore.args = {
  addonBefore: 'http://',
};

export const AddonAfter = Template.bind({});
AddonAfter.args = {
  addonAfter: '.com',
  defaultValue: 'mysite',
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: false,
};

export const AllowClear = Template.bind({});
AllowClear.args = {
  allowClear: true,
};
