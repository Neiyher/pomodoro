import './App.css'
import { useState, useEffect } from 'react'

import { pomodoros as initialPomodoros } from "./data/Pomodoros";

import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import PomodoroPlayer from './components/PomodoroPlayer/PomodoroPlayer';
import CreatePomodoroModal from './components/CreatePomodoroModal/CreatePomodoroModal'

import type { Pomodoro } from './types/Pomodoro'


function App() {

  const [pomodoros, setPomodoros] = useState<Pomodoro[]>(()=>{
    const datos = localStorage.getItem("pomodoros");
    return datos ? JSON.parse(datos) : initialPomodoros
  });

  const [selectedPomodoro, setSelectedPomodoro] = useState<Pomodoro>(pomodoros[0]);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  function handleCreatePomodoro(newPomodoro: Pomodoro) {
    setPomodoros((prev) => [...prev, newPomodoro]);
    setSelectedPomodoro(newPomodoro);
  }
  useEffect(() => {
    const datos = JSON.stringify(pomodoros);
    localStorage.setItem("pomodoros",datos)
  }, [pomodoros]);

  return (
    <div className='app'>
      <Header/>
      <main className='appContainer'>
        <Sidebar 
          pomodoros={pomodoros}
          setSelectedPomodoro={setSelectedPomodoro}
          setIsCreateModalOpen={setIsCreateModalOpen}/>   
        <PomodoroPlayer
          pomodoro={selectedPomodoro}/>

        {isCreateModalOpen && (
          <CreatePomodoroModal
          setIsCreateModalOpen={setIsCreateModalOpen}
          onCreatePomodoro={handleCreatePomodoro}/>
        )}
      </main>  
    </div>
  )
}

export default App
