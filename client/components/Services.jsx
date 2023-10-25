import React from "react";
import { service_plan, services_events } from "../src/data";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Services() {
  return (
    <>
      <Navbar />
      <section className="services">
        <div className="services-hero">
          <div className="services-content">
            <img src="../src/assets/service_hero_logo.png" />
            <p>Our Services</p>
            <h1>Experience the Difference!</h1>
          </div>
        </div>
      </section>

      <section className="services-event">
        <div className="services-event-container">
          <div className="services-event-grid">
            {services_events.map(({ id, url, name, desc }) => {
              return (
                <div key={id} className="services-event-card">
                  <img src={url} alt={name} />
                  <h1>{name}</h1>
                  <p>{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="services-plan">
        <div className="services-plan1">
          <div className="services-plan1-content">
            <h1>
              Our comprehensive event planning streamlines every aspect of your
              event management, providing an all-in-one solution.
            </h1>
            <p>
              Whether you're organizing small gatherings, large conferences, or
              internal meetings, our versatile toolset adapts to your unique
              event needs,{" "}
              <span>no matter the stage of your planning process.</span>
            </p>
          </div>
          <div className="services-plan1-img">
            <img src="../src/assets/services_wheel.jpg" />
          </div>
        </div>
        <div className="services-plan2">
          {service_plan.map(({ id, img, title, desc, l1, l2, l3, l4 }) => {
            return (
              <div key={id} className="services-plan2-card">
                <img src={img} />
                <h1>{title}</h1>
                <p>{desc}</p>
                <ul>
                  <li>{l1}</li>
                  <li>{l2}</li>
                  <li>{l3}</li>
                  <li>{l4}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Services;
