import React, {useEffect, useState} from 'react';
import styles from './FieldCropFilter.module.css';
import {Input} from "../../ui/Input/Input";
import SearchIcon from "./search_icon.svg";
import {Crop} from "../../FieldsList/types";
import {CheckboxGroup} from "../../ui/CheckboxGroup/CheckboxGroup";
import {getCropDisplayName} from "../../FieldsList/utils/getCropDisplayName";

export const FieldCropFilter = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [cropTypes, setCropTypes] = useState<Crop[]>([]);
    const [cropTypesChecked, setCropTypesChecked] = useState<Record<string, boolean>>({});

    useEffect(() => {
        let cropTypes: Crop[] = [];
        for (let crop in Crop) {
            cropTypes.push(crop as Crop);
        }
        setCropTypes(cropTypes);

        let cropTypesChecked = cropTypes.reduce((result: Record<string, boolean>, crop) => {
            result[crop as Crop] = true;
            return result;
        }, {});
        setCropTypesChecked(cropTypesChecked);
    }, []);

    const selectAll = () => {
        let cropTypesChecked = cropTypes.reduce((result: Record<string, boolean>, crop) => {
            result[crop as Crop] = true;
            return result;
        }, {});
        setCropTypesChecked(cropTypesChecked);
    }

    return <div className={styles.field_crop_filter}>
        <div className={styles.title}>
            <span className={styles.filter_title}>Crop</span>
            <span className={styles.select_all_button} onClick={selectAll}>Select all</span>
        </div>
        <Input placeholder={'Search...'} value={searchValue}
               onChange={setSearchValue} icon={SearchIcon}/>
        <div className={styles.checkbox_list}>
            <CheckboxGroup items={cropTypes.map(crop => {
                return {
                    id: crop,
                    title: getCropDisplayName(crop),
                    checked: cropTypesChecked[crop]
                }
            })} onChange={setCropTypesChecked}/>
        </div>
    </div>;
};