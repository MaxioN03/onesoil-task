import React from 'react';
import styles from './SideMenu.module.css';
import {FieldsList} from "../FieldsList/FieldsList";
import {SideMenuControls} from "../SideMenuControls/SideMenuControls";
import {Field} from "../FieldsList/types";
import {FieldSuitability} from "../ui/FieldTypeRelativeLine/FieldTypeRelativeLine";
import {Calendar} from "../ui/Calendar/Calendar";
import {ProjectTitle} from "../ProjectTitle/ProjectTitle";

interface ISideMenuProps {
    fields: Record<FieldSuitability, Field[]> | null
}

export const SideMenu = ({fields}: ISideMenuProps) => {
    return <div className={styles.side_menu}>
        <ProjectTitle/>
        <div className={styles.calendar}>
            <Calendar />
        </div>
        <FieldsList fields={fields}/>
        <SideMenuControls/>
    </div>
};