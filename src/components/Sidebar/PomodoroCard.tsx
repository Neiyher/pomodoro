import "./PomodoroCard.css"
import type { Pomodoro } from "../../types/Pomodoro";
type PomoCardProps = {
    pomodoro: Pomodoro
    onSelect: (pomodoro: Pomodoro) => void;
    onDeletePomodoro: (id: number) => void;
    isEditMode: boolean;
    setEditingPomodoro: React.Dispatch<React.SetStateAction<Pomodoro | null>>
}


export default function PomodoroCard({ pomodoro, onSelect, onDeletePomodoro, isEditMode, setEditingPomodoro }: PomoCardProps) {

    const minutes = Math.floor(pomodoro.workTime / 60);

    return (
        <div className="pomoCard" onClick={() => onSelect(pomodoro)}>
            <h2>{pomodoro.title}</h2>
            <p>{minutes} min</p>
            {isEditMode && (
                <div>
                    <button onClick={() => setEditingPomodoro(pomodoro)}>✏️</button>
                    <button onClick={() => onDeletePomodoro(pomodoro.id)}>🗑️</button>
                </div>
            )}   
        </div>
    );
}