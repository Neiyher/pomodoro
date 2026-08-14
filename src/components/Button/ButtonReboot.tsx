import "./Button.css"

type handleResetProps = {
    handleReset: () => void;
}

export default function ButtonReboot({ handleReset }: handleResetProps) {
    return (
        <button
            onClick={handleReset}
            className="playerButton playerButton--secondary"
            aria-label="Reiniciar Pomodoro"
        >
            ↻
        </button>
    )
}