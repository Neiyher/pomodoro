type handleResetProps={
    handleReset:() => void;
}

export default function ButtonReboot({handleReset}:handleResetProps){
    return(
        <div>
            <button onClick={handleReset}>Reiniciar</button>
        </div>
        
    )
    
}