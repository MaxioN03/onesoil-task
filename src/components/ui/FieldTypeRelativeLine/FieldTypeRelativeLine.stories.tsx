import React from 'react';
import {FieldSuitability, FieldTypeRelativeLine} from './FieldTypeRelativeLine';

export default {
    title: 'UI/Field Type Relative Line',
    component: FieldTypeRelativeLine,
};

const Template = (args: any) => <FieldTypeRelativeLine {...args} />;

export const Empty = Template.bind({});
Empty.args = {};

export const Suitable = Template.bind({});
Suitable.args = {
    fieldsCount: {
        [FieldSuitability.suitable]: 10,
        [FieldSuitability.partially_suitable]: 0,
        [FieldSuitability.not_suitable]: 0,
    }
};

export const SuitableCurrent = Template.bind({});
SuitableCurrent.args = {
    fieldsCount: {
        [FieldSuitability.suitable]: 10,
        [FieldSuitability.partially_suitable]: 0,
        [FieldSuitability.not_suitable]: 0,
    },
    currentSuitableType: FieldSuitability.suitable
};

export const PartiallySuitable = Template.bind({});
PartiallySuitable.args = {
    fieldsCount: {
        [FieldSuitability.suitable]: 0,
        [FieldSuitability.partially_suitable]: 10,
        [FieldSuitability.not_suitable]: 0,
    }
};

export const PartiallySuitableCurrent = Template.bind({});
PartiallySuitableCurrent.args = {
    fieldsCount: {
        [FieldSuitability.suitable]: 0,
        [FieldSuitability.partially_suitable]: 10,
        [FieldSuitability.not_suitable]: 0,
    },
    currentSuitableType: FieldSuitability.partially_suitable
};

export const NotSuitable = Template.bind({});
NotSuitable.args = {
    fieldsCount: {
        [FieldSuitability.suitable]: 0,
        [FieldSuitability.partially_suitable]: 0,
        [FieldSuitability.not_suitable]: 10,
    }
};

export const NotSuitableCurrent = Template.bind({});
NotSuitableCurrent.args = {
    fieldsCount: {
        [FieldSuitability.suitable]: 0,
        [FieldSuitability.partially_suitable]: 0,
        [FieldSuitability.not_suitable]: 10,
    },
    currentSuitableType: FieldSuitability.not_suitable
};

export const TwoSuitabilitiesNoCurrent = Template.bind({});
TwoSuitabilitiesNoCurrent.args = {
    fieldsCount: {
        [FieldSuitability.suitable]: 10,
        [FieldSuitability.partially_suitable]: 10,
    }
};

export const TwoSuitabilitiesWithCurrent = Template.bind({});
TwoSuitabilitiesWithCurrent.args = {
    fieldsCount: {
        [FieldSuitability.suitable]: 10,
        [FieldSuitability.partially_suitable]: 10,
    },
    currentSuitableType: FieldSuitability.suitable
};

export const AllSuitabilitiesNoCurrent = Template.bind({});
AllSuitabilitiesNoCurrent.args = {
    fieldsCount: {
        [FieldSuitability.suitable]: 10,
        [FieldSuitability.partially_suitable]: 30,
        [FieldSuitability.not_suitable]: 10,
    }
};

export const AllSuitabilitiesWithCurrent = Template.bind({});
AllSuitabilitiesWithCurrent.args = {
    fieldsCount: {
        [FieldSuitability.suitable]: 10,
        [FieldSuitability.partially_suitable]: 30,
        [FieldSuitability.not_suitable]: 10,
    },
    currentSuitableType: FieldSuitability.partially_suitable
};