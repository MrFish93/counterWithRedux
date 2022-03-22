import React, {ChangeEvent, useState} from "react";
import {ButtonItem} from "./ButtonItem";

type FirstScreenPropsType = {
    setValues: (maxValue: number, startValue: number) => void
    startValue: number
    maxValue: number
    iNeedStartValueAgain: (startValue: number) => void
}

export function FirstScreen(props: FirstScreenPropsType) {

    let [maxValue, setMaxValue] = useState(0)
    let [startValue, setStartValue] = useState(0)

    const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }
    const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
    }
    const onClickSetValues = () => {
        props.setValues(maxValue, startValue)
        props.iNeedStartValueAgain(startValue)
    }

    return (
        <div className='screens'>
            <div>
                max value:
                <input onChange={onChangeMaxValue}/>
            </div>
            <div>
                start value:
                <input onChange={onChangeStartValue}/>
            </div>
            <div className='buttons'>
                <ButtonItem
                    name='set'
                    callback={onClickSetValues}
                    isActive={!maxValue && !startValue || maxValue<=startValue}
                />
            </div>
        </div>
    )
}