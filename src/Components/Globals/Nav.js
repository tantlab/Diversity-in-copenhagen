import React from 'react'
import { Route, NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

import './Nav.css'

import { withGlobalState } from 'react-globally'
import strings from '../../_localization.js'

class Nav extends React.Component {

    render() {

        return (
            <div id="nav">
                <div className="nav-contents">

                    <NavLink to="/" className="nav-el">Home</NavLink>
                    <NavLink to="/about" className="nav-el">{strings.nav.about}</NavLink>
                    <NavLink to="/method" className="nav-el">{strings.nav.data}</NavLink>

                    <Route exact path="/">
                        {/* Should scroll down to map */}
                        <div style={{ cursor: "pointer" }} className="nav-el">
                            <Link activeClass="scrolling" to="mapScrollTarget" spy={true} smooth={true} offset={50} duration={1500}>
                                {strings.nav.map}
                            </Link>
                        </div>
                    </Route>

                    <div className="nav-el language-sel">
                        <div className="language-sel lang" style={{ cursor: "pointer" }} onClick={() => {
                            // localStorage.setItem('languagePreference', 'en')
                            window.location.reload(false)
                        }}>EN</div>
                        <div>|</div>
                        <div className="language-sel lang" style={{ cursor: "pointer" }} onClick={() => {
                            localStorage.setItem('languagePreference', 'da')
                            window.location.reload(false)
                        }}>DA</div>
                        {/* <div>|</div>
                        <div className="language-sel lang" style={{ cursor: "pointer" }} onClick={() => {
                            localStorage.setItem('languagePreference', 'it')
                            window.location.reload(false)
                        }}>_IT</div> */}

                    </div>
                </div>
            </div>
        )
    }
}

export default withGlobalState(Nav)