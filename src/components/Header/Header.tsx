import { NavBar } from "../NavBar";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="bg__left"></div>
      <div className="bg__right"></div>
      <NavBar />
    </header>
  );
};
