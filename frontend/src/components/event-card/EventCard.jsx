import React from "react";
import TiltedCard from "./tilted";
import "./EventCard.css";
import { FaCalendarAlt } from "react-icons/fa";

function EventCard({ event }) {
  return (
    <div className="event-card-wrapper">
      <TiltedCard
        containerWidth="300px"
        containerHeight="380px"
        rotateAmplitude={15}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={false}
      >
        {/* Square Image */}
        <div className="event-image-section">
          <img
            src={event.photo}
            alt={event.company}
            className="event-card-image"
          />
        </div>

        {/* Text Section Below */}
        <div className="event-text-section">
          <h3 className="event-company-name">{event.company}</h3>
          <p className="event-date">
            <FaCalendarAlt className="event-date-icon" />
            {event.date}
          </p>
        </div>
      </TiltedCard>
    </div>
  );
}

export default EventCard;
