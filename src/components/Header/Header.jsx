import { useState } from "react";

import "./Header.css";

import Contact from "../Contact/Contact";
import mylogo from "../../assets/logo/mylogo.png";

const Header = () => {
  const [showContact, setShowContact] = useState(false);
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
        <button
          className="header__button"
          type="button"
          onClick={() => setShowContact(!showContact)}
        >
          Contact
        </button>
      </div>
      {showContact && (
        <div className="header__contact">
          <Contact />
        </div>
      )}
    </div>
  );
};

export default Header;
