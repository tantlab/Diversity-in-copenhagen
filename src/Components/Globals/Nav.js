import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import './Nav.css'

export default class Nav extends React.Component {

    render() {
        return (
            <div id="nav">
                <div className="nav-contents">
                    <NavLink to="/about" className="nav-el">About</NavLink>
                    <Route exact path="/">
                        <NavLink to="/map" className="nav-el">Explore the map</NavLink>
                    </Route>
                    <div className="nav-el language-sel">
                        <div className="language-sel lang" style={{ cursor: "pointer" }}>EN</div>
                        <div>|</div>
                        <div className="language-sel lang" style={{ cursor: "pointer" }}>DA</div>
                    </div>
                </div>
            </div>
        )
    }
}