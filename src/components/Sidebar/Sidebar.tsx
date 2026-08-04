import "./Sidebar.css"
import PomodoroCard from "./PomodoroCard";
import ButtonCreate from "../Button/ButtonCreate";
import type { Pomodoro } from "../../types/Pomodoro";

type SidebarPorps = {
    setSelectedPomodoro: React.Dispatch<React.SetStateAction<Pomodoro>>
    pomodoros:Pomodoro[];
    setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({pomodoros,setSelectedPomodoro,setIsCreateModalOpen}:SidebarPorps){

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
        <ButtonCreate
            setIsCreateModalOpen={setIsCreateModalOpen}/> 
        </div>
    )
}