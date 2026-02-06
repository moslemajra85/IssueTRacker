import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            title: 'Create Account',
            description: 'Sign up in seconds with your email and start managing issues immediately.'
        },
        {
            number: '02',
            title: 'Create Issues',
            description: 'Add issues with detailed descriptions, priorities, and assign to team members.'
        },
        {
            number: '03',
            title: 'Track Progress',
            description: 'Monitor status changes, updates, and comments in real-time dashboards.'
        },
        {
            number: '04',
            title: 'Deliver Results',
            description: 'Close resolved issues and celebrate your team achievements together.'
        }
    ]

    return (
        <section id="how-it-works" className="how-it-works">
            <div className="how-it-works-container">
                <div className="section-header">
                    <h2>How It Works</h2>
                    <p>Get started in 4 simple steps</p>
                </div>

                <div className="steps-container">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.number}>
                            <div className="step">
                                <div className="step-number">{step.number}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                            {index < steps.length - 1 && <div className="step-arrow">→</div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks