import "./PomodoroCard.css"
import type { Pomodoro } from "../../types/Pomodoro";
type PomoCardProps = {
    pomodoro: Pomodoro
    onSelect: (pomodoro: Pomodoro) => void;
    onDeletePomodoro: (id: number) => void;
}


export default function PomodoroCard({ pomodoro, onSelect, onDeletePomodoro }: PomoCardProps) {

    const minutes = Math.floor(pomodoro.workTime / 60);

    return (
        <div className="pomoCard" onClick={() => onSelect(pomodoro)}>
            <h2>{pomodoro.title}</h2>
            <p>{minutes} min</p>
            <button onClick={() => onDeletePomodoro(pomodoro.id)}>🗑️</button>
        </div>
    );
}