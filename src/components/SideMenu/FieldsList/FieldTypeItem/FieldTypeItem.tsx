import React from 'react';
import styles from './FieldTypeItem.module.css';
import {Field} from "../types";
import {FieldTypeSummary} from "./FieldTypeSummary/FieldTypeSummary";
import {FieldSuitability} from "../../../ui/FieldTypeRelativeLine/FieldTypeRelativeLine";
import {FieldItem} from "./FieldItem/FieldItem";

interface IFieldTypeItemProps {
    suitabilityType: FieldSuitability;
    fields: Record<FieldSuitability, Field[]> | null;
    fieldsCount: Record<FieldSuitability, number> | null;
}

export const FieldTypeItem = ({suitabilityType, fields, fieldsCount}: IFieldTypeItemProps) => {
    return <div className={styles.field_type_item_container}>
        <FieldTypeSummary suitabilityType={suitabilityType} fields={fields?.[suitabilityType] ?? []}
                          fieldsCount={fieldsCount}/>
        <div className={styles.field_type_items_list}>
            {(fields?.[suitabilityType] ?? []).map(field => {
                return <FieldItem key={field.id} field={field}/>;
            })}
        </div>
    </div>;
};