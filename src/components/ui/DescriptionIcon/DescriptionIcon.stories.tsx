import React from 'react';
import {DescriptionIcon} from "./DescriptionIcon";

export default {
    title: 'UI/Description Icon',
    component: DescriptionIcon,
};

const Template = (args: any) => <DescriptionIcon {...args} />;

export const Primary = Template.bind({});
Primary.args = {};