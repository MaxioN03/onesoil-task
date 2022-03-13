import React, {ReactElement} from 'react';
import styles from './Button.module.css';
import {EMPTY_DATA} from "../../../constants/constants";

export enum ButtonSize {
    S = 's',
    M = 'm',
    L = 'l',
}

export enum ButtonType {
    Primary = 'primary',
    Secondary = 'secondary',
}

interface IButtonProps {
    title?: string | ReactElement,
    center?: boolean,
    size?: ButtonSize,
    type?: ButtonType,
    icon?: Element,
    rightSideControl?: Element,
}

export const Button = ({
                           title,
                           size = ButtonSize.M,
                           type = ButtonType.Secondary,
                           center,
                           icon,
                           rightSideControl
                       }: IButtonProps) => {

    return <button className={[styles.button, styles[size], styles[type],
        center ? styles.center : '', rightSideControl ? styles.with_right_side_control : ''].join(' ')}>
        {icon
            ? <div className={styles.icon_container}>{icon}</div>
            : null}
        {title || EMPTY_DATA}
        {rightSideControl
            ? <div className={styles.right_side_control_container}>{rightSideControl}</div>
            : null}
    </button>;
};

export const Test = () => {
    return <Button title={<div>Test</div>}/>;
};