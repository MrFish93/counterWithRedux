import React from "react";

type ButtonItemPropsType = {
    name: string
    callback: () => void
    isActive: boolean
}

export function ButtonItem(props: ButtonItemPropsType) {

    const onClickButtonHandler = () => {
        props.callback()
    }

    return (
        <div>
            <button
                onClick={onClickButtonHandler}
                disabled={props.isActive}
            >
                {props.name}
            </button>
        </div>
    )
}