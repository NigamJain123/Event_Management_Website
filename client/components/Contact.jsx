import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <section className="contact">
        <div>
          <div className="contact-div1">
            <img
              src="../src/assets/contact_image.png"
              className="contact-image"
            />
            <h1>Address your uncertainties.</h1>
          </div>
          <div>
            <form className="form">
              <p className="contact-title">Contact us</p>
              <p className="message">
                Feel free to reach out to us for any queries.
              </p>
              <div className="flex">
                <label>
                  <input
                    required=""
                    placeholder=""
                    type="text"
                    className="input"
                  />
                  <span>Firstname</span>
                </label>

                <label>
                  <input
                    required=""
                    placeholder=""
                    type="number"
                    className="input"
                  />
                  <span>Mobile no.</span>
                </label>
              </div>

              <label>
                <input
                  required=""
                  placeholder=""
                  type="email"
                  className="input"
                />
                <span>Email</span>
              </label>

              <label>
                <input
                  required=""
                  placeholder=""
                  type="text"
                  className="input"
                />
                <span>Subject</span>
              </label>
              <label>
                <textarea
                  rows={8}
                  required=""
                  placeholder="Your Message"
                  className="input"
                />
              </label>
              <a href="mailto: napoleangaming06@gmail.com">
              <button className="submit">Submit</button>
              </a>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
