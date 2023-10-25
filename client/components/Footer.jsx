import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";

function Footer() {
  return (
    <section className="footer-start">
      <div className="first-div">
        <h2>Event Spark</h2>
        <p>
          Event Spark is a leading corporate event management company operating
          nationally from Mumbai, Delhi, Bangalore, Gurgaon, Pune and other
          cities in India.
        </p>
        <ul>
          <li className="facebook">
            <Facebook />
          </li>
          <li className="twitter">
            <Twitter />
          </li>
          <li className="instagram">
            <Instagram />
          </li>
          <li className="linkedin">
            <Linkedin />
          </li>
        </ul>
        <p>
          <span>
            <Phone className="phone-icon" />
          </span>
          +91 9896485512
        </p>
        <p>
          <span>
            <Mail className="mail-icon" />
          </span>
          info@eventspark.com
        </p>
      </div>
      <div className="second-div">
        <h4>Solutions</h4>
        <ul>
          <li>Marketing</li>
          <li>Analytics</li>
          <li>Insights</li>
        </ul>
      </div>
      <div className="third-div">
        <h4>Support</h4>
        <ul>
          <li>Pricing</li>
          <li>Policy</li>
          <li>Guides</li>
        </ul>
      </div>
      <div className="fourth-div">
        <h4>Company</h4>
        <ul>
          <li>Events</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
