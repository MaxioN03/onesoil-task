import React from 'react';
import {FieldItem, IFieldItemProps} from './FieldItem';
import {Agriculture} from "../../types";

const MOCK_FIELD = {
    id: "field_1",
    name: "Field 1",
    agriculture: [Agriculture.sunflower],
    area: 98.1,
    suitability: 77
}

const MOCK_FIELD_LONG_NAME = {
    id: "field_1",
    name: "Very very long name of very very cool field",
    agriculture: [Agriculture.sunflower],
    area: 98.1,
    suitability: 77
}

const MOCK_FIELD_LONG_AGRICULTURE_LIST = {
    id: "field_1",
    name: "Field 1",
    agriculture: new Array(30).fill(Agriculture.sunflower),
    area: 98.1,
    suitability: 77
}

const MOCK_FIELD_HUGE_AREA = {
    id: "field_1",
    name: "Field 1",
    agriculture: [Agriculture.sunflower],
    area: 98.1* Math.pow(10, 10),
    suitability: 77
}

const MOCK_FIELD_LONG_AGRICULTURE_LIST_AND_HUGE_AREA = {
    id: "field_1",
    name: "Field 1",
    agriculture: new Array(30).fill(Agriculture.sunflower),
    area: 98.1* Math.pow(10, 10),
    suitability: 77
}

export default {
    title: 'Fields List/Field Item',
    component: FieldItem,
};

const Template = (args: IFieldItemProps) => <FieldItem {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const Primary = Template.bind({});
Primary.args = {
    field: MOCK_FIELD
};

export const LongName = Template.bind({});
LongName.args = {
    field: MOCK_FIELD_LONG_NAME
};

export const LongAgricultureList = Template.bind({});
LongAgricultureList.args = {
    field: MOCK_FIELD_LONG_AGRICULTURE_LIST
};

export const HugeArea = Template.bind({});
HugeArea.args = {
    field: MOCK_FIELD_HUGE_AREA
};

export const LongAgricultureListWithHugeArea = Template.bind({});
LongAgricultureListWithHugeArea.args = {
    field: MOCK_FIELD_LONG_AGRICULTURE_LIST_AND_HUGE_AREA
};