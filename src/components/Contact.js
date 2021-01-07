import React from "react";
import "../styling/Contact.css";
import * as FiIcons from "react-icons/fi";
import * as SiIcons from "react-icons/si";
import * as AiIcons from "react-icons/ai"
function Contact() {
  return (
    <>
      <div className="contact-column">
        <div className="top-item">
          <h1>
            Connect with me!
          </h1>
        </div>
        <div className="top-item">
          <a className="github" href="https://github.com/JordyPena"  target="_blank">
            <FiIcons.FiGithub />
          </a>

          <a
            className="linkedin"
            href="https://www.linkedin.com/in/jordypenadev/"
            target="_blank"
          >
            <SiIcons.SiLinkedin />
          </a>

          <a
            className="email"
            href="mailto:jordypenamontes@gmail.com"
            target="_blank"
          >
            <AiIcons.AiOutlineMail />
          </a>
        </div>

        <div className="bottom-item">
          <form
            className="contact-form"
            action="https://formspree.io/mgenndrq"
            method="POST"
          >
            <label for="user-name">Name</label>
            <input className="user-name" type="text" name="name" required />
            <label for="email-input">Email</label>
            <input className="email-input" type="text" name="email" required />
            <label for="subject">Subject</label>
            <input className="subject" type="text" name="email" required />
            <label for="message">Message:</label>
            <textarea className="message" name="message" required></textarea>
            <button className="contact-button"type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
