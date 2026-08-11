import "./Sidebar.css"
import PomodoroCard from "./PomodoroCard";
import ButtonCreate from "../Button/ButtonCreate";
import ButtonEdit from "../Button/ButtonEdit";
import type { Pomodoro } from "../../types/Pomodoro";

type SidebarPorps = {
    setSelectedPomodoro: React.Dispatch<React.SetStateAction<Pomodoro>>
    pomodoros:Pomodoro[];
    setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onDeletePomodoro: (id: number) => void;
    isEditMode: boolean;
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    setEditingPomodoro: React.Dispatch<React.SetStateAction<Pomodoro | null>>
}

export default function Sidebar({pomodoros,setSelectedPomodoro,setIsCreateModalOpen, onDeletePomodoro, setIsEditMode, isEditMode, setEditingPomodoro}:SidebarPorps){

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
                    onDeletePomodoro={onDeletePomodoro}
                    isEditMode={isEditMode}
                />
                ))}
            </div>
            <ButtonCreate setIsCreateModalOpen={setIsCreateModalOpen}/>
            <ButtonEdit setIsEditMode={setIsEditMode}/>
        </div>
    )
}