import React, {useEffect, useState} from 'react';
import {FieldSuitability} from "../../ui/FieldTypeRelativeLine/FieldTypeRelativeLine";
import {Field} from "../../FieldsList/types";
import {FieldAreaSlider} from "./FieldAreaSlider/FieldAreaSlider";
import styles from './FieldAreaFilter.module.css';
import {getAreaString} from "../../FieldsList/utils/getAreaString";
import {EMPTY_DATA} from "../../../constants/constants";

interface IFieldAreaFilterProps {
    fields: Record<FieldSuitability, Field[]> | null,
}

export const FieldAreaFilter = ({fields}: IFieldAreaFilterProps) => {
    // const [fieldsArea, setFieldsArea] = useState<any>();

    const [minFieldArea, setMinFieldArea] = useState<number | null>(null);
    const [maxFieldArea, setMaxFieldArea] = useState<number | null>(null);

    const [selectedMin, setSelectedMin] = useState<number | null>(null);
    const [selectedMax, setSelectedMax] = useState<number | null>(null);

    const [fieldsAreas, setFieldsAreas] = useState<Record<FieldSuitability, number[]> | null>(null);

    useEffect(() => {
        let allFields = [
            ...(fields?.[FieldSuitability.suitable] ?? []),
            ...(fields?.[FieldSuitability.partially_suitable] ?? []),
            ...(fields?.[FieldSuitability.not_suitable] ?? [])
        ];

        allFields.sort((a, b) => a.area - b.area);

        let minFieldArea = Math.min(...allFields.map(field => field.area));
        let maxFieldArea = Math.max(...allFields.map(field => field.area));

        setMinFieldArea(minFieldArea);
        setMaxFieldArea(maxFieldArea);

        setSelectedMin(minFieldArea);
        setSelectedMax(maxFieldArea);

        let fieldsAreas = {
            [FieldSuitability.suitable]: (fields?.[FieldSuitability.suitable] ?? []).map(field => field.area),
            [FieldSuitability.partially_suitable]: (fields?.[FieldSuitability.partially_suitable] ?? []).map(field => field.area),
            [FieldSuitability.not_suitable]: (fields?.[FieldSuitability.not_suitable] ?? []).map(field => field.area),
        }
        setFieldsAreas(fieldsAreas);
    }, [fields]);

    return <div className={styles.field_area_filter_container}>
        <div className={styles.title}>
            <span className={styles.filter_title}>Field area</span>
            <span className={styles.filtered_areas}>
                {selectedMin !== null ? getAreaString(selectedMin) : EMPTY_DATA}
                —
                {selectedMax !== null ? getAreaString(selectedMax) : EMPTY_DATA}
            </span>
        </div>
        {minFieldArea !== null && maxFieldArea !== null
            ? <FieldAreaSlider min={minFieldArea ?? 0} max={maxFieldArea ?? 0}
                               fieldsAreas={fieldsAreas}
                               onChange={({min, max}) => {
                                   setSelectedMin(min);
                                   setSelectedMax(max);
                               }}/>
            : null}
    </div>;
};