import type { Pomodoro } from "../../types/Pomodoro";
type PomoCardPorps = {
    pomodoro: Pomodoro
    onSelect: (pomodoro: Pomodoro) => void;
}


export default function PomodoroCard({pomodoro,onSelect}:PomoCardPorps){

    return(
        <div className="pomo" onClick={()=>onSelect(pomodoro)}>
                <h2>{pomodoro.title}</h2>
                <div>
                    <span>Work: {pomodoro.workTime}</span>
                    <span>Break: {pomodoro.breakTime}</span>
                    <span>LongBreak: {pomodoro.longBreakTime}</span>
                </div>
            </div>
    )
}