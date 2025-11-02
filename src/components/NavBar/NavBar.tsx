import "./NavBar.css";
import logoSvg from "../../assets/logo.svg";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <a className="logo__container" href="/">
        <img src={logoSvg} alt="Logo aprestar" className="logo__image" />
        <h1 className="logo__title">Aprestar</h1>
      </a>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#services">Inversionistas</a>
        </li>
        <li className="nav__item">
          <a href="#contact">Solicitantes</a>
        </li>
      </ul>
    </nav>
  );
};
