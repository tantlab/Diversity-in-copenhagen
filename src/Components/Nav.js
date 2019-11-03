import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

class Nav extends React.Component {
    render () {
        return (
            <div id="nav">
                <div className="nav-sect left">
                    <Link to="/">L O G O</Link>
                </div>

                <div className="nav-sect center">
                    <div className="nav-el">
                        { this.props.cta === "true" ? <Link to="/map">Explore the Map</Link> : '' }
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav