import React from 'react';
import styles from './SideMenu.module.css';
import {FieldsList} from "./FieldsList/FieldsList";
import {SideMenuControls} from "./SideMenuControls/SideMenuControls";
import {Calendar} from "../ui/Calendar/Calendar";
import {ProjectTitle} from "./ProjectTitle/ProjectTitle";

export const SideMenu = () => {
    return <div className={styles.side_menu}>
        <ProjectTitle/>
        <div className={styles.calendar_container}>
            <Calendar />
        </div>
        <FieldsList/>
        <SideMenuControls/>
    </div>
};
