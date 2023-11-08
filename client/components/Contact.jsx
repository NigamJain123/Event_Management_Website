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
            <form
              action="https://formspree.io/f/myyqvbwl"
              method="POST"
              className="form"
            >
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
                    name="Name"
                  />
                  <span>Name</span>
                </label>

                <label>
                  <input
                    required=""
                    placeholder=""
                    type="number"
                    className="input"
                    name="Mobile_no"
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
                  name="Email"
                />
                <span>Email</span>
              </label>

              <label>
                <input
                  required=""
                  placeholder=""
                  type="text"
                  className="input"
                  name="Subject"
                />
                <span>Subject</span>
              </label>
              <label>
                <textarea
                  rows={8}
                  required=""
                  placeholder="Your Message"
                  className="input"
                  name="Message"
                />
              </label>
              <button className="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
