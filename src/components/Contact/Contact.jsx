import { Download } from "lucide-react";

import "./Contact.css";
import { useEffect, useRef } from "react";

const Contact = ({ showEmailForm, setShowEmailForm, setShowContact }) => {
  const contactRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (contactRef.current && !contactRef.current.contains(event.target)) {
      setShowContact(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleEmailClick = () => {
    setShowEmailForm(true);
    setShowContact(false);
  };

  return (
    <div className="contact" ref={contactRef}>
      {!showEmailForm ? (
        <button
          type="button"
          onClick={handleEmailClick}
          className="contact__button"
        >
          Email Me
        </button>
      ) : (
        <a href="/" className="contact__button">
          Home
        </a>
      )}
      <a
        className="contact__button"
        href="/portfolio/resume.pdf"
        download="JasonCox_Resume.pdf"
      >
        <Download height={13} width={13} /> Resume
      </a>
      <a
        className="contact__button"
        href="https://github.com/taxidriver802"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        className="contact__button"
        href="https://taxidriver802.github.io/portfolio/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Portfolio
      </a>
    </div>
  );
};

export default Contact;
