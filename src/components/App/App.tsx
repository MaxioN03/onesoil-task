import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import {FieldsList} from "../FieldsList/FieldsList";
import {Field} from "../FieldsList/types";
import {FieldSuitability} from "../ui/FieldTypeRelativeLine/FieldTypeRelativeLine";
import {__FIELDS_MOCK} from "../../__mocks/fields";
import {PARTIALLY_SUITABLE_BORDER, SUITABLE_BORDER} from "../FieldsList/constants";

export const App = () => {
    const [fields, setFields] = useState<Record<FieldSuitability, Field[]> | null>(null);

    useEffect(() => {
        __MOCK_GetFields();
    }, []);

    const __MOCK_GetFields = () => {
        // console.log('CHECK',__FIELDS_MOCK.map(field => field.suitability).sort((a,b) => a-b));
        let fields = __FIELDS_MOCK.sort((a, b) => b.suitability - a.suitability)
            .reduce((result: any, field) => {
            if (field.suitability >= SUITABLE_BORDER) {
                result[FieldSuitability.suitable].push(field);
            } else if (field.suitability >= PARTIALLY_SUITABLE_BORDER) {
                result[FieldSuitability.partially_suitable].push(field);
            } else {
                result[FieldSuitability.not_suitable].push(field);
            }

            return result;
        }, {
            [FieldSuitability.suitable]: [],
            [FieldSuitability.partially_suitable]: [],
            [FieldSuitability.not_suitable]: [],
        });

        setFields(fields);
    };

    return <div className={styles.app}>
        <div className={styles.side_menu}>
            {/*<ProjectTitle/>*/}
            <FieldsList fields={fields}/>
            {/*<SideMenuControls/>*/}
        </div>
        <div className={styles.content}></div>
    </div>;
};