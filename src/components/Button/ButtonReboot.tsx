import "./Button.css"

type handleResetProps={
    handleReset:() => void;
}

export default function ButtonReboot({handleReset}:handleResetProps){
    return(
            <button onClick={handleReset} className="button button--secondary">Reiniciar</button>
    )
    
}