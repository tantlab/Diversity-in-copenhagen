import React from 'react'
import { Link } from 'react-router-dom'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'

import './Nav.css'

@observer class Nav extends React.Component {

    // figure out how to use MobX to set state
    // @observable show = false
    // @computed set show(parameter) {
    //     return this.show = parameter
    // }

    render () {
        return (
            <div id="nav">
                <div className="nav-sect left">
                    <Link to="/">L O G O</Link>
                </div>

                <div className="nav-sect center">
                    <div className="nav-el">
                        <Link to="/map">Explore the Map</Link>
                        {/* { this.props.cta === "true" ? <Link to="/map">Explore the Map</Link> : '' } */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav