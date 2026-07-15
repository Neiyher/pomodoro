type TimerProps = {
    timeLeft: number
}
export default function Timer({ timeLeft }: TimerProps){
    
    const minutes = Math.floor(timeLeft/60)
    const seconds = timeLeft % 60;

    return(
        <div>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</div>
    )
}