import { pomodoros } from "../../data/Pomodoros";
import PomodoroCard from "./PomodoroCard";

export default function Sidebar(){

    return(
        <div className="sidebarContainer">
        {
            pomodoros.map((pomo)=>(
                <PomodoroCard 
                key={pomo.id}
                pomodoro={pomo} />
            ))
        }
        </div>
    )
}