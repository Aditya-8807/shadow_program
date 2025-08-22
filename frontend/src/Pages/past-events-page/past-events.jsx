import { useState } from "react";
import { motion } from "framer-motion";
import EventCard from "../../components/event-card/EventCard";
import "./past-events.css";
import Carousel from "../../components/Image-slider/Carousel";

function PastEvent() {
  const [activeYear, setActiveYear] = useState("All");

  const events = [
    {
      id: 1,
      company: "WorldQuant",
      date: "Oct,2025",
      photo: "/images/past_event/world_quant.jpg",
      info: "",
    },
    {
      id: 2,
      company: "FYND",
      date: "Oct,2025",
      photo: "/images/past_event/fynd.jpg",
      info: "",
    },
    {
      id: 3,
      company: "Bajaj Auto",
      date: "Oct,2025",
      photo: "/images/past_event/bajaj_auto.png",
      info: "",
    },
    {
      id: 4,
      company: "Deloitte",
      date: "Oct,2025",
      photo: "/images/past_event/deloitte.png",
      info: "",
    },
    {
      id: 5,
      company: "SBI",
      date: "Jan,2024",
      photo: "/images/past_event/sbi.jpg",
      info: "",
    },
    {
      id: 6,
      company: "L&T",
      date: "Apr,2024",
      photo: "/images/past_event/lnt.png",
      info: "",
    },
    {
      id: 7,
      company: "NSE",
      date: "Oct,2024",
      photo: "/images/past_event/nse.png",
      info: "",
    },
    {
      id: 8,
      company: "CSDL",
      date: "Nov,2024",
      photo: "/images/past_event/cdsl.jpg",
      info: "",
    },
    {
      id: 9,
      company: "HUL",
      date: "Mar,2023",
      photo: "/images/past_event/hul.png",
      info: "",
    },
    {
      id: 10,
      company: "BSE",
      date: "Oct,2022",
      photo: "/images/past_event/bse.png",
      info: "",
    },
  ];

  // Filter events by year
  const filterEventsByYear = (year) => {
    if (year === "All") return events;
    return events.filter((event) => event.date.includes(year));
  };

  // Get unique years
  const getUniqueYears = () => {
    const years = events.map((event) => event.date.split(",")[1]);
    return [...new Set(years)].sort((a, b) => b - a);
  };

  const years = getUniqueYears();
  const filteredEvents = filterEventsByYear(activeYear);

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, filter: "blur(6px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        type: "spring",
        stiffness: 120,
        damping: 20,
      },
    }),
  };

  return (
    <main>
      <div className="title_container">
        <h1 className="page_title">Past Shadow Programs</h1>
        <h4 className="page-info">
          Take a look at our previous successful shadow programs and their
          impact
        </h4>
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

        {/* Events with Scroll Animation */}
        <div className="Events">
          <div className="events-grid">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={index}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0px 12px 25px rgba(0,0,0,0.25)",
                  transition: { type: "spring", stiffness: 200, damping: 12 },
                }}
              >
                <EventCard event={event} />
              </motion.div>
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
