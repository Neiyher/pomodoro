import { useState } from 'react'

type CreatePomodoroModalProps={
    setIsCreateModalOpen:React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreatePomodoroModal({setIsCreateModalOpen}: CreatePomodoroModalProps) {

    const [title, setTitle] = useState("");
    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [longBreakTime, setLongBreakTime] = useState(15);

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
            <button onClick={save}>Save</button>
            <button onClick={handleClose}>X</button>
        </div>
    );
}