import './App.css'
import { useState, useEffect } from 'react'

import Controls from './components/Controls'
import Header from './components/Header'
import Timer from './components/Timer'

import Sidebar from './components/Sidebar/Sidebar'

import type { Mode } from "./types/Mode";
import type { Pomodoro } from './types/Pomodoro'

import { pomodoros } from './data/Pomodoros'

const WORK_TIME = 0.1 * 60;
const BREAK_TIME = 0.1 * 60;
const LONG_BREAK_TIME = 0.1 * 60;

function App() {
  /* type Mode = "work" | "break" | "longBreak"; */

  const [pomodoros, setPomodoros] = useState<Pomodoro[]>([]);

  const [mode, setMode] = useState<Mode>("work");

  const [timeLeft, setTimeLeft] = useState(WORK_TIME)
  const [isRunning, setIsRunning] = useState(false)

  const [completedPomodoros, setCompletedPomodoros] = useState(0);

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

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

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
        <Sidebar/>
    </>
  )
}

export default App
