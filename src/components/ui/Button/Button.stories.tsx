import React from 'react';
import {Button, ButtonSize, ButtonType} from './Button';
import TestIcon from './test_icon.svg';

const TITLE_MOCK = 'Button Title';

export default {
    title: 'UI/Button',
    component: Button,
};

const Template = (args: any) => <Button {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const TitleString = Template.bind({});
TitleString.args = {
    title: TITLE_MOCK
};

export const TitleElement = Template.bind({});
TitleElement.args = {
    title: <span>Button Title</span>
};

export const SizeSPrimary = Template.bind({});
SizeSPrimary.args = {
    title: TITLE_MOCK,
    size: ButtonSize.S,
    type: ButtonType.Primary,
};

export const SizeMPrimary = Template.bind({});
SizeMPrimary.args = {
    title: TITLE_MOCK,
    size: ButtonSize.M,
    type: ButtonType.Primary,
};

export const SizeLPrimary = Template.bind({});
SizeLPrimary.args = {
    title: TITLE_MOCK,
    size: ButtonSize.L,
    type: ButtonType.Primary,
};

export const SizeSSecondary = Template.bind({});
SizeSSecondary.args = {
    title: TITLE_MOCK,
    size: ButtonSize.S,
    type: ButtonType.Secondary,
};

export const SizeMSecondary = Template.bind({});
SizeMSecondary.args = {
    title: TITLE_MOCK,
    size: ButtonSize.M,
    type: ButtonType.Secondary,
};

export const SizeLSecondary = Template.bind({});
SizeLSecondary.args = {
    title: TITLE_MOCK,
    size: ButtonSize.L,
    type: ButtonType.Secondary,
};

export const CenterPrimary = Template.bind({});
CenterPrimary.args = {
    title: TITLE_MOCK,
    center: true,
    type: ButtonType.Primary,
};

export const CenterSecondary = Template.bind({});
CenterSecondary.args = {
    title: TITLE_MOCK,
    center: true,
    type: ButtonType.Secondary,
};

export const Icon = Template.bind({});
Icon.args = {
    title: TITLE_MOCK,
    icon: <img src={TestIcon} alt='Test icon' style={{paddingRight: '10px'}} />
};

const SIDE_CONTROL_STYLE = {
    borderLeft: '1px solid red',
    height: '100%',
    padding: '0 15px',
    display: 'flex',
    alignItems: 'center'
}

export const WithRightSideControl = Template.bind({});
WithRightSideControl.args = {
    title: TITLE_MOCK,
    rightSideControl: <div onClick={() => {console.log('CHECK')}} style={SIDE_CONTROL_STYLE}>AAA</div>
};