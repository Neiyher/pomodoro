import "./Header.css";
export default function Header() {
    return (
        <header className="header">
        <div className="header__left">
            <button className="header__menuButton">
            ☰
            </button>

            <h1 className="header__title">
            🍅 Pomodoro
            </h1>
        </div>

        <div className="header__right">
            <button className="header__settingsButton">
            ⚙️
            </button>
        </div>
        </header>
    );
}