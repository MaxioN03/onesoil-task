import {EMPTY_DATA} from "../../../constants/constants";

const HECTARES_STRING = 'ha';
const HUGE_AREA = Math.pow(10, 6);

export const getAreaString = (areaValue: number | null) => {
    if(areaValue === null) {
        return <span>{EMPTY_DATA}</span>;
    } else {

        if (areaValue > HUGE_AREA) {
            //If number is too long, show it shorter
            let numberLength = Math.trunc(areaValue).toString().length;
            let dividedNumber = areaValue / Math.pow(10, numberLength - 1);

            return <span>{dividedNumber.toFixed(1)}&#215;10<sup>{numberLength - 1}</sup> {HECTARES_STRING}</span>;
        }

        return <span>{areaValue.toFixed(1)} {HECTARES_STRING}</span>;
    }
};