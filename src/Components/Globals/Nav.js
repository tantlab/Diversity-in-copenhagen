import React from 'react'
import { Route, NavLink } from 'react-router-dom'

import './Nav.css'

import { withGlobalState } from 'react-globally'
import strings from '../../_localization.js'

class Nav extends React.Component {

    render() {

        return (
            <div id="nav">
                <div className="nav-contents">
                    <NavLink to="/about" className="nav-el">{strings.nav.about}</NavLink>
                    <Route exact path="/">
                        <NavLink to="/map" className="nav-el">{strings.nav.map}</NavLink>
                    </Route>

                    <div className="nav-el language-sel">
                        <div className="language-sel lang" style={{ cursor: "pointer" }} onClick={() => {
                            localStorage.setItem('languagePreference', 'en')
                            window.location.reload(false)
                        }}>EN</div>
                        <div>|</div>
                        <div className="language-sel lang" style={{ cursor: "pointer" }} onClick={() => {
                            // strings.setLanguage('da')
                            // this.forceUpdate()
                        }}>DA</div>
                        <div>|</div>
                        <div className="language-sel lang" style={{ cursor: "pointer" }} onClick={() => {
                            localStorage.setItem('languagePreference', 'it')
                            window.location.reload(false)
                        }}>_IT</div>

                    </div>
                </div>
            </div>
        )
    }
}

export default withGlobalState(Nav)