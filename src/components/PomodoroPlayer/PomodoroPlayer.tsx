import sessionComplete from "../../assets/sounds/session-complete.mp3";
import pomodoroComplete from "../../assets/sounds/pomodoro-complete.mp3";
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

    const workMinutes = pomodoro.workTime / 60;
    const breakMinutes = pomodoro.breakTime / 60;
    const longBreakMinutes = pomodoro.longBreakTime / 60;

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
    function playSound(sound: string) {
    console.log("Intentando reproducir:", sound);

    const audio = new Audio(sound);

    audio.play()
        .then(() => {
            console.log("🔊 Audio reproduciéndose");
        })
        .catch((error) => {
            console.error("❌ Error reproduciendo audio:", error);
        });
}
    /* Cuando el pomodoro llega a cero esta funcion se activa. */
    function handleSessionEnd() {
    setIsRunning(false);

    if (mode === "work") {

        // Temporizador simple
        if (pomodoro.targetPomodoros === 0) {
            playSound(pomodoroComplete);
            setSessionFinished(true);
            return;
        }

        const nextPomodoros = completedPomodoros + 1;
        setCompletedPomodoros(nextPomodoros);

        // ¿Se completó la cantidad de sesiones?
        if (nextPomodoros === pomodoro.targetPomodoros) {

            // ¿Existe descanso largo?
            if (pomodoro.longBreakTime > 0) {
                playSound(sessionComplete);
                setMode("longBreak");
                setTimeLeft(pomodoro.longBreakTime);
            } else {
                playSound(pomodoroComplete);
                setSessionFinished(true);
            }

            return;
        }

        // Todavía faltan sesiones
        playSound(sessionComplete);

        if (pomodoro.breakTime > 0) {
            setMode("break");
            setTimeLeft(pomodoro.breakTime);
        } else {
            setMode("work");
            setTimeLeft(pomodoro.workTime);
        }

    } else if (mode === "break") {

        // Terminó el descanso corto
        playSound(sessionComplete);
        setMode("work");
        setTimeLeft(pomodoro.workTime);

    } else if (mode === "longBreak") {

        // Terminó el descanso largo
        playSound(pomodoroComplete);
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
            </main>
            <footer className="playerFooter">
                <span>Trabajo: {workMinutes} min</span>

                {breakMinutes > 0 && (
                    <span>Descanso: {breakMinutes} min</span>
                )}

                {longBreakMinutes > 0 && (
                    <span>Descanso largo: {longBreakMinutes} min</span>
                )}
                <div className="playerProgress">
                    {pomodoro.targetPomodoros === 0
                        ? "Temporizador simple"
                        : `Progreso: ${completedPomodoros}/${pomodoro.targetPomodoros}`
                    }
                </div>
            </footer>
        </div>    
    )
}