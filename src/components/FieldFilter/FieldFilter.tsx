import React from 'react';
import {FieldAreaFilter} from "./FieldAreaFilter/FieldAreaFilter";
import {FieldCropFilter} from "./FieldCropFilter/FieldCropFilter";
import {FieldSuitability} from "../ui/FieldTypeRelativeLine/FieldTypeRelativeLine";
import {Field} from "../FieldsList/types";
import styles from './FieldFilter.module.css';


interface IFieldFilterProps {
    fields: Record<FieldSuitability, Field[]> | null
}

export const FieldFilter = ({fields}: IFieldFilterProps) => {

    return <div className={styles.field_filter}>
        <FieldAreaFilter fields={fields}/>
        <FieldCropFilter/>
    </div>;
};