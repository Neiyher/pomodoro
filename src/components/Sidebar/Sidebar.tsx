import PomodoroCard from "./PomodoroCard";
import type { Pomodoro } from "../../types/Pomodoro";

type SidebarPorps = {
    setSelectedPomodoro: React.Dispatch<React.SetStateAction<Pomodoro>>
    pomodoros:Pomodoro[];
}

export default function Sidebar({pomodoros,setSelectedPomodoro}:SidebarPorps){

    return(
        <div className="sidebarContainer">
        {
            pomodoros.map((pomo)=>(
                <PomodoroCard 
                onSelect={setSelectedPomodoro}
                key={pomo.id}
                pomodoro={pomo} />
            ))
        }
        </div>
    )
}