import React from 'react'
import { Link } from 'react-router-dom'
import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'

import './Nav.css'

class Nav extends React.Component {

    // figure out how to use MobX to set state
    // @observable show = false
    // @computed set show(parameter) {
    //     return this.show = parameter
    // }

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
                    <Link to="/">L O G O</Link>
                </div>

                <div className="nav-sect center">
                    {this.checkPath() === false ? '' : (
                        <div className="nav-el">
                            <Link to="/map">Explore the Map</Link>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Nav