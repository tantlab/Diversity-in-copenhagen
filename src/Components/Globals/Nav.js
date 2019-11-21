import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import './Nav.css'

export default class Nav extends React.Component {

    render() {
        return (
            <div id="nav">
                <div className="nav-sect left">
                    <NavLink to="/">L O G O</NavLink>
                </div>

                <div className="nav-sect center">
                    <NavLink to="/about" className="nav-el">About</NavLink>
                    <Route exact path="/">
                        <NavLink to="/map" className="nav-el">Explore the map</NavLink>
                    </Route>
                    <div style={{cursor: "pointer"}}>EN</div>
                    <div> | </div>
                    <div style={{cursor: "pointer"}}>DA</div>
                </div>
            </div>
        )
    }
}