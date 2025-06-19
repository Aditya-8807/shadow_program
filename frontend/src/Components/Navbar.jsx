import React from 'react';
import { Link } from "react-router-dom"
import "../css/Navbar.css"

export default function Navbar() {

    return (
        <nav className="navbar">
            <h2><Link to="/" className="navbar-brand">Shadow Program</Link></h2>
            <div className="nav-links">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/PastEventPage">Past Events</Link></li>
                    <li><Link to="/RegistrationPage">Register</Link></li>
                    <li><Link to="/TeamPage">Team</Link></li>
                </ul>
            </div>
        </nav>
    )
}