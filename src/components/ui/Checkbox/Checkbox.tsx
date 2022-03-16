import React, {ChangeEvent, ReactElement} from 'react';
import styles from './Checkbox.module.css';
import {EMPTY_DATA} from "../../../constants/constants";

export interface ICheckbox {
    id: string,
    title?: string | ReactElement,
    checked: boolean,
}

interface ICheckboxProps extends ICheckbox {
    onChange: (checked: boolean) => void,
}

export const Checkbox = ({checked, onChange, id, title}: ICheckboxProps) => {

    const onCheck = (event: ChangeEvent<HTMLInputElement>) => {
        let checked = event.target.checked;
        onChange(checked);
    };

    return (
        <label className={styles.label} htmlFor={id}>
            {title || id || EMPTY_DATA}
            <input
                id={id}
                type='checkbox'
                className={[styles.input, checked ? styles.checked : ''].join(' ')}
                checked={checked}
                onChange={onCheck}
            />
            <div className={[styles.indicator, checked ? styles.checked : ''].join(' ')}>
                {checked
                    ? <div className={styles.check_mark}/>
                    : null}
            </div>
        </label>
    );
};
