import "./PomodoroPlayer.css"
import { useState, useEffect } from 'react'
import type { Pomodoro } from "../../types/Pomodoro";
import type { Mode } from "../../types/Mode"

import Timer from "../Timer/Timer";
import ButtonPlay from '../Button/ButtonPlay';
import ButtonReboot from '../Button/ButtonReboot';

import work from "../../assets/pj/work.gif"
import pause from "../../assets/pj/pause.jpg"

type PomodoroPlayerPorps = {
    pomodoro: Pomodoro;
}

export default function PomodoroPlayer({pomodoro}:PomodoroPlayerPorps){
    const [mode, setMode] = useState<Mode>("work");
    
    const [timeLeft, setTimeLeft] = useState(pomodoro.workTime)
    const [isRunning, setIsRunning] = useState(false)
    const [completedPomodoros, setCompletedPomodoros] = useState(0);
    const [sessionFinished, setSessionFinished] = useState(false);

    function onToggle(){
        setIsRunning(prev => !prev)
    }

    function handleReset(){
        setIsRunning(false);
        setTimeLeft(pomodoro.workTime);
        setMode("work");
        setCompletedPomodoros(0)
        setSessionFinished(false)
    }

    /* Cuando el pomodoro llega a cero esta funcion se activa. */
    function handleSessionEnd() {
        setIsRunning(false);
        console.log("🔔 Suena la alarma 🔔");

        if (mode === "work") {

            // Temporizador simple
            if (pomodoro.targetPomodoros === 0) {
                console.log("✅ Temporizador completado");
                setSessionFinished(true);
                return;
            }

            const nextPomodoros = completedPomodoros + 1;
            setCompletedPomodoros(nextPomodoros);

            // ¿Se completó la cantidad de sesiones?
            if (nextPomodoros === pomodoro.targetPomodoros) {

                // ¿Existe descanso largo?
                if (pomodoro.longBreakTime > 0) {
                    setMode("longBreak");
                    setTimeLeft(pomodoro.longBreakTime);
                } else {
                    console.log("✅ Sesión completada");
                    setSessionFinished(true);
                }

                return;
            }

            // Todavía faltan sesiones
            if (pomodoro.breakTime > 0) {
                setMode("break");
                setTimeLeft(pomodoro.breakTime);
            } else {
                setMode("work");
                setTimeLeft(pomodoro.workTime);
            }

        } else if (mode === "break") {

            setMode("work");
            setTimeLeft(pomodoro.workTime);

        } else if (mode === "longBreak") {

            console.log("✅ Sesión completada");
            setSessionFinished(true);
        }
    }
    /* Este useEffect verifica cuando se cambia de pomodoro. */
    useEffect(() => {
        setMode("work")
        setTimeLeft(pomodoro.workTime)
        setIsRunning(false)
        setCompletedPomodoros(0)
        setSessionFinished(false);
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
    if (timeLeft > 0 || sessionFinished) return;

    handleSessionEnd();
}, [timeLeft, sessionFinished]);

    return(
        <div className='pomoPlayer'>
            <header className="playerHeader">
                <h1>{pomodoro.title}</h1>
                <ButtonReboot handleReset={handleReset}/>
            </header>
            <main className="playerContent">
                <Timer timeLeft={timeLeft}/>
                <div>
                {mode}
                </div>
                <div className="playerGif">
                    {
                    isRunning?(
                        <img src={work} alt="" />
                    ):(
                        <img src={pause} alt="" />
                    )
                    }
                </div>
                <div className="playerControls">
                    {
                    sessionFinished?(
                        <ButtonReboot handleReset={handleReset}/>
                    ):(
                        <ButtonPlay 
                        onToggle={onToggle}
                        isRunning={isRunning}/> 
                    )
                    }
                </div>
                <div className="playerProgress">
                    {pomodoro.targetPomodoros === 0
                        ? "Temporizador simple"
                        : `${completedPomodoros}/${pomodoro.targetPomodoros}`
                    }
                </div>
            </main>
        </div>    
    )
}