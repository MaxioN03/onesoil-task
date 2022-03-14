import React, {ChangeEvent, useRef} from 'react';
import styles from './Input.module.css';

interface IInputProps {
    value: string,
    onChange: (value: string) => void,
    placeholder?: string,
    icon?: SVGRectElement
}

export const Input = ({value = '', placeholder = '', icon, onChange}: IInputProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onContainerClick = () => {
        inputRef.current?.focus();
    };

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        onChange(value);
    };

    return <div className={styles.input_container} onClick={onContainerClick}>
        {icon
            ? <div className={styles.icon_container}>
                <img src={icon}/>
            </div>
            : null}
        <input ref={inputRef} className={styles.input}
               value={value}
               placeholder={placeholder || 'Input...'}
               onChange={onInputChange}/>
    </div>;
};
