import React from 'react';
import styles from './SideMenuControls.module.css';
import {UserGuideButton} from "./UserGuideButton/UserGuideButton";
import {UserMenuButton} from "./UserMenuButton/UserMenuButton";


export const SideMenuControls = () => {
    return <div className={styles.controls_container}>
        <UserGuideButton/>
        <UserMenuButton/>
    </div>;
};