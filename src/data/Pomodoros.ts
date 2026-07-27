import type { Pomodoro } from "../types/Pomodoro"

export const pomodoros: Pomodoro[] = [
    {
        id: 1,
        title: "Estudiar",
        workTime: 25,
        breakTime: 5,
        longBreakTime: 15,
        completedPomodoros: 4,
    },
    {
        id: 2,
        title: "Limpiar",
        workTime: 2,
        breakTime: 45,
        longBreakTime: 15,
        completedPomodoros: 1,
    },
    {
        id: 3,
        title: "Ejercicio",
        workTime: 20,
        breakTime: 1,
        longBreakTime: 5,
        completedPomodoros: 2,
    },
] 