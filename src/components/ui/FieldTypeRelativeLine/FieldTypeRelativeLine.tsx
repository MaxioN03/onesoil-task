import React from 'react';
import styles from './FieldTypeRelativeLine.module.css';

export enum FieldSuitability {
    suitable = 'suitable',
    partially_suitable = 'partially_suitable',
    not_suitable = 'not_suitable',
}

interface IFieldTypeRelativeLineProps {
    fieldsCount: Record<FieldSuitability, number> | null,
    currentSuitableType: FieldSuitability
}

export const FieldTypeRelativeLine = ({
                                          fieldsCount = {
                                              [FieldSuitability.suitable]: 0,
                                              [FieldSuitability.partially_suitable]: 0,
                                              [FieldSuitability.not_suitable]: 0,
                                          },
                                          currentSuitableType
                                      }: IFieldTypeRelativeLineProps) => {
    let lines = [];
    for (let suitability in FieldSuitability) {
        let fieldsSuitabilityCount = fieldsCount?.[suitability as FieldSuitability] ?? 0;
        if (fieldsSuitabilityCount) {
            lines.push(<div style={{flex: fieldsSuitabilityCount.toString()}}
                            className={[styles.line, styles[suitability],
                                currentSuitableType === suitability ? styles.current : ''].join(' ')}/>);
        }
    }

    return <div className={styles.field_type_relative_lines_container}>
        {lines.length
            ? lines
            : <div style={{flex: '1'}} className={styles.line}/>}
    </div>;
};