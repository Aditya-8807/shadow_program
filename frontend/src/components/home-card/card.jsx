import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";

const events = [
  {
    title: "Deloitte",
    date: "January 2024",
    image: "/images/past_event/deloitte.png",
  },
  {
    title: "L&T",
    date: "June 2024",
    image: "/images/past_event/lnt.png",
  },
  {
    title: "World Quant",
    date: "October 2024",
    image: "/images/past_event/world_quant.jpg",
  },
];

export default function Card() {
  const navigate = useNavigate();

  return (
    <section className="container">
      <h2 className="title">Past Shadow Programs</h2>
      <p className="subtitle">
        Take a look at our previous successful shadow programs and their impact.
      </p>

      <div className="grid">
        {events.map((event, index) => (
          <article className="home-card" key={index}>
            <div className="card-image">
              <img
                src={event.image}
                alt={event.title}
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
            <div className="card-content">
              <div className="title-date-row">
                <h3>{event.title}</h3>
                <p className="info1">
                  <FaCalendarAlt className="icon" /> {event.date}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        onClick={() => navigate("/PastEvent")}
        className="view-button"
        aria-label="View All Past Events"
      >
        View All Past Events →
      </button>
    </section>
  );
}
