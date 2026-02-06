import React from 'react'
import './Features.css'

const Features = () => {
    const features = [
        {
            id: 1,
            icon: '📊',
            title: 'Real-time Tracking',
            description: 'Monitor issue status in real-time with instant updates across your team.'
        },
        {
            id: 2,
            icon: '👥',
            title: 'Team Collaboration',
            description: 'Assign issues, add comments, and collaborate seamlessly with your team members.'
        },
        {
            id: 3,
            icon: '🔐',
            title: 'Secure & Reliable',
            description: 'Enterprise-grade security with JWT authentication and encrypted data storage.'
        },
        {
            id: 4,
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Optimized performance ensuring quick load times and smooth user experience.'
        },
        {
            id: 5,
            icon: '📱',
            title: 'Responsive Design',
            description: 'Works perfectly on desktop, tablet, and mobile devices.'
        },
        {
            id: 6,
            icon: '🔔',
            title: 'Smart Notifications',
            description: 'Get notified about issue updates and team activities instantly.'
        }
    ]

    return (
        <section id="features" className="features">
            <div className="features-container">
                <div className="section-header">
                    <h2>Powerful Features</h2>
                    <p>Everything you need to manage issues effectively</p>
                </div>

                <div className="features-grid">
                    {features.map(feature => (
                        <div key={feature.id} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features