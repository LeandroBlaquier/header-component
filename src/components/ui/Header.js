import Imagen from "./Imagen";
import MenuItems from "./MenuItems";

import img from "../../assets/img/logo-fares.svg";
import "./Header.css";

const Header = () => {
  const menus = ["Home", "About Us", "Conatact Us"];
  return (
    <div className="bg-header">
      <div className="header-container">
        <Imagen img={img} type="logo" alt="Fares" />
        <MenuItems items={menus} direction="horizontal" />
      </div>
    </div>
  );
};

export default Header;
