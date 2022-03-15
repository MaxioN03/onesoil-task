import React from 'react';
import {FieldAreaFilter} from "./FieldAreaFilter";

const MOCK_FIELDS = {
    "suitable": [{
        "id": "field_10",
        "name": "Field 10",
        "crop": ["grain"],
        "area": 102.3,
        "suitability": 98
    }, {
        "id": "field_44",
        "name": "Field 44",
        "crop": ["grain"],
        "area": 94.6,
        "suitability": 98
    }, {
        "id": "field_29",
        "name": "Field 29",
        "crop": ["corn"],
        "area": 103.1,
        "suitability": 96
    }, {
        "id": "field_16",
        "name": "Field 16",
        "crop": ["sunflower"],
        "area": 82.2,
        "suitability": 95
    }, {
        "id": "field_33",
        "name": "Field 33",
        "crop": ["grain"],
        "area": 101.7,
        "suitability": 95
    }, {
        "id": "field_17",
        "name": "Field 17",
        "crop": ["sunflower"],
        "area": 112.4,
        "suitability": 94
    }, {
        "id": "field_19",
        "name": "Field 19",
        "crop": ["sunflower"],
        "area": 116.2,
        "suitability": 94
    }, {
        "id": "field_32",
        "name": "Field 32",
        "crop": ["corn"],
        "area": 100.7,
        "suitability": 94
    }, {
        "id": "field_41",
        "name": "Field 41",
        "crop": ["corn"],
        "area": 87.6,
        "suitability": 92
    }, {
        "id": "field_22",
        "name": "Field 22",
        "crop": ["sunflower"],
        "area": 90.5,
        "suitability": 91
    }, {
        "id": "field_26",
        "name": "Field 26",
        "crop": ["sunflower"],
        "area": 92.3,
        "suitability": 90
    }, {
        "id": "field_34",
        "name": "Field 34",
        "crop": ["sunflower"],
        "area": 109.7,
        "suitability": 89
    }, {
        "id": "field_38",
        "name": "Field 38",
        "crop": ["sunflower"],
        "area": 82.3,
        "suitability": 88
    }, {
        "id": "field_40",
        "name": "Field 40",
        "crop": ["corn"],
        "area": 97.8,
        "suitability": 88
    }, {
        "id": "field_5",
        "name": "Field 5",
        "crop": ["grain"],
        "area": 102.3,
        "suitability": 87
    }, {
        "id": "field_24",
        "name": "Field 24",
        "crop": ["corn"],
        "area": 81.7,
        "suitability": 86
    }, {
        "id": "field_31",
        "name": "Field 31",
        "crop": ["corn"],
        "area": 80.3,
        "suitability": 86
    }, {"id": "field_11", "name": "Field 11", "crop": ["grain"], "area": 91.6, "suitability": 85}],
    "partially_suitable": [{
        "id": "field_49",
        "name": "Field 49",
        "crop": ["sunflower"],
        "area": 89.2,
        "suitability": 84
    }, {
        "id": "field_15",
        "name": "Field 15",
        "crop": ["corn"],
        "area": 119.7,
        "suitability": 82
    }, {
        "id": "field_18",
        "name": "Field 18",
        "crop": ["corn"],
        "area": 88.7,
        "suitability": 82
    }, {
        "id": "field_30",
        "name": "Field 30",
        "crop": ["grain"],
        "area": 87.7,
        "suitability": 82
    }, {
        "id": "field_43",
        "name": "Field 43",
        "crop": ["sunflower"],
        "area": 89.3,
        "suitability": 81
    }, {
        "id": "field_2",
        "name": "Field 2",
        "crop": ["grain"],
        "area": 85.7,
        "suitability": 80
    }, {
        "id": "field_8",
        "name": "Field 8",
        "crop": ["corn"],
        "area": 100.4,
        "suitability": 80
    }, {
        "id": "field_28",
        "name": "Field 28",
        "crop": ["corn"],
        "area": 93.8,
        "suitability": 80
    }, {
        "id": "field_21",
        "name": "Field 21",
        "crop": ["sunflower"],
        "area": 105.6,
        "suitability": 79
    }, {
        "id": "field_50",
        "name": "Field 50",
        "crop": ["grain"],
        "area": 104.5,
        "suitability": 79
    }, {"id": "field_4", "name": "Field 4", "crop": ["grain"], "area": 81, "suitability": 78}, {
        "id": "field_6",
        "name": "Field 6",
        "crop": ["grain"],
        "area": 106.5,
        "suitability": 78
    }, {
        "id": "field_27",
        "name": "Field 27",
        "crop": ["grain"],
        "area": 93,
        "suitability": 78
    }, {
        "id": "field_35",
        "name": "Field 35",
        "crop": ["corn"],
        "area": 93.3,
        "suitability": 78
    }, {
        "id": "field_1",
        "name": "Field 1",
        "crop": ["grain"],
        "area": 98.1,
        "suitability": 77
    }, {
        "id": "field_12",
        "name": "Field 12",
        "crop": ["corn"],
        "area": 113.5,
        "suitability": 77
    }, {
        "id": "field_48",
        "name": "Field 48",
        "crop": ["grain"],
        "area": 105.6,
        "suitability": 77
    }, {
        "id": "field_36",
        "name": "Field 36",
        "crop": ["grain"],
        "area": 85,
        "suitability": 76
    }, {
        "id": "field_39",
        "name": "Field 39",
        "crop": ["grain"],
        "area": 106.8,
        "suitability": 76
    }, {
        "id": "field_3",
        "name": "Field 3",
        "crop": ["sunflower"],
        "area": 101.4,
        "suitability": 75
    }, {"id": "field_46", "name": "Field 46", "crop": ["grain"], "area": 85, "suitability": 75}],
    "not_suitable": [{
        "id": "field_7",
        "name": "Field 7",
        "crop": ["corn"],
        "area": 95,
        "suitability": 74
    }, {
        "id": "field_13",
        "name": "Field 13",
        "crop": ["sunflower"],
        "area": 104.1,
        "suitability": 74
    }, {
        "id": "field_47",
        "name": "Field 47",
        "crop": ["sunflower"],
        "area": 85.7,
        "suitability": 74
    }, {
        "id": "field_9",
        "name": "Field 9",
        "crop": ["sunflower"],
        "area": 117.2,
        "suitability": 73
    }, {
        "id": "field_20",
        "name": "Field 20",
        "crop": ["sunflower"],
        "area": 109.6,
        "suitability": 73
    }, {
        "id": "field_37",
        "name": "Field 37",
        "crop": ["corn"],
        "area": 104.4,
        "suitability": 73
    }, {
        "id": "field_42",
        "name": "Field 42",
        "crop": ["sunflower"],
        "area": 87.3,
        "suitability": 72
    }, {
        "id": "field_45",
        "name": "Field 45",
        "crop": ["corn"],
        "area": 98.5,
        "suitability": 72
    }, {
        "id": "field_14",
        "name": "Field 14",
        "crop": ["sunflower"],
        "area": 109.7,
        "suitability": 71
    }, {
        "id": "field_23",
        "name": "Field 23",
        "crop": ["corn"],
        "area": 102.2,
        "suitability": 71
    }, {"id": "field_25", "name": "Field 25", "crop": ["sunflower"], "area": 81.8, "suitability": 70}]
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