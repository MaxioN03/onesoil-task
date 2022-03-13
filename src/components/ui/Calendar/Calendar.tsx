import React from 'react';
import styles from './Calendar.module.css';
import {Button} from "../Button/Button";
import CalendarIcon from './calendar_icon.svg';
import ArrowIcon from './arrow_icon.svg';

interface ICalendarProps {
}

export const Calendar = ({}: ICalendarProps) => {

    return <Button title={'Season 2021'}
                   icon={<img src={CalendarIcon} alt='Test icon' className={styles.icon_container}/>}
                   rightSideControl={<div className={styles.right_arrow_container}>
                       <img src={ArrowIcon} alt='Arrow icon'/>
                   </div>}

    />;
};