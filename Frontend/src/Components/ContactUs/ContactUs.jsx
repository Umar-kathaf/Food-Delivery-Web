import React from "react";
import "../ContactUs/ContactUs.css";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "74f3cf72-33b4-4082-9710-3adad618c7d3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            {" "}
            Are you a food lover? if your answer is yes, then this restaurant
            for you. We serve foods for reasonable prices. It's awesome, we
            know.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <div className="icons">
                <MdEmail />
              </div>
              <p>umarkamil1472001@gmail.com</p>
            </div>
            <div className="contact-detail">
              <div className="icons">
                <FaPhoneAlt />
              </div>
              <p>+91 8220172902</p>
            </div>
            <div className="contact-detail">
              <div className="icons">
                <IoLocation />
              </div>
              <p>Tamil Nadu, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" placeholder="Enter your message"></textarea>
          <button type="submit" className="Contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactUs;
