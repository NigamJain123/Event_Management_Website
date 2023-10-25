import React from "react";
import { navlinks } from "../src/data";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-start">
      <div className="main-heading">
        <h3>Event Spark</h3>
      </div>
      <div className="main-nav">
        <ul className="nav-list">
          <Link to="/" className="nav-links">
            <li className="nav-elements">Home</li>
          </Link>
          <Link to="/events" className="nav-links">
            <li className="nav-elements">Events</li>
          </Link>
          <Link to="/services" className="nav-links">
            <li className="nav-elements">Services</li>
          </Link>
          <Link to="/about" className="nav-links">
            <li className="nav-elements">About Us</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
