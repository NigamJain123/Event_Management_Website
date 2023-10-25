import React from "react";
import Navbar from "./Navbar";
import Abouthome from "./Abouthome";
import Footer from "./Footer";
import { Home_cards, pricing } from "../src/data";
import About_headings from "./About-headings";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="container-left">
          <span>Welcome To</span>
          <h1>Event Spark</h1>
          <h2>Your Event, Our Expertise!</h2>
          <Link to="/login" className="home-button-link">
            <button className="btn">
              <span>Get Started</span>
            </button>
          </Link>
        </div>
        <div className="container-right">
          <img src="https://specialeventco.com/wp-content/uploads/corporate-event-planning-agency-raleigh.jpg"></img>
        </div>
      </div>

      <section className="home-cards-div">
        <div className="event-heading">
          <About_headings heading="Upcoming Events" />
        </div>
        <div className="event-cards">
          {Home_cards.map(({ id, img, front_text, back_text }) => {
            return (
              <div className="card" key={id}>
                <div className="card-inner">
                  <div className="card-front">
                    <img src={img} />
                    <h1>{front_text}</h1>
                  </div>
                  <div className="card-back">
                    <p>{back_text}</p>
                    <Link to="/events">
                      <button className="post-events-btn">
                        Go to Events Page
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Abouthome
        img1="https://bsc.cdn.ngo/media/images/Financial_graph.2e16d0ba.fill-350x375.jpg"
        img2="https://qph.cf2.quoracdn.net/main-qimg-c0dc49d706af362c68a692b9d7e169d8"
        title="Corporate Event Management Company in Mumbai - Trusted by Over 200+ Brand"
        para="We are nationally recognized event planning & organising company based in Mumbai. We started with a purpose to provide one stop solutions for all your Event-related worries.Event Spark company specialize in corporate events management, BTL activation."
      />

      <div>
        <div className="pricing-heading">
          <About_headings heading="Our Pricing" />
        </div>
        <div className="pricing-cards">
          {pricing.map((item) => {
            return (
              <div className="container" key={item.id}>
                <p className="title">{item.title}</p>
                <p className="price">
                  {item.price}
                  <span>/{item.duration}</span>
                </p>
                <p className="description">{item.desc}</p>
                <b className="offer">{item.offer}</b>
                <a className="subscribe-button" href="#">
                  Upgrade
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
