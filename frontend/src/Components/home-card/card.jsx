import React from 'react';
import './card.css';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';


const events = [
    {
        title: 'Deloitte',
        date: 'January 2024',
        image: '../images/Deloitte.png',
    },
    {
        title: 'L&T',
        date: 'June 2024',
        image: '../images/L&T.png',
    },
    {
        title: 'World Quant',
        date: 'October 2024',
        image: '../images/WorldQuant.png',
    },
];

export default function Card() {
    const navigate = useNavigate();

    return (
        <section className="container">
            <h1 className="title">Past Shadow Events</h1>
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
                                onError={(e) => (e.target.style.display = 'none')}
                            />
                        </div>
                        <div className="card-content" style={{ padding: '15px 20px' }}>
                            <h3>{event.title}</h3>
                            <p className="info1">
                                <FaCalendarAlt className="icon" /> {event.date}
                            </p>
                        </div>
                    </article>
                ))}
            </div>

            <button
                onClick={() => navigate('/PastEventPage')}
                className="view-button"
                aria-label="View All Past Events"
            >
                View All Past Events →
            </button>
        </section>
    );
}