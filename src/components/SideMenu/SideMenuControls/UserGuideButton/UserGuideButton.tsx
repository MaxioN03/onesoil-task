import React from 'react';
import styles from '../SideMenuControls.module.css';
import Icon from './user_guide_icon.svg';

export const UserGuideButton = () => {
    return <div className={styles.button_container}>
        <img src={Icon} alt='User guide icon'/>
        <span>User Guide</span>
    </div>;
};