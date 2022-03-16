import React, {useState} from 'react';
import styles from './FieldFilterButton.module.css';
import {Button, ButtonSize} from "../../ui/Button/Button";
import {FieldFilter} from "../../FieldFilter/FieldFilter";
import FilterIcon from "./filtered_icon.svg";
import CloseIcon from "./close_icon.svg";

export const FieldFilterButton = () => {
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(true);

    const onButtonClick = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    return <div className={styles.button_container}>
        <Button inline size={ButtonSize.S}
                title={<div className={styles.title}>
                    <span>Filtered</span>
                    <FilteredFieldsCount/>
                </div>}
                icon={<img className={styles.icon_container} src={FilterIcon} alt={'Filter icon'}/>}
                rightSideControl={<div className={styles.close_control}>
                    <img src={CloseIcon} alt={'Close icon'}/>
                </div>}
                onClick={onButtonClick}/>
        {isFilterOpen
            ? <FieldFilter/>
            : null}
    </div>;
};

const FilteredFieldsCount = () => {
    return <div className={styles.filtered_fields_count}>4 fields</div>;
};