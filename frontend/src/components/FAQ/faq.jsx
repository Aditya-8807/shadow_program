
import React from 'react';
import { useState } from 'react';
import './faq.css';
import { useNavigate } from 'react-router-dom';
const FAQ = ({ isOpen, onClose }) => {
    const [openItems, setOpenItems] = useState({});

    const navigate = useNavigate();
    const faqData = [
        {
            id: 1,
            question: "What is Shadow Programme?",
            answer: "Shadow Programme is an initiative that provides mentorship and guidance to students, helping them develop their skills and prepare for their future careers through hands-on learning experiences."
        },
        {
            id: 2,
            question: "How can I register for the programme?",
            answer: "You can register by clicking the 'Register' button in the navigation menu and filling out the registration form with your details and preferences."
        },
        {
            id: 3,
            question: "What are the requirements to join?",
            answer: "We welcome students from all backgrounds. Basic requirements include being enrolled in a college/university and having enthusiasm to learn and grow."
        },
        {
            id: 4,
            question: "Is there any fee for participation?",
            answer: "No, the Shadow Programme is completely free for all participants. We believe in making quality mentorship accessible to everyone."
        },
        {
            id: 5,
            question: "How long does the programme last?",
            answer: "The programme typically runs for 3-6 months, depending on the track you choose and your learning pace."
        },
        {
            id: 6,
            question: "What support will I receive?",
            answer: "You'll receive one-on-one mentorship, access to workshops, networking opportunities, and resources to help you achieve your goals."
        }
    ];

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    if (!isOpen) return null;


    return (
        <div className="faq-overlay" onClick={onClose}>
            <div className="faq-modal" onClick={(e) => e.stopPropagation()}>
                <div className="faq-header">
                    <h2>Frequently Asked Questions</h2>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <div className="faq-content">
                    {faqData.map((item) => (
                        <div key={item.id} className={`faq-item ${openItems[item.id] ? 'open' : ''}`}>
                            <button
                                className="faq-question"
                                onClick={() => toggleItem(item.id)}
                                aria-expanded={openItems[item.id]}
                            >
                                <span>{item.question}</span>
                                <span className={`faq-icon ${openItems[item.id] ? 'open' : ''}`}>
                                    {openItems[item.id] ? '−' : '+'}
                                </span>
                            </button>

                            {openItems[item.id] && (
                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="faq-footer">

                    <button className="b1" onClick={() => {
                        onClose();
                        navigate('/RegistrationPage');
                    }}>
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FAQ;