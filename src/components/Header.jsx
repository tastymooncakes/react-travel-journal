import globeIcon from "../assets/Globe.svg"

export function Header() {
    return <header className="nav-header">
        <img className="nav-icon" src={globeIcon} alt="globe icon"/>
        <span className="nav-text">my travel journal.</span>
    </header>
};