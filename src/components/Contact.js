import React from "react";
import "../styling/Contact.css";
import * as FiIcons from "react-icons/fi";
import * as SiIcons from "react-icons/si";
import * as AiIcons from "react-icons/ai";
function Contact() {
  return (
    <>
      <div className="contact-column">
        <div className="top-item">
          <h1>Connect with me!</h1>
        </div>
        <div className="top-item">
          <a
            className="github"
            href="https://github.com/JordyPena"
            target="_blank"
          >
            <FiIcons.FiGithub size={50}/>
          </a>

          <a
            className="linkedin"
            href="https://www.linkedin.com/in/jordypenadev/"
            target="_blank"
          >
            <SiIcons.SiLinkedin size={50}/>
          </a>

          <a
            className="email"
            href="mailto:jordypenamontes@gmail.com"
            target="_blank"
          >
            <AiIcons.AiOutlineMail size={50}/>
          </a>
        </div>

        <div className="bottom-item">
          <form
            className="contact-form"
            action="https://formspree.io/mgenndrq"
            method="POST"
          >
            <label for="user-name">Name</label>
            <input placeholder="Baby Yoda" className="user-name" type="text" name="name" required />
            <label for="email-input">Email</label>
            <input placeholder="chosenone@force.jedi" className="email-input" type="text" name="email" required />
            <label for="subject">Subject</label>
            <input  placeholder="Star wars website?" className="subject" type="text" name="email" required />
            <label for="message">Message</label>
            <textarea placeholder="Are you available for an interview?" className="message" name="message" required></textarea>
            <button className="contact-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
