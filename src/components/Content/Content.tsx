import React from 'react';
import styles from './Content.module.css';
import {Button, ButtonSize} from "../ui/Button/Button";
import FilterIcon from "./filtered_icon.svg";
import {FieldFilter} from "../FieldFilter/FieldFilter";
import {FieldSuitability} from "../ui/FieldTypeRelativeLine/FieldTypeRelativeLine";
import {Field} from "../FieldsList/types";

interface IContentProps {
    fields: Record<FieldSuitability, Field[]> | null
}

export const Content = ({fields}: IContentProps) => {
    return <div className={styles.content}>
        <Button inline size={ButtonSize.S} title={<div>Filtered</div>}
                icon={<img className={styles.icon_container} src={FilterIcon} alt={'Filter icon'}/>} />
        <FieldFilter fields={fields}/>
    </div>
};