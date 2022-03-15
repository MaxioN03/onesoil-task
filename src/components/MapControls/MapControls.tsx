import React, {ReactElement} from 'react';
import styles from './MapControls.module.css';
import PlusIcon from './plus_icon_16.svg';
import MinusIcon from './minus_icon_16.svg';
import CurrentLocationIcon from './current_location_icon_16.svg';

interface MapControl {
    icon: ReactElement,
    title?: string
}

export const MapControls = () => {
    return <div className={styles.map_controls}>
        <MapControlGroup controls={[{icon: PlusIcon}, {icon: MinusIcon}]}/>
        <MapControlGroup controls={[{icon: CurrentLocationIcon}]}/>
    </div>;
};

interface IMapControlGroupProps {
    controls: MapControl[]
}

const MapControlGroup = ({controls}: IMapControlGroupProps) => {
    return <div className={styles.map_control_group}>
        {controls.map(({icon}, index, arr) => {
            return <>
                <div className={styles.map_control}>
                    <img src={icon}/>
                </div>
                {index !== arr.length - 1
                    ? <div className={styles.map_control_separator}/>
                    : null}
            </>;
        })}
    </div>;
};