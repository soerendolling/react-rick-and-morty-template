import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="body-header">
      <Logo />
      <nav className="header-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </nav>
    </header>
  );
}
