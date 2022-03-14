import React from 'react';
import {Checkbox} from './Checkbox';

const TITLE_MOCK = 'Checkbox Title';

export default {
    title: 'UI/Checkbox',
    component: Checkbox,
};

const Template = (args: any) => <Checkbox {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
    title: TITLE_MOCK,
    checked: false
};

export const Checked = Template.bind({});
Checked.args = {
    title: TITLE_MOCK,
    checked: true
};