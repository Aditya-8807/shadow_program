import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import PastEventPage from "./Pages/PastEventPage";
import RegistrationPage from "./Pages/RegistrationPage";
import TeamPage from "./Pages/TeamPage";
import Navbar from "./components/Navbar"

export default function App() {

  return (

    <div className="app">
      < Navbar />
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
