import React from 'react';
import styles from './UserMenuButton.module.css';
import Icon from './user_icon_24.svg';

export const UserMenuButton = () => {
    return <div className={styles.button_container}>
        <img src={Icon} alt='User icon' />
    </div>;
};