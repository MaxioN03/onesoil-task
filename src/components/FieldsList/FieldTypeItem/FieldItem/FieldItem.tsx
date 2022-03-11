import React from 'react';
import styles from './FieldItem.module.css';
import {Field} from "../../types";
import {getAreaString} from "../../utils/getAreaString";

interface IFieldItemProps {
    field: Field
}

export const FieldItem = ({field}: IFieldItemProps) => {
    let {name, suitability, area, agriculture} = field;

    return <div className={styles.field_item}>
        <div className={styles.field_image}/>
        <div className={styles.field_info}>
            <div className={styles.field_info_row}>
                <span className={styles.field_name}>{name}</span>
                <span className={styles.field_suitability}>{suitability}%</span>
            </div>
            <div className={styles.field_info_row}>
                <span className={styles.field_agriculture}>{agriculture}</span>
                <span className={styles.field_area}>{getAreaString(area)}</span>
            </div>
        </div>
    </div>;
};