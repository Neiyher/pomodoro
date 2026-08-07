export type Pomodoro = {
    id: number;
    title: string;

    workTime: number;
    breakTime: number;
    longBreakTime: number;

    targetPomodoros: number;

    completedPomodoros: number;

    check: boolean;
}
