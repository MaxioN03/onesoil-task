import React from 'react';
import {FieldAreaSlider} from "./FieldAreaSlider";

export default {
    title: 'UI/Field Area Slider',
    component: FieldAreaSlider,
};

const Template = (args: any) => <FieldAreaSlider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    min: 0,
    max: 1000,
    onChange:  ({min, max}) => {},
};