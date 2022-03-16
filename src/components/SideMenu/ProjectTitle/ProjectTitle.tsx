import React from 'react';
import styles from './ProjectTitle.module.css';
import Logo from './onesoil_logo.svg';

export const ProjectTitle = () => {
    return <div className={styles.project_title}>
        <img src={Logo} alt='OneSoil Logo'/>
        <div className={styles.title}>
            Yield Project
        </div>
    </div>;
};