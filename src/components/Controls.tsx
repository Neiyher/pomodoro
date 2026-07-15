type ControlsProps = {
    isRunning: boolean;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
    setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
    WORK_TIME: number
};

export default function Controls({ isRunning, setIsRunning, setTimeLeft, WORK_TIME }: ControlsProps){
    const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(WORK_TIME);
};

    return(
        <div>
            <button onClick={() => setIsRunning(prev => !prev)}>
                {isRunning ? "Pausar" : "Iniciar"}
            </button>
            <button onClick={handleReset}>Reiniciar</button>
        </div>
    )
}