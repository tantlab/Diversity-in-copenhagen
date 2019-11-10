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

        let placeData = this.props.place ? this.props.place : ''
        // console.log(placeData);

        return (
            <div className="venue-bar" style={{ transform: `translateX(${this.props.isOpen ? 0 : -100}%)` }}>
                <div className="venue-details">
                    <div className="text-field">{placeData["Place"]}</div>
                    <div className="text-field">{parseFloat(placeData["DIV SCORE PLACE"]).toFixed(2)}</div>
                    <div className="text-field"><a href={placeData["Maps Link"]} rel="noopener noreferrer" target="_blank">Google Maps Link ↗</a></div>
                </div>
                <div className="venue-details">
                    <div className="text-field">Least Diverse Event</div>
                    <div className="text-field">{placeData["Least Diverse Event"]}</div>
                </div>
            </div>
        )
    }
}