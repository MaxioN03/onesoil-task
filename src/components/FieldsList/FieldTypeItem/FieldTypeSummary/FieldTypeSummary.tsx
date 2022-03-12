import React, {useEffect, useState} from 'react';
import styles from './FieldTypeSummary.module.css';
import {FieldSuitability, FieldTypeRelativeLine} from "../../../ui/FieldTypeRelativeLine/FieldTypeRelativeLine";
import {Field} from "../../types";
import {DescriptionIcon} from "../../../ui/DescriptionIcon/DescriptionIcon";
import {getAreaString} from "../../utils/getAreaString";

export interface IFieldTypeSummaryProps {
    suitabilityType: FieldSuitability,
    fields: Field[],
    fieldsCount: Record<FieldSuitability, number> | null,
}

export const FieldTypeSummary = ({suitabilityType, fields, fieldsCount}: IFieldTypeSummaryProps) => {
    const [title, setTitle] = useState<string>('');
    const [areasSum, setAreasSum] = useState<any>(null);

    useEffect(() => {
        let title = 'Unknown';
        switch (suitabilityType) {
            case FieldSuitability.suitable:
                title = 'Suitable';
                break;
            case FieldSuitability.partially_suitable:
                title = 'Partially suitable';
                break;
            case FieldSuitability.not_suitable:
                title = 'Not suitable';
                break;
        }
        setTitle(`${title} fields`);
    }, [suitabilityType]);

    useEffect(() => {
        let areasSum = (fields ?? []).reduce((result, field) => {
            result += field.area ?? 0;
            return result;
        }, 0);
        setAreasSum(getAreaString(areasSum));
    }, [fields]);

    return <div className={styles.field_type_summary}>
        <div className={styles.field_info}>
            <div className={styles.field_type}>
                <span className={styles.title}>{title}</span>
                <DescriptionIcon/>
            </div>
            <div className={styles.area_sum}>{areasSum}</div>
        </div>
        <FieldTypeRelativeLine fieldsCount={fieldsCount} currentSuitableType={suitabilityType}/>
    </div>;
};