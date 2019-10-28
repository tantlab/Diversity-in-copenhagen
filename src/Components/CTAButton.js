import React from 'react'
import './CTAButton.css'

const CTAButton = (props) => {
    return (
        <div className="cta-btn">
            <span> { props.title } </span>
        </div>
    )
}

export default CTAButton