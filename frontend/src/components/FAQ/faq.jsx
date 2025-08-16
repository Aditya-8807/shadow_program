import React from "react";
import Marquee from "react-fast-marquee";
import "./faq.css";

const marqueeText = "Frequently Asked Questions";

const faqData = [
  {
    id: 1,
    question: "What is Shadow Programme?",
    answer:
      "Shadow Programme is an initiative that provides mentorship and guidance to students, helping them develop their skills and prepare for their future careers through hands-on learning experiences.",
  },
  {
    id: 2,
    question: "How can I register for the programme?",
    answer:
      "You can register by clicking the 'Register' button in the navigation menu and filling out the registration form with your details and preferences.",
  },
  {
    id: 3,
    question: "What are the requirements to join?",
    answer:
      "We welcome students from all backgrounds. Basic requirements include being enrolled in a college/university and having enthusiasm to learn and grow.",
  },
  {
    id: 4,
    question: "Is there any fee for participation?",
    answer:
      "No, the Shadow Programme is completely free for all participants. We believe in making quality mentorship accessible to everyone.",
  },
  {
    id: 5,
    question: "How long does the programme last?",
    answer:
      "The programme typically runs for 3–6 months, depending on the track you choose and your learning pace.",
  },
  {
    id: 6,
    question: "What support will I receive?",
    answer:
      "You'll receive one-on-one mentorship, access to workshops, networking opportunities, and resources to help you achieve your goals.",
  },
];

const FAQ = () => (
  <section className="faq-section">
    {/* Marquee Banner */}
    <div className="marquee-wrapper">
      {/* Top Marquee */}
      <div className="marquee-container top-marquee">
        <Marquee
          direction="right"
          gradient={false}
          speed={35}
          style={{
            color: "#ffe4b2",
            fontWeight: 700,
            fontSize: "1.6em",
            padding: "0.5rem 0",
            letterSpacing: "0.04em",
            fontFamily: "inherit",
          }}
        >
          {marqueeText} &nbsp; {marqueeText} &nbsp; {marqueeText}
        </Marquee>
      </div>

      {/* Bottom Marquee */}
      <div className="marquee-container bottom-marquee">
        <Marquee
          direction="right"
          gradient={false}
          speed={35}
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "1.1em",
            padding: "0.25rem 0",
          }}
        >
          {marqueeText} &nbsp; {marqueeText}
        </Marquee>
      </div>
    </div>

    <div className="faq-grid">
      {faqData.map((item) => (
        <div key={item.id} className="faq-item">
          <h3 className="faq-question">{item.question}</h3>
          <p className="faq-answer">{item.answer}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FAQ;
