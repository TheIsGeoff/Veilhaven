import "./Header.scss";
import logo from "../../assets/images/logo/logoTextLarge.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="header__logo" />
    </header>
  );
}

export default Header;
