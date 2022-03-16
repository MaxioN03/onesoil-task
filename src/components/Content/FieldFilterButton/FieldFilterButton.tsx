import React, {useState} from 'react';
import styles from './FieldFilterButton.module.css';
import {Button, ButtonSize} from "../../ui/Button/Button";
import FilterIcon from "./filtered_icon.svg";
import {FieldFilter} from "../../FieldFilter/FieldFilter";

export const FieldFilterButton = () => {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(true);

    const onButtonClick = () => {
        setIsFilterOpen(!isFilterOpen)
    };

    return <div className={styles.button_container}>
        <Button inline size={ButtonSize.S} title={<div>Filtered</div>}
                icon={<img className={styles.icon_container} src={FilterIcon} alt={'Filter icon'}/>}
                onClick={onButtonClick}/>
        {isFilterOpen
            ? <FieldFilter/>
            : null}
    </div>;
};