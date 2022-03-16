import React, { useEffect, useState} from 'react';
import styles from './CheckboxGroup.module.css';
import {Checkbox, ICheckbox} from "../Checkbox/Checkbox";

interface ICheckboxProps {
    items: ICheckbox[]
    onChange: (checked: Record<string, boolean>) => void,
}

export const CheckboxGroup = ({items, onChange}: ICheckboxProps) => {
    const [checked, setChecked] = useState<Record<string, boolean>>({});

    useEffect(() => {
        let checked = items.reduce((result: Record<string, boolean>, item) => {
            result[item.id] = item.checked;
            return result;
        }, {});

        setChecked(checked);
    }, [items]);

    const onCheck = (id: string, checkedChange: boolean) => {
        let newChecked = {...checked};
        newChecked[id] = checkedChange;

        setChecked(newChecked);
        onChange(newChecked);
    };

    return <div className={styles.checkbox_group_container}>
        {items.map(({id, title}) => {
            return <Checkbox key={id} id={id} title={title} checked={checked[id] ?? false} onChange={onCheck.bind(null, id)}/>;
        })}
    </div>;
};
