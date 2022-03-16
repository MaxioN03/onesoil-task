import React, {createContext, useEffect, useState} from 'react';
import styles from './App.module.css';
import {Field} from "../FieldsList/types";
import {FieldSuitability} from "../ui/FieldTypeRelativeLine/FieldTypeRelativeLine";
import {__FIELDS_MOCK} from "../../__mocks/fields";
import {PARTIALLY_SUITABLE_BORDER, SUITABLE_BORDER} from "../FieldsList/constants";
import {Content} from "../Content/Content";
import {SideMenu} from "../SideMenu/SideMenu";

export const FieldsContext = createContext<Record<FieldSuitability, Field[]> | null>(null);

export const App = () => {
    const [fields, setFields] = useState<Record<FieldSuitability, Field[]> | null>(null);

    useEffect(() => {
        __MOCK_GetFields();
    }, []);

    const __MOCK_GetFields = () => {
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

    return <FieldsContext.Provider value={fields}>
        <div className={styles.app}>
            <SideMenu/>
            <Content/>
        </div>
    </FieldsContext.Provider>;
};