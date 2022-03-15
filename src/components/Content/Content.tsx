import React from 'react';
import styles from './Content.module.css';
import {FieldSuitability} from "../ui/FieldTypeRelativeLine/FieldTypeRelativeLine";
import {Field} from "../FieldsList/types";
import {MapControls} from "../MapControls/MapControls";
import {FieldFilterButton} from "./FieldFilterButton/FieldFilterButton";

interface IContentProps {
    fields: Record<FieldSuitability, Field[]> | null
}

export const Content = ({fields}: IContentProps) => {
    return <div className={styles.content}>
        <FieldFilterButton fields={fields}/>
        <MapControls/>
    </div>;
};