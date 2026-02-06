import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>IssueTracker</h4>
                    <p>The modern issue tracking platform for teams.</p>
                </div>

                <div className="footer-section">
                    <h5>Product</h5>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#security">Security</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h5>Company</h5>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#careers">Careers</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 IssueTracker. All rights reserved.</p>
                <div className="social-links">
                    <a href="#twitter">Twitter</a>
                    <a href="#github">GitHub</a>
                    <a href="#linkedin">LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer