import React from 'react';
import {FieldAreaFilter} from "./FieldAreaFilter";

const MOCK_FIELDS = {
    "suitable": [{
        "id": "field_10",
        "name": "Field 10",
        "agriculture": ["grain"],
        "area": 102.3,
        "suitability": 98
    }, {
        "id": "field_44",
        "name": "Field 44",
        "agriculture": ["grain"],
        "area": 94.6,
        "suitability": 98
    }, {
        "id": "field_29",
        "name": "Field 29",
        "agriculture": ["corn"],
        "area": 103.1,
        "suitability": 96
    }, {
        "id": "field_16",
        "name": "Field 16",
        "agriculture": ["sunflower"],
        "area": 82.2,
        "suitability": 95
    }, {
        "id": "field_33",
        "name": "Field 33",
        "agriculture": ["grain"],
        "area": 101.7,
        "suitability": 95
    }, {
        "id": "field_17",
        "name": "Field 17",
        "agriculture": ["sunflower"],
        "area": 112.4,
        "suitability": 94
    }, {
        "id": "field_19",
        "name": "Field 19",
        "agriculture": ["sunflower"],
        "area": 116.2,
        "suitability": 94
    }, {
        "id": "field_32",
        "name": "Field 32",
        "agriculture": ["corn"],
        "area": 100.7,
        "suitability": 94
    }, {
        "id": "field_41",
        "name": "Field 41",
        "agriculture": ["corn"],
        "area": 87.6,
        "suitability": 92
    }, {
        "id": "field_22",
        "name": "Field 22",
        "agriculture": ["sunflower"],
        "area": 90.5,
        "suitability": 91
    }, {
        "id": "field_26",
        "name": "Field 26",
        "agriculture": ["sunflower"],
        "area": 92.3,
        "suitability": 90
    }, {
        "id": "field_34",
        "name": "Field 34",
        "agriculture": ["sunflower"],
        "area": 109.7,
        "suitability": 89
    }, {
        "id": "field_38",
        "name": "Field 38",
        "agriculture": ["sunflower"],
        "area": 82.3,
        "suitability": 88
    }, {
        "id": "field_40",
        "name": "Field 40",
        "agriculture": ["corn"],
        "area": 97.8,
        "suitability": 88
    }, {
        "id": "field_5",
        "name": "Field 5",
        "agriculture": ["grain"],
        "area": 102.3,
        "suitability": 87
    }, {
        "id": "field_24",
        "name": "Field 24",
        "agriculture": ["corn"],
        "area": 81.7,
        "suitability": 86
    }, {
        "id": "field_31",
        "name": "Field 31",
        "agriculture": ["corn"],
        "area": 80.3,
        "suitability": 86
    }, {"id": "field_11", "name": "Field 11", "agriculture": ["grain"], "area": 91.6, "suitability": 85}],
    "partially_suitable": [{
        "id": "field_49",
        "name": "Field 49",
        "agriculture": ["sunflower"],
        "area": 89.2,
        "suitability": 84
    }, {
        "id": "field_15",
        "name": "Field 15",
        "agriculture": ["corn"],
        "area": 119.7,
        "suitability": 82
    }, {
        "id": "field_18",
        "name": "Field 18",
        "agriculture": ["corn"],
        "area": 88.7,
        "suitability": 82
    }, {
        "id": "field_30",
        "name": "Field 30",
        "agriculture": ["grain"],
        "area": 87.7,
        "suitability": 82
    }, {
        "id": "field_43",
        "name": "Field 43",
        "agriculture": ["sunflower"],
        "area": 89.3,
        "suitability": 81
    }, {
        "id": "field_2",
        "name": "Field 2",
        "agriculture": ["grain"],
        "area": 85.7,
        "suitability": 80
    }, {
        "id": "field_8",
        "name": "Field 8",
        "agriculture": ["corn"],
        "area": 100.4,
        "suitability": 80
    }, {
        "id": "field_28",
        "name": "Field 28",
        "agriculture": ["corn"],
        "area": 93.8,
        "suitability": 80
    }, {
        "id": "field_21",
        "name": "Field 21",
        "agriculture": ["sunflower"],
        "area": 105.6,
        "suitability": 79
    }, {
        "id": "field_50",
        "name": "Field 50",
        "agriculture": ["grain"],
        "area": 104.5,
        "suitability": 79
    }, {"id": "field_4", "name": "Field 4", "agriculture": ["grain"], "area": 81, "suitability": 78}, {
        "id": "field_6",
        "name": "Field 6",
        "agriculture": ["grain"],
        "area": 106.5,
        "suitability": 78
    }, {
        "id": "field_27",
        "name": "Field 27",
        "agriculture": ["grain"],
        "area": 93,
        "suitability": 78
    }, {
        "id": "field_35",
        "name": "Field 35",
        "agriculture": ["corn"],
        "area": 93.3,
        "suitability": 78
    }, {
        "id": "field_1",
        "name": "Field 1",
        "agriculture": ["grain"],
        "area": 98.1,
        "suitability": 77
    }, {
        "id": "field_12",
        "name": "Field 12",
        "agriculture": ["corn"],
        "area": 113.5,
        "suitability": 77
    }, {
        "id": "field_48",
        "name": "Field 48",
        "agriculture": ["grain"],
        "area": 105.6,
        "suitability": 77
    }, {
        "id": "field_36",
        "name": "Field 36",
        "agriculture": ["grain"],
        "area": 85,
        "suitability": 76
    }, {
        "id": "field_39",
        "name": "Field 39",
        "agriculture": ["grain"],
        "area": 106.8,
        "suitability": 76
    }, {
        "id": "field_3",
        "name": "Field 3",
        "agriculture": ["sunflower"],
        "area": 101.4,
        "suitability": 75
    }, {"id": "field_46", "name": "Field 46", "agriculture": ["grain"], "area": 85, "suitability": 75}],
    "not_suitable": [{
        "id": "field_7",
        "name": "Field 7",
        "agriculture": ["corn"],
        "area": 95,
        "suitability": 74
    }, {
        "id": "field_13",
        "name": "Field 13",
        "agriculture": ["sunflower"],
        "area": 104.1,
        "suitability": 74
    }, {
        "id": "field_47",
        "name": "Field 47",
        "agriculture": ["sunflower"],
        "area": 85.7,
        "suitability": 74
    }, {
        "id": "field_9",
        "name": "Field 9",
        "agriculture": ["sunflower"],
        "area": 117.2,
        "suitability": 73
    }, {
        "id": "field_20",
        "name": "Field 20",
        "agriculture": ["sunflower"],
        "area": 109.6,
        "suitability": 73
    }, {
        "id": "field_37",
        "name": "Field 37",
        "agriculture": ["corn"],
        "area": 104.4,
        "suitability": 73
    }, {
        "id": "field_42",
        "name": "Field 42",
        "agriculture": ["sunflower"],
        "area": 87.3,
        "suitability": 72
    }, {
        "id": "field_45",
        "name": "Field 45",
        "agriculture": ["corn"],
        "area": 98.5,
        "suitability": 72
    }, {
        "id": "field_14",
        "name": "Field 14",
        "agriculture": ["sunflower"],
        "area": 109.7,
        "suitability": 71
    }, {
        "id": "field_23",
        "name": "Field 23",
        "agriculture": ["corn"],
        "area": 102.2,
        "suitability": 71
    }, {"id": "field_25", "name": "Field 25", "agriculture": ["sunflower"], "area": 81.8, "suitability": 70}]
};

export default {
    title: 'UI/Field Area Filter',
    component: FieldAreaFilter,
};

const Template = (args: any) => <FieldAreaFilter {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    fields: MOCK_FIELDS
};