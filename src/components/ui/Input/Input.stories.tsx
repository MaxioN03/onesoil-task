import React from 'react';
import {Input} from './Input';
import TestIcon from './test_icon.svg';

const PLACEHOLDER_MOCK = 'Input placeholder';

export default {
    title: 'UI/Input',
    component: Input,
};

const Template = (args: any) => <Input {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const Primary = Template.bind({});
Primary.args = {
    placeholder: PLACEHOLDER_MOCK
};

export const Icon = Template.bind({});
Icon.args = {
    placeholder: PLACEHOLDER_MOCK,
    icon: TestIcon
};