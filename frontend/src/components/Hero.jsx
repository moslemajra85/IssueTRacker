import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Track Issues, Manage Projects,
                    <span className="highlight"> Deliver Excellence</span>
                </h1>
                <p className="hero-subtitle">
                    IssueTracker is the all-in-one platform to manage, track, and resolve issues with ease.
                    Keep your team synchronized and projects on track.
                </p>

                <div className="hero-buttons">
                    <button className="btn-primary btn-large">Start Free Trial</button>
                    <button className="btn-secondary btn-large">Watch Demo</button>
                </div>

                <div className="hero-image">
                    <div className="dashboard-preview">
                        <div className="mockup-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="mockup-content">
                            <div className="issue-item">
                                <div className="issue-status open">Open</div>
                                <div className="issue-text">Fix authentication bug</div>
                            </div>
                            <div className="issue-item">
                                <div className="issue-status progress">In Progress</div>
                                <div className="issue-text">Implement dark mode</div>
                            </div>
                            <div className="issue-item">
                                <div className="issue-status closed">Closed</div>
                                <div className="issue-text">Update documentation</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero