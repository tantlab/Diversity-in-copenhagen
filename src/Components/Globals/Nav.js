import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import LocalizedStrings from 'react-localization'

import './Nav.css'

let strings = new LocalizedStrings({
    en: {
        about: "About",
        map: "Explore the Map"
    },
    it: {
        about: "Sul progetto",
        map: "Esplora la mappa"
    },
    da: {
        about: "About",
        map: "Explore the Map"
    }
})

export default class Nav extends React.Component {
    render() {
        return (
            <div id="nav">
                <div className="nav-sect left">
                    <NavLink to="/">L O G O</NavLink>
                </div>

                <div className="nav-sect center">
                    <NavLink to="/about" className="nav-el">{strings.about}</NavLink>
                    <Route exact path="/">
                        <NavLink to="/map" className="nav-el">{strings.map}</NavLink>
                    </Route>
                </div>
            </div>
        )
    }
}