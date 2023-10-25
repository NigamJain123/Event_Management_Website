import React from "react";
import client_apple from "../src/assets/client_apple.jpg";
import client_google from "../src/assets/client_google.png";
import client_jio from "../src/assets/client_jio.jpg";
import client_tesla from "../src/assets/client_tesla.png";
import client_tata from "../src/assets/client_tata.jpg";
import Marquee from "react-fast-marquee";
import { choose_cards, projects } from "../src/data";
import About_headings from "./About-headings";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Abouthome from "./Abouthome";
import img1 from "../src/assets/about-img1.jpg";
import img2 from "../src/assets/about-img2.jpg";

function About() {
  return (
    <>
      <Navbar />

      {/* HOME */}

      <Abouthome
        title="WHO WE ARE"
        img1={img1}
        img2={img2}
        subtitle="We love to create,design and produce awesome event!"
        para="Event Sparks started with a purpose to provide ‘ONE STOP
            SOLUTIONS’ for all your Marketing- related worries. customer or
            staff, Craftworld Events assures to handle every part of it with
            finesse. We step in right at the stage of Idea Generation to its
            flawless execution."
      />

      {/* CHOOSE */}

      <section className="choose">
        <About_headings
          heading="Why Choose Us?"
          sub_heading="Long-term vision and grow your business"
        />
        <div className="choose-cards-container">
          {choose_cards.map((card) => {
            return (
              <div className="choose-cards" key={card.id}>
                <p className="about-card-count">{card.count}+</p>
                <p className="about-card-skill">{card.skill}</p>
                <p className="about-card-content">{card.content}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLIENTS */}

      <section className="clients">
        <About_headings heading="Clients" sub_heading="We work with" />
        <div className="client-images-container">
          <Marquee pauseOnHover>
            <div>
              <img src={client_apple} className="client-images" />
            </div>
            <div>
              <img src={client_google} className="client-images" />
            </div>
            <div>
              <img src={client_jio} className="client-images" />
            </div>
            <div>
              <img src={client_tesla} className="client-images" />
            </div>
            <div>
              <img src={client_tata} className="client-images" />
            </div>
          </Marquee>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="projects">
        <About_headings
          heading="Projects"
          sub_heading="Our work speaks for itself"
        />
        <div className="project-container">
          {projects.map(({ id, url }) => {
            return (
              <div
                className="project-card"
                style={{ backgroundImage: `url(${url})` }}
                key={id}
              ></div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
