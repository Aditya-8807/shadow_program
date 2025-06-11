import { Routes, Route, Link } from 'react-router-dom';

import HomePage from "./Pages/HomePage";
import PastEventPage from "./Pages/PastEventsPages";
import RegistrationPage from "./Pages/RegistrationPage";
import TeamPage from "./Pages/TeamPage";


export default function App() {
    
  return (
    <div className="app">
      <nav className="navbar">
        <h2><Link to="/">Shadow Program</Link></h2>     
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/PastEventPage">Past Events</Link></li>
          <li><Link to="/RegistrationPage">Register</Link></li>
          <li><Link to="/TeamPage">Team</Link></li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PastEventPage" element={<PastEventPage />} />
          <Route path="/RegistrationPage" element={<RegistrationPage />} />
          <Route path="/TeamPage" element={<TeamPage />} />
        </Routes>
      </div>
    </div>
  );
}
