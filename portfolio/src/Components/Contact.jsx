import React from "react";
import "../Styles/contact.css";
import img from "../Assets/contact.jpg";

const Contact = () => {
      return (
            <section id="contact">
                  <div className="contact">
                        <div className="contact-form">
                              <h2>Hire Me</h2>
                              <p>I'm availble for Freelance work, Coonnect with me via phone: 098344314 of felipeasimbaya31@gmail.com </p>
                              <form action="">
                                    <input type="" placeholder="Your Name" required />
                                    <input type="email" name="" id="" placeholder="Your Email" required />
                                    <input type="" placeholder="Write Subject" />
                                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                                    <input type="submit" value="submit" className="send" />
                              </form>
                        </div>
                        <div className="contact-img">
                              <img src={img} alt="#" />
                        </div>
                  </div>
            </section>
      );
};

export default Contact;
