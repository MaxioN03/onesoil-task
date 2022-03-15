import React, {useEffect, useState} from 'react';
import styles from './FieldCropFilter.module.css';
import {Input} from "../../ui/Input/Input";
import SearchIcon from "./search_icon.svg";
import {Agriculture} from "../../FieldsList/types";
import {CheckboxGroup} from "../../ui/CheckboxGroup/CheckboxGroup";

export const FieldCropFilter = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [cropTypes, setCropTypes] = useState<Agriculture[]>([]);
    const [cropTypesChecked, setCropTypesChecked] = useState<Record<string, boolean>>({});

    useEffect(() => {
        let cropTypes: Agriculture[] = [];
        for (let crop in Agriculture) {
            cropTypes.push(crop as Agriculture);
        }
        setCropTypes(cropTypes);

        let cropTypesChecked = cropTypes.reduce((result: Record<string, boolean>, crop) => {
            result[crop as Agriculture] = true;
            return result;
        }, {});
        setCropTypesChecked(cropTypesChecked);
    }, []);

    return <div className={styles.field_crop_filter}>
        <div className={styles.title}>
            <span className={styles.filter_title}>Crop</span>
            <span className={styles.select_all_button}>Select all</span>
        </div>
        <Input placeholder={'Search...'} value={searchValue}
               onChange={setSearchValue} icon={SearchIcon}/>
        <div className={styles.checkbox_list}>
            <CheckboxGroup items={cropTypes.map(crop => {
                return {
                    id: crop,
                    checked: cropTypesChecked[crop]
                }
            })} onChange={setCropTypesChecked}/>
        </div>
    </div>;
};