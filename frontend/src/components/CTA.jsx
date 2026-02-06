import React from 'react'
import './CTA.css'

const CTA = () => {
    return (
        <section className="cta">
            <div className="cta-container">
                <h2>Ready to Streamline Your Workflow?</h2>
                <p>Join thousands of teams already using IssueTracker to manage their projects</p>
                <button className="btn-primary btn-large">Get Started Free</button>
                <p className="cta-footer">No credit card required • 14-day free trial • Cancel anytime</p>
            </div>
        </section>
    )
}

export default CTA