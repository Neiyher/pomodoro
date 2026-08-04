import './App.css'
import { useState } from 'react'

import { pomodoros as initialPomodoros } from "./data/Pomodoros";

import Header from './components/Header'
import Sidebar from './components/Sidebar/Sidebar'
import PomodoroPlayer from './components/PomodoroPlayer/PomodoroPlayer';
import CreatePomodoroModal from './components/CreatePomodoroModal/CreatePomodoroModal'

import type { Pomodoro } from './types/Pomodoro'


function App() {

  const [pomodoros, setPomodoros] = useState<Pomodoro[]>(initialPomodoros);

  const [selectedPomodoro, setSelectedPomodoro] = useState<Pomodoro>(pomodoros[0]);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <>
      <Header/>
      <div className='appContainer'>
        <Sidebar 
          pomodoros={pomodoros}
          setSelectedPomodoro={setSelectedPomodoro}
          setIsCreateModalOpen={setIsCreateModalOpen}/>   
        <PomodoroPlayer
          pomodoro={selectedPomodoro}/>

        {isCreateModalOpen && (
          <CreatePomodoroModal
          setIsCreateModalOpen={setIsCreateModalOpen}/>
        )}
      </div>  
    </>
  )
}

export default App
