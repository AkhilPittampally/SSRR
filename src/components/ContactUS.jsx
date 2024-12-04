import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import './components.css'

const ContactUs = () => {
  // State to manage form field values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic validation
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setFormMessage("Please fill in all fields.");
      return;
    }

    // Construct the mailto link
    const recipientEmail = "akhilpittampally@gmail.com";
    const subject = `Message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the mailto link in a new tab
    window.open(mailtoLink, "_blank");

    // Optionally, reset the form after opening the mail client
    setName("");
    setEmail("");
    setMessage("");
    setFormMessage("");
  };

  return (
    <div>
      <Header />
      <div className="contact-container">
        <h1 className="cuh">Contact Us</h1>
        <form id="contactForm" onSubmit={handleSubmit}>
          <label htmlFor="name" className="qw">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
          />

          <label htmlFor="email" className="qw">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />

          <label htmlFor="message" className="qw">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
          {formMessage && (
            <div id="formMessage" style={{ color: "red", marginTop: "10px" }}>
              {formMessage}
            </div>
          )}
        </form>
      </div>

      <div className="address-section">
        <h2>Our Address</h2>
        <p>Sri Sai Raj Residency,</p>
        <p>Old Malakpet,</p>
        <p>Hyderabad, Telangana, 500036.</p>
      </div>

      <div className="address-section">
        <h2>Currently there are no flats for sale!</h2>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
