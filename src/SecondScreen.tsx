import {ButtonItem} from "./ButtonItem";
import React from "react";
import './App.css'
import {ChangeScreenInfo} from "./ChangeScreenInfo";

type SecondScreenPropsType = {
    maxValue: number
    startValue: number
    incrementFunction: () => void
    resetFunction: () => void
    startValueNumberTwo: number
}

export function SecondScreen(props: SecondScreenPropsType) {

    const incFn = () => {props.incrementFunction()}
    const resFn = () => {props.resetFunction()}

    return (
        <div className='screens'>
            <ChangeScreenInfo startValue={props.startValue} maxValue={props.maxValue}/>
            <div className='buttons'>
                <div>
                    <ButtonItem name='inc' callback={incFn} isActive={props.startValue == props.maxValue}/>
                </div>
                <div>
                    <ButtonItem name='reset' callback={resFn} isActive={props.startValue == props.startValueNumberTwo}/>
                </div>
            </div>
        </div>
    )
}

