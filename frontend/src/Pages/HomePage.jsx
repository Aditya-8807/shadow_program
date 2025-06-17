import { useNavigate } from 'react-router-dom';
import './HomePage.css'
import Card from '../components/eventcard/card'


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
        </div>
        

    );
}