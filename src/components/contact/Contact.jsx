import React, { useState } from "react";
import "./Contact.css";
import "./ContactTab.css";
import "./ContactMobile.css";

import emailjs from "emailjs-com";

export default function Contact() {
  const [input, setInput] = useState({});
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vu41lwc",
        "template_knhi0bm",
        e.target,
        "user_HhXrljyOf0MKwKMDZp6SE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact" id="section-contact">
      <h1>Thanks for reaching out. How can I help you today?</h1>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="input__name"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            required
            className="input__email"
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            name="message"
            required
            className="input__message"
            onChange={handleChange}
          ></textarea>
        </div>

        <input type="submit" className="form__submit" value="Submit" />
      </form>
    </div>
  );
}
