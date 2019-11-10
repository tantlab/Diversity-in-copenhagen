import React from 'react'
import { Link } from 'react-router-dom'

import CTAButton from './Globals/CTAButton'
import './Home.css'

const Home = () => {

    return (
        <div className="page">
            <div>
                <div className="section hero">
                    <h1>This is the Homepage's Hero Section</h1>
                    <Link to="/map" className="link">
                        <CTAButton title="Explore&nbsp;the&nbsp;Map"/>
                    </Link>
                </div>
                <div className="section hero">
                    <h1>This is Section 2</h1>
                </div>
            </div>
        </div>
    )
    
}

export default Home