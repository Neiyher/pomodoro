import './App.css'
import { useState } from 'react'

import { pomodoros as initialPomodoros } from "./data/Pomodoros";

import Header from './components/Header'
import Sidebar from './components/Sidebar/Sidebar'
import PomodoroPlayer from './components/PomodoroPlayer/PomodoroPlayer';

import type { Pomodoro } from './types/Pomodoro'


function App() {

  const [pomodoros, setPomodoros] = useState<Pomodoro[]>(initialPomodoros);

  const [selectedPomodoro, setSelectedPomodoro] = useState<Pomodoro>(pomodoros[0]);

  return (
    <>
      <Header/>
      <PomodoroPlayer
        pomodoro={selectedPomodoro}
      />
      <Sidebar 
        pomodoros={pomodoros}
        setSelectedPomodoro={setSelectedPomodoro}/>     
    </>
  )
}

export default App
