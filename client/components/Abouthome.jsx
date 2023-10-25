import React from "react";
import { Link } from "react-router-dom";

function Abouthome({title, img1, img2, subtitle, para}){
    return (
      <section className="about-home">
        <div className="about-home-img">
          <img src={img1} className="about-home-img1" />
          <img src={img2} className="about-home-img2" />
        </div>
        <div className="about-home-content">
          <p className="p1">
            <span>{title}</span>
            <br />
            {subtitle}
          </p>
          <p className="p2">
            Successfully Completed <span>7,000+</span> Projects!
          </p>
          <p className="p3">
            {para}
          </p>
          <Link to="/contact">
          <button className="about-btn">Contact Us➜</button>
          </Link>
        </div>
      </section>
    );
}

export default Abouthome;