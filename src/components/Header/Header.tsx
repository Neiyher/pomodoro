import "./Header.css";
import icon from '../../assets/icons/icon32px.png'

type HeaderProps = {
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setIsSidebarOpen }: HeaderProps) {
    return (
        <header className="header">
            <div className="header__left">
                <button
                    className="header__menuButton"
                    onClick={() => setIsSidebarOpen(prev => !prev)}
                >
                    ☰
                </button>

                <h1 className="header__title">ChronoQuest</h1>

                <img className="icon" src={icon} alt="" />
            </div>

            <div className="header__right">
                <button className="header__settingsButton">
                    ⚙️
                </button>
            </div>
        </header>
    );
}