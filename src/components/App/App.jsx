import React, { useRef, useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const now = new Date().toISOString();
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
          toast.success("Email sent!");
          console.log("Message sent:", result);
          form.current.reset();
          setShowEmailForm(false);
        },
        (error) => {
          toast.error("Failed to send email, please try again.");
          console.log("Error Message:", error);
        }
      );
  };

  return (
    <div>
      <Header
        showEmailForm={showEmailForm}
        setShowEmailForm={setShowEmailForm}
      />
      {showEmailForm ? (
        <EmailForm sendEmail={sendEmail} form={form} />
      ) : (
        <>
          <Home showEmailForm={showEmailForm} />
          <section id="projects">
            <Projects />
          </section>
        </>
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
