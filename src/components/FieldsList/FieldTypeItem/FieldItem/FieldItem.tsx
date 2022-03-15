import React from 'react';
import styles from './FieldItem.module.css';
import {Field} from "../../types";
import {getAreaString} from "../../utils/getAreaString";
import {EMPTY_DATA} from "../../../../constants/constants";
import {getCropDisplayName} from "../../utils/getCropDisplayName";

export interface IFieldItemProps {
    field: Field
}

export const FieldItem = ({field}: IFieldItemProps) => {
    let {name, suitability, area, crop} = field ?? {};

    let nameString = name || EMPTY_DATA;
    let cropListString = crop?.length ? crop.map(getCropDisplayName).join(', ') : EMPTY_DATA;

    return <div className={styles.field_item}>
        <div className={styles.field_image}/>
        <div className={styles.field_info}>
            <div className={styles.field_info_row}>
                <span className={styles.field_name} title={nameString}>{nameString}</span>
                <span className={styles.field_suitability}>{!isNaN(suitability) ? `${suitability}%` : EMPTY_DATA}</span>
            </div>
            <div className={styles.field_info_row}>
                <span className={styles.field_crop} title={cropListString}>{cropListString}</span>
                <span className={styles.field_area}>{getAreaString(area ?? null)}</span>
            </div>
        </div>
    </div>;
};