import React, {useEffect, useState} from 'react';
import './App.css';
import {FirstScreen} from "./FirstScreen";
import {SecondScreen} from "./SecondScreen";

export function App() {

    let [maxValueApp, setMaxValueApp] = useState(0)
    let [startValueApp, setStartValueApp] = useState(0)

    //копия стартового значения чтоб обнулять и для css
    let [startValueNumberTwo, setStartValueNumberTwo] = useState(0)
    const iNeedStartValueAgain = (startValue: number) => {
        setStartValueNumberTwo(startValue)
    }

    useEffect(() => {
        let maxValue = localStorage.getItem('counterMaxValue')
        if (maxValue) {
        let newMaxValue = JSON.parse(maxValue)
            setMaxValueApp(newMaxValue)
        }
    }, [])
    useEffect( () => {
        let startValue = localStorage.getItem('counterStartValue')
        if (startValue) {
        let newStartValue = JSON.parse(startValue)
            setStartValueApp(newStartValue)
            setStartValueNumberTwo(newStartValue)
        }
    }, [] )

    useEffect(() => {
        localStorage.setItem('counterMaxValue', JSON.stringify(maxValueApp));
    }, [maxValueApp])
    useEffect(() => {
        localStorage.setItem('counterStartValue', JSON.stringify(startValueNumberTwo));
    }, [startValueNumberTwo])

    const setValues = (maxValue: number, startValue: number) => {
        if (maxValue > startValue && maxValue >= 0 && startValue >= 0) {
            setMaxValueApp(maxValue);
            setStartValueApp(startValue);
        } else {
            console.log('ты втираешь мне какую то дичь')
        }
    }

    const incrementFunction = () => {
        if (startValueApp < maxValueApp) {
            setStartValueApp(startValueApp + 1)
        }
    }
    const resetFunction = () => {
        setStartValueApp(startValueNumberTwo)
    }

    return (
        <div className="App">
            <FirstScreen
                setValues={setValues}
                startValue={startValueApp}
                maxValue={maxValueApp}
                iNeedStartValueAgain={iNeedStartValueAgain}
            />
            <SecondScreen
                maxValue={maxValueApp}
                startValue={startValueApp}
                incrementFunction={incrementFunction}
                resetFunction={resetFunction}
                startValueNumberTwo={startValueNumberTwo}
            />
        </div>
    );
}