import React from 'react';
import { Select } from './Select';

export default {
    title: 'Example/Select',
    component: Select,
};

const options = [
    {
        label: 'one',
        value: 'one',
    },
    {
        label: 'two',
        value: 'two',
    },
    {
        label: 'three',
        value: 'three',
    }
]

const Template = (args) => <Select {...args} />;

export const Multiple = Template.bind({});
Multiple.args = {
    mode: 'multiple',
    options: options,
};

export const NoSearch = Template.bind({});
NoSearch.args = {
    showSearch: false,
    options: options,
};

export const Loading = Template.bind({});
Loading.args = {
    loading: true,
    options: options,
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
    options: options,
};

export const AllowClear = Template.bind({});
AllowClear.args = {
    allowClear: true,
    options: options,
};


