import './App.css'
import { useState, useEffect } from 'react'

import { pomodoros as initialPomodoros } from "./data/Pomodoros";

import Controls from './components/Controls'
import Header from './components/Header'
import Timer from './components/Timer'

import Sidebar from './components/Sidebar/Sidebar'
import PomodoroPlayer from './components/PomodoroPlayer/PomodoroPlayer';

import type { Mode } from "./types/Mode";
import type { Pomodoro } from './types/Pomodoro'

const WORK_TIME = 0.1 * 60;
const BREAK_TIME = 0.1 * 60;
const LONG_BREAK_TIME = 0.1 * 60;

function App() {
  /* type Mode = "work" | "break" | "longBreak"; */

  const [pomodoros, setPomodoros] = useState<Pomodoro[]>(initialPomodoros);

  const [mode, setMode] = useState<Mode>("work");

  const [timeLeft, setTimeLeft] = useState(WORK_TIME)
  const [isRunning, setIsRunning] = useState(false)

  const [completedPomodoros, setCompletedPomodoros] = useState(0);
  const [selectedPomodoro, setSelectedPomodoro] = useState<Pomodoro | null>(null);
/* Cuando el pomodoro llega a cero esta funcion se activa. */
  function handleSessionEnd() {
    setIsRunning(false)
    alert("🔔Suena la Alarma🔔")
    if(mode==='work'){
      const nextPomodoros = completedPomodoros + 1;
      setCompletedPomodoros(nextPomodoros)
      if(nextPomodoros===4){
        setMode("longBreak")
        setTimeLeft(LONG_BREAK_TIME)
        setCompletedPomodoros(0);
      }else {
        setMode("break")
        setTimeLeft(BREAK_TIME)
      }
    }else{
      setMode('work')
      setTimeLeft(WORK_TIME)
    }
}
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

  return (
    <>
      <Header/>
      <p>{completedPomodoros}</p>
      <Timer timeLeft={timeLeft} />
      <div>
        {mode}
      </div>
      <Controls 
        setIsRunning={setIsRunning} 
        isRunning={isRunning} 
        setTimeLeft={setTimeLeft}
        WORK_TIME ={WORK_TIME}
        setMode={setMode}
        />
        <Sidebar 
        pomodoros={pomodoros}
        setSelectedPomodoro={setSelectedPomodoro}/>
        <PomodoroPlayer
        pomodoro={selectedPomodoro}
        setMode={setMode}
        setTimeLeft={setTimeLeft}
        setIsRunning={setIsRunning}
        setCompletedPomodoros={setCompletedPomodoros}
        />
    </>
  )
}

export default App
