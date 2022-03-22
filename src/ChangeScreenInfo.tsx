import React from "react";

type ChangeScreenInfoPropsType = {
    startValue: number
    maxValue: number
}

export function ChangeScreenInfo(props: ChangeScreenInfoPropsType) {
    if (!props.maxValue && !props.startValue || props.maxValue < props.startValue) {
        return (
            <div>
                <div>{'enter positive values and press "set"'}</div>
            </div>
        )
    } else if (props.startValue == props.maxValue) {
        return <div className='red'>{props.startValue}</div>
    } else {
        return <div>{props.startValue}</div>
    }
}