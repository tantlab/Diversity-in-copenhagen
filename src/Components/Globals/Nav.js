import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import './Nav.css'

class Nav extends React.Component {

    constructor(props) {
        super(props)
        this.state = ({
            cta: false
        })
    }

    checkPath() {
        const path = window.location.pathname !== "/map" ? true : false
        return path
    }

    render() {
        return (
            <div id="nav">
                <div className="nav-sect left">
                    <NavLink to="/">L O G O</NavLink>
                </div>

                <div className="nav-sect center">
                        <NavLink to="/about" className="nav-el">About</NavLink>
                    <Route exact path="/">
                        <NavLink to="/map" className="nav-el">Explore the Map</NavLink>
                    </Route>
                </div>
            </div>
        )
    }
}

export default Nav