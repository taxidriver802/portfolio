import { Download } from "lucide-react";

import "./Contact.css";

const Contact = ({ setShowEmailForm, setShowContact }) => {
  const handleEmailClick = () => {
    setShowEmailForm(true);
    setShowContact(false);
  };

  return (
    <div className="contact">
      <button
        type="button"
        onClick={handleEmailClick}
        className="contact__button"
      >
        Email Me
      </button>
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
