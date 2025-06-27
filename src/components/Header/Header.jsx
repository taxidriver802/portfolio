import "./Header.css";

import mylogo from "../../assets/logo/mylogo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={mylogo} alt="website logo" className="header__logo" />
      <div className="header__title">Welcome to My Portfolio </div>
      <div className="header__buttons">
        <button
          className="header__button"
          onClick={() => {
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Projects
        </button>
        <button className="header__button" type="button">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
