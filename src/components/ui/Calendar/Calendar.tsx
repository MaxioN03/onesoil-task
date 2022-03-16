import React from 'react';
import styles from './Calendar.module.css';
import {Button} from "../Button/Button";
import CalendarIcon from './calendar_icon.svg';
import ArrowIcon from './arrow_icon.svg';

const CALENDAR_TITLE = 'Season 2021';

export const Calendar = () => {

    return <Button title={CALENDAR_TITLE}
                   icon={<img src={CalendarIcon} alt='Calendar icon' className={styles.icon_container}/>}
                   rightSideControl={<div className={styles.right_arrow_container}>
                       <img src={ArrowIcon} alt='Arrow to right icon'/>
                   </div>}

    />;
};