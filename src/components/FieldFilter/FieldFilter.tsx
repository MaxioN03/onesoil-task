import React from 'react';
import {FieldAreaFilter} from "./FieldAreaFilter/FieldAreaFilter";
import {FieldCropFilter} from "./FieldCropFilter/FieldCropFilter";
import styles from './FieldFilter.module.css';

export const FieldFilter = () => {

    return <div className={styles.field_filter}>
        <FieldAreaFilter/>
        <FieldCropFilter/>
    </div>;
};