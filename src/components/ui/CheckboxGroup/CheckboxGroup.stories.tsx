import React from 'react';
import {CheckboxGroup} from './CheckboxGroup';

const TITLE_MOCK = 'Checkbox Title';

export default {
    title: 'UI/Checkbox Group',
    component: CheckboxGroup,
};

const Template = (args: any) => <CheckboxGroup {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
    items: [
        {
            id: '1',
            title: `${TITLE_MOCK} 1`,
            checked: false
        },
        {
            id: '2',
            title: `${TITLE_MOCK} 2`,
            checked: false
        },
        {
            id: '3',
            title: `${TITLE_MOCK} 3`,
            checked: false
        },
    ]
};