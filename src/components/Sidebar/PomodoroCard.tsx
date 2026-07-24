import type { Pomodoro } from "../../types/Pomodoro";
type PomoCardPorps = {
    pomodoro: Pomodoro
}


export default function PomodoroCard({pomodoro}:PomoCardPorps){

    return(
        <div className="pomo">
                <h2>{pomodoro.title}</h2>
                <div>
                    <span>Work: {pomodoro.workTime}</span>
                    <span>Break: {pomodoro.breakTime}</span>
                    <span>LongBreak: {pomodoro.longBreakTime}</span>
                </div>
            </div>
    )
}