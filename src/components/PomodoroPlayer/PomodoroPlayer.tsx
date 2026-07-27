import { useState, useEffect } from 'react'
import type { Pomodoro } from "../../types/Pomodoro";
import type { Mode } from "../../types/Mode"

import Timer from '../Timer';

type PomodoroPlayerPorps = {
    pomodoro: Pomodoro|null;
    setMode:React.Dispatch<React.SetStateAction<Mode>>;
    setTimeLeft:React.Dispatch<React.SetStateAction<number>>;
    setIsRunning:React.Dispatch<React.SetStateAction<boolean>>;
    setCompletedPomodoros:React.Dispatch<React.SetStateAction<number>>;
    timeLeft: number
}

export default function PomodoroPlayer({pomodoro,setMode,setTimeLeft, setIsRunning, setCompletedPomodoros,timeLeft}:PomodoroPlayerPorps){

    /* Este useEffect verifica cuando se cambia de pomodoro. */
    useEffect(() => {
        if(pomodoro){
            setMode("work")
            setTimeLeft(pomodoro.workTime)
            setIsRunning(false)
            setCompletedPomodoros(0)
        }
    }, [pomodoro]);

    return(
        <div>
        {pomodoro ? (
            <div>
                <h1>{pomodoro.title}</h1>
                <span>{pomodoro.workTime}</span>
                <Timer timeLeft={timeLeft}/>
            </div>    
        ) : (
            <h1>Seleciona un pomodoro</h1>
        )}
        </div>
    )
}