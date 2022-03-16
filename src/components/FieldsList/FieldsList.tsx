import React, {useContext, useEffect, useState} from 'react';
import styles from './FieldsList.module.css';
import {FieldSuitability} from "../ui/FieldTypeRelativeLine/FieldTypeRelativeLine";
import {FieldTypeItem} from "./FieldTypeItem/FieldTypeItem";
import {FieldsContext} from "../App/App";

export const FieldsList = () => {
    const fields = useContext(FieldsContext);
    const [fieldsCount, setFieldsCount] = useState<Record<FieldSuitability, number> | null>(null);

    useEffect(() => {
        if (fields) {
            let fieldsCount: Record<FieldSuitability, number> = {
                [FieldSuitability.suitable]: fields?.suitable?.length ?? 0,
                [FieldSuitability.partially_suitable]: fields?.partially_suitable?.length ?? 0,
                [FieldSuitability.not_suitable]: fields?.not_suitable?.length ?? 0,
            };
            setFieldsCount(fieldsCount);
        }
    }, [fields]);

    return <div className={styles.list_container}>
        <FieldTypeItem suitabilityType={FieldSuitability.suitable} fields={fields} fieldsCount={fieldsCount}/>
        <FieldTypeItem suitabilityType={FieldSuitability.partially_suitable} fields={fields} fieldsCount={fieldsCount}/>
        <FieldTypeItem suitabilityType={FieldSuitability.not_suitable} fields={fields} fieldsCount={fieldsCount}/>
    </div>;
};