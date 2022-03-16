import React, {useCallback, useEffect, useRef, useState} from 'react';
import styles from './FieldAreaSlider.module.css';
import {FieldSuitability} from "../../../ui/FieldTypeRelativeLine/FieldTypeRelativeLine";

interface IFieldAreaSliderProps {
    min: number,
    max: number,
    onChange: ({min, max}: { min: number, max: number }) => void,
    fieldsAreas?: Record<FieldSuitability, number[]> | null,
}

export const FieldAreaSlider = ({min, max, onChange, fieldsAreas}: IFieldAreaSliderProps) => {
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);

    const minValRef = useRef(null);
    const maxValRef = useRef(null);
    const range = useRef(null);

    const getPercent = useCallback((value) => {
        Math.round(((value - min) / (max - min)) * 100);
    }, [min, max]);

    useEffect(() => {
        setMinVal(min);
        setMaxVal(max);
    }, [min, max]);

    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value);

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    useEffect(() => {
        onChange({min: minVal, max: maxVal});
    }, [minVal, maxVal, onChange]);

    return <div className={styles.slider_container}>
        <input
            type='range'
            min={min}
            max={max}
            value={minVal}
            ref={minValRef}
            onChange={(event) => {
                const value = Math.min(+event.target.value, maxVal - 1);
                setMinVal(value);
                event.target.value = value.toString();
            }}
            className={[styles.thumb, styles.left_thumb,
                styles.thumb_zindex_3, minVal > max - 100 ? styles.thumb_zindex_5 : ''].join(' ')}
        />
        <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            ref={maxValRef}
            onChange={(event) => {
                const value = Math.max(+event.target.value, minVal + 1);
                setMaxVal(value);
                event.target.value = value.toString();
            }}
            className={[styles.thumb, styles.right_thumb, styles.thumb_zindex_4].join(' ')}
        />
        <div className={styles.slider}>
            <div className={styles.slider_fields_dots}>
                {[
                    FieldSuitability.not_suitable,
                    FieldSuitability.partially_suitable,
                    FieldSuitability.suitable,
                ].map(fieldsTypeAreas => {
                    return fieldsAreas?.[fieldsTypeAreas].map((value, index) => {
                        let style = {
                            left: `calc(${((value - min) * 100 / (max - min))}% - 0px)`
                        };
                        return <div key={`${fieldsTypeAreas}_${value}_${index}`}
                                    className={[styles.slider_field_dot, styles[fieldsTypeAreas]].join(' ')}
                                    style={style}/>;
                    });
                })}
            </div>
            <div className={styles.slider_track}/>
            <div ref={range} className={styles.slider_range}/>
        </div>
    </div>;
};