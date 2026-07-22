type ControlsProps = {
    isRunning: boolean;
    setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
    setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
    WORK_TIME: number
    setMode: React.Dispatch<React.SetStateAction<Mode>>;
};

import type { Mode } from "../types/Mode";

export default function Controls({ isRunning, setIsRunning, setTimeLeft, WORK_TIME, setMode }: ControlsProps){
    const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(WORK_TIME);
    setMode("work")
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