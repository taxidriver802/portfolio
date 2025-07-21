import React, { useRef, useState } from "react";

import emailjs from "emailjs-com";

import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import EmailForm from "../EmailForm/EmailForm";

const App = () => {
  const [showEmailForm, setShowEmailForm] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const formElement = form.current;
    const now = new Date().toLocaleString();
    formElement.elements["time"].value = now;

    emailjs
      .sendForm(
        "service_tlnfhw1",
        "template_xzg61mb",
        formElement,
        "rELlreHleWF41W1Ff"
      )
      .then(
        (result) => {
          alert("Message sent!");
          console.log("Message sent:", result);
          form.current.reset();
          setShowEmailForm(false);
        },
        (error) => {
          alert("Failed to send message, please try again later.");
          console.log("Error Message:", error);
        }
      );
  };

  if (showEmailForm === true) {
    return (
      <div>
        <Header
          showEmailForm={showEmailForm}
          setShowEmailForm={setShowEmailForm}
        />
        <EmailForm sendEmail={sendEmail} form={form} />
      </div>
    );
  }
  return (
    <div>
      <Header
        showEmailForm={showEmailForm}
        setShowEmailForm={setShowEmailForm}
      />
      <Home showEmailForm={showEmailForm} />
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default App;
