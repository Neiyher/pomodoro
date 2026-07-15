import './App.css'
import { useState, useEffect } from 'react'

import Controls from './components/Controls'
import Header from './components/Header'
import Timer from './components/Timer'

function App() {

  const WORK_TIME = 9 * 60;

  const [timeLeft, setTimeLeft] = useState(WORK_TIME)
  const [isRunning, setIsRunning] = useState(false)

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
    
    console.log("🔔Suena la Alarma🔔")
    setIsRunning(false)
    
  }, [timeLeft]);

  return (
    <>
      <Header/>
      <Timer timeLeft={timeLeft} />
      <Controls 
        setIsRunning={setIsRunning} 
        isRunning={isRunning} 
        setTimeLeft={setTimeLeft}
        WORK_TIME ={WORK_TIME}
        />
    </>
  )
}

export default App
