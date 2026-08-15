import "./Sidebar.css"
import PomodoroCard from "./PomodoroCard";
import ButtonCreate from "../Button/ButtonCreate";
import ButtonEdit from "../Button/ButtonEdit";
import type { Pomodoro } from "../../types/Pomodoro";

type SidebarPorps = {
    setSelectedPomodoro: React.Dispatch<React.SetStateAction<Pomodoro>>
    selectedPomodoro: Pomodoro;
    pomodoros:Pomodoro[];
    setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onDeletePomodoro: (id: number) => void;
    isEditMode: boolean;
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    onEditPomodoro: (pomodoro: Pomodoro) => void;
    isSidebarOpen: boolean;
}

export default function Sidebar({pomodoros,setSelectedPomodoro,selectedPomodoro,setIsCreateModalOpen, onDeletePomodoro, setIsEditMode, isEditMode, onEditPomodoro, isSidebarOpen}:SidebarPorps){

    return(
        <div className={`sidebarContainer ${isSidebarOpen ? "open" : ""}`}>
            <div className="sidebarHeader">
                <h2 className="sidebarTitle">My Quest</h2>
                <ButtonEdit setIsEditMode={setIsEditMode}/>
            </div>
            

            <div className="sidebarList">
                {pomodoros.map((pomo) => (
                <PomodoroCard
                    key={pomo.id}
                    pomodoro={pomo}
                    onSelect={setSelectedPomodoro}
                    isSelected={pomo.id === selectedPomodoro.id}
                    onDeletePomodoro={onDeletePomodoro}
                    isEditMode={isEditMode}
                    onEditPomodoro={onEditPomodoro}
                />
                ))}
            </div>
            <ButtonCreate setIsCreateModalOpen={setIsCreateModalOpen}/>
            
        </div>
    )
}