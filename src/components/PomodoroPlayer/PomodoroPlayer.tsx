import { useState, useEffect } from 'react'
import type { Pomodoro } from "../../types/Pomodoro";
import type { Mode } from "../../types/Mode"

import Controls from '../Controls';
import Timer from '../Timer';

type PomodoroPlayerPorps = {
    pomodoro: Pomodoro;
}

export default function PomodoroPlayer({pomodoro}:PomodoroPlayerPorps){
    const [mode, setMode] = useState<Mode>("work");
    
    const [timeLeft, setTimeLeft] = useState(pomodoro.workTime)
    const [isRunning, setIsRunning] = useState(false)

    const [completedPomodoros, setCompletedPomodoros] = useState(0);

    /* Cuando el pomodoro llega a cero esta funcion se activa. */
    function handleSessionEnd() {
        setIsRunning(false)
        alert("🔔Suena la Alarma🔔")
        if(mode==='work'){
        const nextPomodoros = completedPomodoros + 1;
        setCompletedPomodoros(nextPomodoros)
        if(nextPomodoros===4){
            setMode("longBreak")
            setTimeLeft(pomodoro.longBreakTime)
            setCompletedPomodoros(0);
        }else {
            setMode("break")
            setTimeLeft(pomodoro.breakTime)
        }
        }else{
        setMode('work')
        setTimeLeft(pomodoro.workTime)
        }
    }
    /* Este useEffect verifica cuando se cambia de pomodoro. */
    useEffect(() => {
        setMode("work")
        setTimeLeft(pomodoro.workTime)
        setIsRunning(false)
        setCompletedPomodoros(0)
    }, [pomodoro]);

    /* Este useEffect es el que confirma que Isrunung sea true para ir mermando tiempo */
    useEffect(() => {
        if (!isRunning) return;
        /* Setinterval es una funcion de js como "consol.log" el cual como primer parametro acepta un funcion, 
        como segundo parametro acepta un numero el cual indica cada cuanto se activara el primer parametro osea la function. */
        const interval = setInterval(() => {
        setTimeLeft((prev) => {
            if (prev <= 0) return 0;

            return prev - 1;
        });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    /* Este useEffect es el que verifica cuando el temporizador llega a cero. */
    useEffect(() => {
        if (timeLeft>0) return;

        handleSessionEnd();
    }, [timeLeft]);

    return(
        <div>
            <h1>{pomodoro.title}</h1>
            <Timer timeLeft={timeLeft}/>
            <Controls 
                    setIsRunning={setIsRunning} 
                    isRunning={isRunning} 
                    setTimeLeft={setTimeLeft}
                    WORK_TIME ={pomodoro.workTime}
                    setMode={setMode}
                    />
        </div>    
    )
}