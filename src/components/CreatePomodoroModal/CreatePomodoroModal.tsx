import './CreatePomodoroModal.css'
import { useEffect, useState } from "react";
import type { Pomodoro } from '../../types/Pomodoro';

type CreatePomodoroModalProps={
    onClose: () => void;
    onCreatePomodoro: (pomodoro: Pomodoro) => void;
    editingPomodoro: Pomodoro | null;
    onUpdatePomodoro: (pomodoro: Pomodoro) => void;
}

export default function CreatePomodoroModal({onClose, onCreatePomodoro, editingPomodoro, onUpdatePomodoro}: CreatePomodoroModalProps) {

    const [title, setTitle] = useState("");
    const [workTime, setWorkTime] = useState(25);
    const [breakTime, setBreakTime] = useState(5);
    const [longBreakTime, setLongBreakTime] = useState(15);
    const [targetPomodoros, setTargetPomodoros] = useState(4);
    const isTitleValid = title.trim() !== "";
    function handleClose() {
        resetForm();
        onClose();
    }
    function save(){
        if (editingPomodoro) {
            const updatedPomodoro = {
                ...editingPomodoro,
                title,
                workTime: workTime * 60,
                breakTime: breakTime * 60,
                longBreakTime: longBreakTime * 60,
                targetPomodoros
            };
            onUpdatePomodoro(updatedPomodoro);
            resetForm();
            onClose();
            return;
        }
        const newPomodoro = {
            id:Date.now(),
            title:title,
            workTime:workTime*60,
            breakTime:breakTime*60,
            longBreakTime:longBreakTime*60,
            completedPomodoros:0,
            check: false,
            targetPomodoros:targetPomodoros
        }
        onCreatePomodoro(newPomodoro);
        resetForm();
        onClose();
    }
    useEffect(() => {
    if (!editingPomodoro) return;

    setTitle(editingPomodoro.title);
    setWorkTime(editingPomodoro.workTime/60);
    setBreakTime(editingPomodoro.breakTime/60);
    setLongBreakTime(editingPomodoro.longBreakTime/60);
    setTargetPomodoros(editingPomodoro.targetPomodoros);
    }, [editingPomodoro]);

    function resetForm() {
    setTitle("");
    setWorkTime(25);
    setBreakTime(5);
    setLongBreakTime(15);
    setTargetPomodoros(4);
    }

    return (
        <div className="modalOverlay">
            <div className='modal'>
                <h2>{editingPomodoro ? "Editar Pomodoro" : "Crear Pomodoro"}</h2>
                <div className="formGroup">
                    <label htmlFor="title">Título</label>
                    <input 
                    id="title"
                    type="text"
                    placeholder="Ej: Leer"
                    value={title}
                    onChange={(e) => {setTitle(e.target.value)}}/>
                </div>

                <div className="formContent">
                    <div className="formGroup">
                        <label htmlFor="workTime">Trabajo (min)</label>
                        <input 
                            id="workTime"
                            type="number"
                            min={1}
                            value={workTime}
                            onChange={(e) => setWorkTime(Number(e.target.value))}/>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="breakTime">Descanso corto (min)</label>
                        <input 
                            id="breakTime"
                            type="number"
                            min={0}
                            value={breakTime}
                            onChange={(e) => {setBreakTime(Number(e.target.value))}}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="longBreakTime">Descanso Largo (min)</label>
                        <input 
                            id="longBreakTime"
                            type="number"
                            min={0}
                            value={longBreakTime}
                            onChange={(e) => {setLongBreakTime(Number(e.target.value))}}/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="targetPomodoros">sesiones </label>
                        <input 
                            id="targetPomodoros"
                            type="number"
                            min={0}
                            value={targetPomodoros}
                            onChange={(e) => {setTargetPomodoros(Number(e.target.value))}}/>
                    </div>
                </div>
                <div className="modalActions">
                    <button onClick={handleClose} className="button button--secondary">Cancelar</button>

                    <button onClick={save} className="button button--primary" disabled={!isTitleValid}>{editingPomodoro ? "Guardar cambios" : "Guardar"}</button>
                </div>
            </div>
        </div> 
    );
}