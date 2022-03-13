import React from 'react';
import styles from './SideMenuControls.module.css';
import {UserGuideButton} from "./UserGuideButton/UserGuideButton";
import {UserMenuButton} from "./UserMenuButton/UserMenuButton";
import {Button, ButtonSize, ButtonType} from "../ui/Button/Button";
import PlusIcon from './plus_icon.svg';

export const SideMenuControls = () => {
    return <div className={styles.controls_container}>
        <div className={styles.add_field_button_container}>
            <Button title={'Add fields'} center size={ButtonSize.L} type={ButtonType.Primary} icon={<img src={PlusIcon} alt={'Plus icon'} />}/>
        </div>
        <div className={styles.user_controls_container}>
            <UserGuideButton/>
            <UserMenuButton/>
        </div>
    </div>;
};