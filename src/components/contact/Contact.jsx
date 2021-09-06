import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h1>Thanks for reaching out. How can I help you today?</h1>
      <form className="contact__form">
        <div className="input-group">
          <label for="name">Name</label>
          <input type="text" id="name" className="input__name" />
        </div>
        <div className="input-group">
          <label for="email">Email</label>
          <input type="text" id="email" className="input__email" />
        </div>
        <div className="input-group">
          <label for="message">Message</label>
          <textarea
            type="text"
            id="message"
            className="input__message"
          ></textarea>
        </div>

        <button type="submit" className="form__submit">
          Submit
        </button>
      </form>
    </div>
  );
}
