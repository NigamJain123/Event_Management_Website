import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { event_cards } from "../src/data";

function Events() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbar />
      <section className="events">
        <div className="search-bar">
          <h1>Events</h1>
          <div className="events-search">
            <input
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              type="search"
              className="search_text"
            />
          </div>
          <div className="post-events">
            <p>Want to organise an Event?</p>
            <button className="post-events-btn">Post Event</button>
          </div>
        </div>

        <div className="event-card">
          {event_cards
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search.toLowerCase());
            })
            .map((val) => {
              return (
                <div key={val.id}>
                  <div className="event-img">
                    <img src={val.image} height={300} />
                  </div>
                  <div className="event-content">
                    <div>
                      <h2>{val.title}</h2>
                    </div>
                    <div>
                      <p className="event-content-desc">{val.desc}</p>
                      <p>
                        Organized By:<span> {val.organiser}</span>
                      </p>
                      <p>
                        Date:<span> {val.date}</span>
                      </p>
                      <p>Registration Fee: {val.fee}</p>
                      <button className="about-btn event-btn">Register</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Events;
