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
            <h2 className="sidebarTitle">
                🍅 Mis Pomodoros
            </h2>

            <div className="sidebarList">
                {pomodoros.map((pomo) => (
                <PomodoroCard
                    key={pomo.id}
                    pomodoro={pomo}
                    onSelect={setSelectedPomodoro}
                />
                ))}
            </div>
            <ButtonCreate setIsCreateModalOpen={setIsCreateModalOpen}/>
        </div>
    )
}