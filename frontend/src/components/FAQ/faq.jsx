// FAQ.jsx
import React, { useEffect, useState } from "react";
import ScrollVelocity from "./ScrollVelocity";
import ShinyText from "./ShinyText"; // Import the ShinyText component
import "./faq.css";

const faqData = [
  {
    id: 1,
    question: "What is Shadow Programme?",
    answer:
      "The Shadow Program, run by the Student Alumni Relations Cell (SARC), IIT Bombay, is like a guided company tour where students get the chance to accompany alumni or professionals in their workplace. It allows participants to experience industry operations up close, explore different career paths, and understand workplace culture, offering learning that goes far beyond lectures and textbooks.",
  },
  {
    id: 2,
    question: "Who can apply for the program?",
    answer:
      "The program is open to all IIT Bombay students, though the number of participants is limited. Selections are based on FCFS basis, and in some cases, specific eligibility criteria announced before each program.",
  },
  {
    id: 3,
    question: "What do students gain from the program?",
    answer:
      "Students gain several valuable benefits from the program. They get significant industry exposure and go on workplace tours to see how a professional environment operates. The program also offers networking opportunities with IITB alumni and industry experts, which helps them build important connections. Finally, they gain clarity on their career choices through real-world experiences and receive mentorship and guidance from professionals.",
  },
  {
    id: 4,
    question: "Is there any cost involved?",
    answer:
      "No, the Shadow Program is completely free for IIT Bombay students. A sum of Rs. 200 is collected at the time of registration which is completely refunded after the program.",
  },
  {
    id: 5,
    question: " Who should I contact for queries?",
    answer:
      "For queries, you can reach out to the ASMP Team. Contact details are given in the team page.",
  },
  {
    id: 6,
    question: "Is prior industry knowledge required to participate?",
    answer:
      "No, prior industry knowledge is not required to participate in the Shadow Program. The program is designed to give students first-hand exposure to workplaces and help them learn directly from professionals. Curiosity, eagerness to learn, and openness to explore different career paths are all that’s needed.",
  },
];

const FAQ = () => {
  const [velocity] = useState(80);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Conditional text based on device
  const scrollTexts = isMobile
    ? ["Frequently Asked Ques.", "Frequently Asked Ques."]
    : ["Frequently Asked Questions", "Frequently Asked Questions"];

  // Adjust velocity and repetition for mobiles
  const scrollVelocity = isMobile ? velocity : velocity;
  const scrollCopies = isMobile ? 6 : 6;
  const scrollGap = isMobile ? "1rem" : "1rem";

  return (
    <section className="faq-section">
      {/* Animated title */}
      <ScrollVelocity
        texts={scrollTexts}
        velocity={scrollVelocity}
        className="custom-scroll-text"
        scrollerStyle={{ gap: scrollGap }}
        numCopies={scrollCopies}
      />

      <div className="faq-grid">
        {faqData.map((item) => (
          <div key={item.id} className="faq-item">
            <h3 className="faq-question">
              <ShinyText text={item.question} speed={5} />
            </h3>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
