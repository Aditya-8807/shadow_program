import React from "react";
import "./EventCard.css";
import { FaCalendarAlt } from "react-icons/fa";

function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-poster">
        <img src={event.photo} alt={event.company} />
      </div>
      <div className="event-details">
        <h3 className="company-name">{event.company}</h3>
        <p className="date">
          <FaCalendarAlt className="icon" />
          {event.date}
        </p>
        {event.info && (
          <div className="info">
            <p>{event.info}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EventCard;
