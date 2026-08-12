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
  const [isEditMode, setIsEditMode] = useState(false)
  const [editingPomodoro, setEditingPomodoro] = useState<Pomodoro | null>(null);
  const defaultPomodoro: Pomodoro = {
    id: Date.now(),
    title: "Pomodoro clásico",
    workTime: 25,
    breakTime: 5,
    longBreakTime: 15,
    completedPomodoros: 0,
    check: false,
    targetPomodoros: 4
}

  function handleCreatePomodoro(newPomodoro: Pomodoro) {
    setPomodoros((prev) => [...prev, newPomodoro]);
    setSelectedPomodoro(newPomodoro);
  }
  useEffect(() => {
    const datos = JSON.stringify(pomodoros);
    localStorage.setItem("pomodoros",datos)
  }, [pomodoros]);

  function handleDeletePomodoro(id: number) {
    const nuevosPomodoros = pomodoros.filter(
        pomo => pomo.id !== id
    );

    if (nuevosPomodoros.length === 0) {
        setPomodoros([defaultPomodoro]);
        setSelectedPomodoro(defaultPomodoro);
    } else {
        if (selectedPomodoro.id === id) {
            setSelectedPomodoro(nuevosPomodoros[0]);
        }
        setPomodoros(nuevosPomodoros);
    }
  }

  function handleEditPomodoro(pomodoro: Pomodoro) {
    setEditingPomodoro(pomodoro);
    setIsCreateModalOpen(true);
  }
  function handleCloseModal() {
    setIsCreateModalOpen(false);
    setEditingPomodoro(null);
  }
  function handleUpdatePomodoro(updatedPomodoro: Pomodoro) {
    setPomodoros(prev => prev.map(pomo =>
          pomo.id === updatedPomodoro.id
            ? updatedPomodoro
            : pomo
        )
    );
  }

  return (
    <div className='app'>
      <Header/>
      <main className='appContainer'>
        <Sidebar 
          pomodoros={pomodoros}
          setSelectedPomodoro={setSelectedPomodoro}
          setIsCreateModalOpen={setIsCreateModalOpen}
          onDeletePomodoro={handleDeletePomodoro}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          onEditPomodoro={handleEditPomodoro}/>   
        <PomodoroPlayer
          pomodoro={selectedPomodoro}/>

        {isCreateModalOpen && (
          <CreatePomodoroModal
          onClose={handleCloseModal}
          onCreatePomodoro={handleCreatePomodoro}
          editingPomodoro={editingPomodoro}
          onUpdatePomodoro={handleUpdatePomodoro}/>
        )}
      </main>  
    </div>
  )
}

export default App
