import type { Pomodoro } from "../types/Pomodoro"

export const pomodoros: Pomodoro[] = [
    {
        id: 1,
        title: "Estudiar",

        workTime: 25 * 60,
        breakTime: 5 * 60,
        longBreakTime: 15,

        targetPomodoros: 4,
        completedPomodoros: 0,

        check: false,
    },
    {
        id: 2,
        title: "Gym",

        workTime: 15 * 60,
        breakTime: 2 * 60,
        longBreakTime: 5 * 60,

        targetPomodoros: 3,
        completedPomodoros: 0,

        check: false,
    },
    {
        id: 3,
        title: "Limpiar casa",

        workTime: 20 * 60,
        breakTime: 0 * 60,
        longBreakTime: 0 * 60,

        targetPomodoros: 1,
        completedPomodoros: 0,

        check: false,
    },
];