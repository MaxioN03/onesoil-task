import React from 'react';
import styles from './Content.module.css';
import {MapControls} from "../MapControls/MapControls";
import {FieldFilterButton} from "./FieldFilterButton/FieldFilterButton";

export const Content = () => {
    return <div className={styles.content}>
        <FieldFilterButton/>
        <MapControls/>
    </div>;
};