type ButtonCreateProps={
    setIsCreateModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ButtonCreate({setIsCreateModalOpen}:ButtonCreateProps){
    const pom = function pomodoronuevo(){
        console.log("nuevo pomodoro")
        setIsCreateModalOpen(true)
    }
    return(
        <button onClick={pom}>+ Nuevo Pomodoro</button>
    )
}