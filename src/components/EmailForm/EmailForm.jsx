import React from "react";

import "./EmailForm.css";

const EmailForm = ({ sendEmail, form }) => {
  return (
    <div className="email__form">
      <h1 className="email__title">Lets get in touch!</h1>
      <form ref={form} className="email__form-container" onSubmit={sendEmail}>
        <input
          type="text"
          className="email__form-container-info-input email__form-container-info-input-title"
          placeholder="Email Title"
          name="title"
          required
        />
        <div className="email__form-container-input">
          <input
            type="text"
            className="email__form-container-info-input"
            placeholder="First Name"
            name="first_name"
            required
          />
          <input
            type="text"
            className="email__form-container-info-input"
            placeholder="Last Name"
            name="last_name"
          />
          <input
            type="email"
            className="email__form-container-info-input"
            placeholder="Email"
            name="email"
            required
          />
          <input
            type="tel"
            className="email__form-container-info-input"
            placeholder="Phone number"
            name="phone"
          />
          <input type="hidden" name="time" />
        </div>
        <textarea
          className="email__form-contaniner-text-input"
          placeholder="Type your message here..."
          name="message"
          required
        />
        <button className="email__form-container-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
