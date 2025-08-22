import { useState } from "react";

import "./Header.css";

import Contact from "../Contact/Contact";

import myLogoInverted from "../../assets/logo/invertLogo.png";
import TypingHeader from "../TypingHeader/TypingHeader";

const Header = ({ showEmailForm, setShowEmailForm }) => {
  const [showContact, setShowContact] = useState(false);

  const handleProjectsClick = () => {
    if (showEmailForm) {
      setShowEmailForm(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document
        .getElementById("projects")
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    setShowContact(!showContact);
  };
  return (
    <>
      <div className="header">
        <div
          className="header__logo-container"
          onClick={handleProjectsClick}
          style={{ cursor: "pointer" }}
        >
          <img
            src={myLogoInverted}
            alt="website logo"
            className="header__logo"
          />
        </div>
        <div className="header__title-container">
          <div className="header__title">I am</div>
        </div>
        <div className="header__buttons">
          <button className="header__button" onClick={handleProjectsClick}>
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
              handleProjectsClick={handleProjectsClick}
            />
          </div>
        )}
      </div>
      <div className="header__title-typing ">
        <TypingHeader />
      </div>
    </>
  );
};

export default Header;
