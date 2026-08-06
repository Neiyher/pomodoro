import "./Button.css"

type ButtonPlayProps = {
    isRunning : boolean;
    onToggle: () => void;
}

export default function ButtonPlay ({isRunning,onToggle}:ButtonPlayProps){
    return(
            <button onClick={onToggle} className="button button--primary">
                {isRunning ? "Pausar" : "Iniciar"}
            </button>
    )
}