type ButtonPlayProps = {
    isRunning : boolean;
    onToggle: () => void;
}

export default function ButtonPlay ({isRunning,onToggle}:ButtonPlayProps){
    return(
        <div>
            <button onClick={onToggle}>
                {isRunning ? "Pausar" : "Iniciar"}
            </button>
        </div>
    )
}