import "./Header.css";
import icon from '../../assets/icons/icon32px.png'

export default function Header() {
    return (
        <header className="header">
        <div className="header__left">
            <button className="header__menuButton">
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