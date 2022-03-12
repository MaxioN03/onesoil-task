import React from 'react';
import {FieldTypeSummary, IFieldTypeSummaryProps} from './FieldTypeSummary';
import {FieldSuitability} from "../../../ui/FieldTypeRelativeLine/FieldTypeRelativeLine";

const MOCK_FIELDS = [
    {
        id: "field_1",
        name: "Field 1",
        agriculture: ["grain"],
        area: 98.1,
        suitability: 77
    },
    {
        id: "field_2",
        name: "Field 2",
        agriculture: ["grain"],
        area: 85.7,
        suitability: 80
    },
    {
        id: "field_3",
        name: "Field 3",
        agriculture: ["sunflower"],
        area: 101.4,
        suitability: 75
    },
    {
        id: "field_4",
        name: "Field 4",
        agriculture: ["grain"],
        area: 81,
        suitability: 78
    },
    {
        id: "field_5",
        name: "Field 5",
        agriculture: ["grain"],
        area: 102.3,
        suitability: 87
    }
];

const MOCK_HUGE_AREA_FIELDS = [
    {
        id: "field_1",
        name: "Field 1",
        agriculture: ["grain"],
        area: 98.1 * Math.pow(10, 10),
        suitability: 77
    }
];

export default {
    title: 'Fields List/Field Type Summary',
    component: FieldTypeSummary,
};

const Template = (args: IFieldTypeSummaryProps) => <FieldTypeSummary {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const Primary = Template.bind({});
Primary.args = {
    suitabilityType: FieldSuitability.suitable,
    fields: MOCK_HUGE_AREA_FIELDS,
    fieldsCount: {
        [FieldSuitability.suitable]: 10,
        [FieldSuitability.partially_suitable]: 5,
        [FieldSuitability.not_suitable]: 3,
    }
};

export const TypeSuitable = Template.bind({});
TypeSuitable.args = {
    suitabilityType: FieldSuitability.suitable
};

export const TypePartiallySuitable = Template.bind({});
TypePartiallySuitable.args = {
    suitabilityType: FieldSuitability.partially_suitable
};

export const TypeNotSuitable = Template.bind({});
TypeNotSuitable.args = {
    suitabilityType: FieldSuitability.not_suitable
};

export const FieldsSummaryArea = Template.bind({});
FieldsSummaryArea.args = {
    suitabilityType: FieldSuitability.suitable,
    fields: MOCK_FIELDS
};

export const FieldsSummaryHugeArea = Template.bind({});
FieldsSummaryHugeArea.args = {
    suitabilityType: FieldSuitability.suitable,
    fields: MOCK_HUGE_AREA_FIELDS
};