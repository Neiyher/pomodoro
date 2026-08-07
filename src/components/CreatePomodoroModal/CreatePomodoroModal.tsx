import { useState } from 'react'
import type { Pomodoro } from '../../types/Pomodoro';

type CreatePomodoroModalProps={
    setIsCreateModalOpen:React.Dispatch<React.SetStateAction<boolean>>;
    onCreatePomodoro: (pomodoro: Pomodoro) => void;
}

export default function CreatePomodoroModal({setIsCreateModalOpen, onCreatePomodoro}: CreatePomodoroModalProps) {

    const [title, setTitle] = useState("");
    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [longBreakTime, setLongBreakTime] = useState(15);
    const [targetPomodoros, setTargetPomodoros] = useState(4);
    function handleClose() {
        setIsCreateModalOpen(false);
    }
    function save(){
        console.log({
            title,
            workTime,
            breakTime,
            longBreakTime,
        });
        const newPomodoro = {
            id:Date.now(),
            title:title,
            workTime:workTime,
            breakTime:breakTime,
            longBreakTime:longBreakTime,
            completedPomodoros:0,
            check: false,
            targetPomodoros:targetPomodoros
        }
        onCreatePomodoro(newPomodoro);
        setIsCreateModalOpen(false);
        setTitle("");
        setWorkTime(25);
        setBreakTime(5);
        setLongBreakTime(15);
        setTargetPomodoros(4);
    }

    return (
        <div>
            <h2>Crear Pomodoro</h2>
            <input 
                type="text"
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}/>
            <input 
                type="number"
                value={workTime}
                onChange={(e) => setWorkTime(Number(e.target.value))}/>
            <input 
                type="number"
                value={breakTime}
                onChange={(e) => {setBreakTime(Number(e.target.value))}}/>
            <input 
                type="number"
                value={longBreakTime}
                onChange={(e) => {setLongBreakTime(Number(e.target.value))}}/>
            <input 
                type="number"
                value={targetPomodoros}
                onChange={(e) => {setTargetPomodoros(Number(e.target.value))}}/>
            <button onClick={save}>Save</button>
            <button onClick={handleClose}>X</button>
        </div>
    );
}