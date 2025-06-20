import { useState } from 'react';
import EventCard from "../../components/event-card/EventCard"
import "./past-events.css"
import Carousel from "../../components/Image-slider/Carousel"

function PastEvent() {
    const [activeYear, setActiveYear] = useState('2025');
    const events = [
        {
            id: 1, company: "WorldQuant", date: "Oct,2025",
            logo: "",
            photo: "/images/WorldQuant.png",
            info: ""
        },
        {
            id: 2, company: "FYND", date: "Oct,2025",
            logo: "",
            photo: "",
            info: ""
        },
        {
            id: 3, company: "Bajaj Auto", date: "Oct,2025",
            logo: "",
            photo: "",
            info: ""
        },
        {
            id: 4, company: "Deloitte", date: "Oct,2025",
            logo: "",
            photo: "",
            info: ""
        },
        {
            id: 5, company: "SBI", date: "Jan,2024",
            logo: "",
            photo: "",
            info: ""
        },
        {
            id: 6, company: "L&T", date: "Apr,2024",
            logo: "",
            photo: "",
            info: ""
        },
        {
            id: 7, company: "NSE", date: "Oct,2024",
            logo: "",
            photo: "",
            info: ""
        },
        {
            id: 8, company: "CSDL", date: "Nov,2024",
            logo: "",
            photo: "",
            info: ""
        },
        {
            id: 9, company: "HUL", date: "Mar,2023",
            logo: "",
            photo: "",
            info: ""
        },
        {
            id: 10, company: "BSE", date: "Oct,2022",
            logo: "",
            photo: "",
            info: ""
        }



    ]

    // Filter events by year
    const filterEventsByYear = (year) => {
        return events.filter(event => event.date.includes(year));
    };

    // Get unique years from events
    const getUniqueYears = () => {
        const years = events.map(event => event.date.split(',')[1]);
        return [...new Set(years)].sort((a, b) => b - a);
    };

    const years = getUniqueYears();
    const filteredEvents = filterEventsByYear(activeYear);

    return <main>
        <div className='title_container'>
            <h1 className='page_title'>Past Shadow Events</h1>

            <h4 className='page-info'>Where mentorship meets momentum — see our programs in action.</h4>
        </div>
        <div className='body'>
            {/* Year Tabs */}
            <div className="year-tabs-container">
                {years.map(year => (
                    <button
                        key={year}
                        className={`year-tab ${activeYear === year ? 'active' : ''}`}
                        onClick={() => setActiveYear(year)}
                    >
                        {year}
                    </button>
                ))}
            </div>

            <div className="Events">
                <div className="events-grid">
                    {filteredEvents.map((event) => (
                        <EventCard event={event} key={event.id} />
                    ))}
                </div>
            </div>
            <div className='carousel'> <Carousel /></div>
        </div>

    </main >

}

export default PastEvent