import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

const Nav = () => {

    const Explore = () => {
        return (
            <div className="nav-el">
                <Link to="/map">
                    Explore the Map
                </Link>
            </div>
        )
    }

    return (
        <div id="nav">

            <div className="nav-sect left">
                <Link to="/">L O G O</Link>
            </div>

            <div className="nav-sect center">
                <Explore />
            </div>

        </div>
    )
}

export default Nav