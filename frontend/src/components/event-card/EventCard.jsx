import React from 'react';
import "./EventCard.css"
import { FaCalendarAlt } from 'react-icons/fa';

function EventCard({ event }) {
    return (
        <div className="event-card">



            <div className="event-info">
                <div className="event-poster"> <img src={event.photo} />
                </div>
                <div className="info">
                    <p>{event.info}</p>
                </div>
            </div>
            <div className="event-header">
                <h3>{event.company}</h3>
                <p className="date">
                    <FaCalendarAlt className="icon" /> {event.date}
                </p>
            </div>

        </div>
    );
}

export default EventCard;