import { useState } from "react";
import EventCard from "../../components/event-card/EventCard";
import "./past-events.css";
import Carousel from "../../components/Image-slider/Carousel";
import Typewriter from "./Typewriter";

function PastEvent() {
  const [activeYear, setActiveYear] = useState("All");

  const events = [
    {
      id: 1,
      company: "WorldQuant",
      date: "Oct, 2025",
      photo: "/images/past_event/world_quant.jpg",
    },
    {
      id: 2,
      company: "FYND",
      date: "Oct, 2025",
      photo: "/images/past_event/fynd.jpg",
    },
    {
      id: 3,
      company: "Bajaj Auto",
      date: "Oct, 2025",
      photo: "/images/past_event/bajaj_auto.png",
    },
    {
      id: 4,
      company: "Deloitte",
      date: "Oct, 2025",
      photo: "/images/past_event/deloitte.png",
    },
    {
      id: 5,
      company: "SBI",
      date: "Jan, 2024",
      photo: "/images/past_event/sbi.jpg",
    },
    {
      id: 6,
      company: "L&T",
      date: "Apr, 2024",
      photo: "/images/past_event/lnt.png",
    },
    {
      id: 7,
      company: "NSE",
      date: "Oct, 2024",
      photo: "/images/past_event/nse.png",
    },
    {
      id: 8,
      company: "CSDL",
      date: "Nov, 2024",
      photo: "/images/past_event/cdsl.jpg",
    },
    {
      id: 9,
      company: "HUL",
      date: "Mar, 2023",
      photo: "/images/past_event/hul.png",
    },
    {
      id: 10,
      company: "BSE",
      date: "Oct, 2022",
      photo: "/images/past_event/bse.png",
    },
  ];

  const filterEventsByYear = (year) =>
    year === "All" ? events : events.filter((e) => e.date.includes(year));
  const years = [...new Set(events.map((e) => e.date.split(",")[1]))].sort(
    (a, b) => b - a
  );
  const filteredEvents = filterEventsByYear(activeYear);

  return (
    <main>
      <div className="title_container">
        <h1 className="page_title">Past Shadow Programs</h1>
        <Typewriter
          text="Take a look at our previous successful shadow programs and their impact"
          speed={35}
          className="page-info"
        />
      </div>

      <div className="body">
        {/* Year Tabs */}
        <div className="year-tabs-container">
          <button
            className={`year-tab ${activeYear === "All" ? "active" : ""}`}
            onClick={() => setActiveYear("All")}
          >
            All
          </button>
          {years.map((year) => (
            <div key={year}>
              <button
                className={`year-tab ${activeYear === year ? "active" : ""}`}
                onClick={() => setActiveYear(year)}
              >
                {year}
              </button>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="Events">
          <div className="events-grid">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel">
          <Carousel />
        </div>
      </div>
    </main>
  );
}

export default PastEvent;
