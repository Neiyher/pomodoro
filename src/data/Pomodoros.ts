import type { Pomodoro } from "../types/Pomodoro"

export const pomodoros: Pomodoro[] = [
    {
        id: 1,
        title: "Play Piano",

        workTime: 20 * 60,
        breakTime: 4 * 60,
        longBreakTime: 0,

        targetPomodoros: 2,
        completedPomodoros: 0,

        check: false,
    },
    {
        id: 2,
        title: "Programanding",

        workTime: 50 * 60,
        breakTime: 10 * 60,
        longBreakTime: 20 * 60,

        targetPomodoros: 2,
        completedPomodoros: 0,

        check: false,
    },
    {
        id: 3,
        title: "Ejercicio",

        workTime: 25 * 60,
        breakTime: 5 * 60,
        longBreakTime: 10 * 60,

        targetPomodoros: 4,
        completedPomodoros: 0,

        check: false,
    },
    {
        id: 4,
        title: "Lavar Platos",

        workTime: 20 * 60,
        breakTime: 0,
        longBreakTime: 0,

        targetPomodoros: 1,
        completedPomodoros: 0,

        check: false,
    },
];