import React from 'react'

import './VenueBar.css'

export default class VenueBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    checkProps() {
        if (this.props.place) {
            return this.props.place
        } else return ''
    }

    render() {

        // let placeData = this.props.place ? this.props.place : ''
        // console.log(placeData);

        return (
            <div className={`sidebar-component ${this.props.showVenue ? 'open' : ''}`}>
                {this.props.children}
            </div>
        )
    }
}