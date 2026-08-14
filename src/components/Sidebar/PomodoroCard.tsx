import "./PomodoroCard.css"
import type { Pomodoro } from "../../types/Pomodoro";
type PomoCardProps = {
    pomodoro: Pomodoro
    onSelect: (pomodoro: Pomodoro) => void;
    isSelected: boolean;
    onDeletePomodoro: (id: number) => void;
    isEditMode: boolean;
    onEditPomodoro: (pomodoro: Pomodoro) => void;
}


export default function PomodoroCard({
    pomodoro,
    onSelect,
    isSelected,
    onDeletePomodoro,
    isEditMode,
    onEditPomodoro
}: PomoCardProps) {

    const minutes = Math.floor(pomodoro.workTime / 60);

    return (
        <div
            className={`pomoCard ${isSelected ? "pomoCard--selected" : ""}`}
            onClick={() => onSelect(pomodoro)}
        >
            <h2>{pomodoro.title}</h2>
            <p>{minutes} min</p>

            {isEditMode && (
                <div className="buttonContainer">
                    <button onClick={(event) => {event.stopPropagation(); onDeletePomodoro(pomodoro.id);}}>
                        ×
                    </button>
                    <button
                        onClick={(event) => {event.stopPropagation(); onEditPomodoro(pomodoro);}}>
                        ✎
                    </button>
                </div>
            )}
        </div>
    );
}