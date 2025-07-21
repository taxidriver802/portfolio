import { useState } from "react";

import "./Header.css";

import Contact from "../Contact/Contact";
import mylogo from "../../assets/logo/mylogo.png";

const Header = ({ showEmailForm, setShowEmailForm }) => {
  const [showContact, setShowContact] = useState(false);

  const handleContactClick = () => {
    setShowContact(!showContact);
  };
  return (
    <div className="header">
      <a href="/" className="header__logo-container">
        <img src={mylogo} alt="website logo" className="header__logo" />
      </a>
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
          onClick={handleContactClick}
        >
          Contact
        </button>
      </div>
      {showContact && (
        <div className="header__contact">
          <Contact
            showEmailForm={showEmailForm}
            setShowEmailForm={setShowEmailForm}
            setShowContact={setShowContact}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
