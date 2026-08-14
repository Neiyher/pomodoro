import "./Button.css"

type ButtonPlayProps = {
    isRunning: boolean;
    onToggle: () => void;
}

export default function ButtonPlay({ isRunning, onToggle }: ButtonPlayProps) {
    return (
        <button
            onClick={onToggle}
            className="playerButton playerButton--primary"
            aria-label={isRunning ? "Pausar Pomodoro" : "Iniciar Pomodoro"}
        >
            {isRunning ? "⏸" : "▶"}
        </button>
    )
}