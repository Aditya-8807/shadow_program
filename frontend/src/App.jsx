import { Routes, Route } from 'react-router-dom';

import HomePage from "./Pages/home-page/home";
import PastEvent from "./Pages/past-events-page/past-events"
import RegistrationPage from "./Pages/registration-page/register";
import TeamPage from "./Pages/team-page/team"
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <ScrollToTop /> 
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PastEvent" element={<PastEvent/>} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/TeamPage" element={<TeamPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}