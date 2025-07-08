import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <a
        className="contact__button"
        href="/portfolio/resume.pdf"
        download="JasonCox_Resume.pdf"
      >
        Resume
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
