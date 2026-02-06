import React, { useState } from 'react'
import './Navigation.css'

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <span className="logo-icon">⚡</span>
                    <h1>IssueTracker</h1>
                </div>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><button className="btn-signin">Sign In</button></li>
                    <li><button className="btn-primary">Get Started</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation