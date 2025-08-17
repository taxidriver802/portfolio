import { Download } from "lucide-react";

import "./Contact.css";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const Contact = ({
  showEmailForm,
  setShowEmailForm,
  setShowContact,
  handleProjectsClick,
}) => {
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

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/portfolio/resume.pdf";
    link.download = "JasonCox_Resume.pdf";
    link.click();

    toast.success("Resume downloaded!", {
      position: "top-left",
      autoClose: 3000,
    });
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
        <div
          className="contact__button"
          onClick={handleProjectsClick}
          style={{ cursor: "pointer" }}
        >
          Home
        </div>
      )}
      <button className="contact__button" onClick={handleResumeDownload}>
        <Download height={13} width={13} /> Resume
      </button>
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
