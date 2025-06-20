import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css'
import Carousel from '../components/Image-slider/Carousel';
import Card from '../components/home-card/card';
import Testimonials from '../components/Testimonials/testimonials';


export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div>
            <div className='block1'>
                <header className='ShadowTitle'>Shadow Program </header>
                <p className='info'>The Shadow Program, organized by the Student Alumni Relations Cell (SARC), is a one-day initiative that connects students with distinguished alumni in their workplaces. It offers firsthand exposure to real-world work environments, helping bridge the gap between academics and industry. Through professional interactions and workplace visits, students gain insights into career paths, company culture, and industry trends—beyond what textbooks offer.</p>
                <button className='b1' onClick={() => navigate('/RegistrationPage')}>Register Now </button>
                <button className='b2' onClick={() => navigate('/PastEventPage')}>Past Shadows</button>
            </div>
            <Card />
            <Carousel />
            <Testimonials />
        </div>
    );
}