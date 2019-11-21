import React from 'react'

import BarChartMulti from './Charts/BarChartMulti'
import BarChart from './Charts/BarChart'

import './VenueBar.css'

export default class VenueBar extends React.Component {

    checkProps() {
        if (this.props.data) {
            return this.props.data
        } else return ''
    }

    trimString(str, length = 24) {
        return str.length > length ? str.slice(0,length) + "..." : str
    }

    placeTypeColor(str) {
        switch (str) {
            case "RED":
                return "var(--r)"
            case "YELLOW":
                return "var(--y)"
            case "BLUE":
                return "var(--b)"
            case "DIVERSE":
                return "var(--g)"
            case "GRAY":
                return "white"
            default: return "white"
        }
    }

    colorFromHeader(str) {
        if (str === "var(--r)" || str === "var(--b)") {
            return "white"
        } else return "#282c34"
    }

    render() {

        let data = this.props.data ? this.props.data : ""
        let placeName = data ? this.trimString(data["Place"]) : "lorem"
        let placeType = data ? this.placeTypeColor(data["Place Type"]) : "lorem"
        let mapsLink = data ? data["Maps Link"] : "lorem"
        // let placeEff = data ? parseFloat(data["Place_effect"]).toFixed(2) : 0
        let divScore = data ? (Math.abs(data["DIV SCORE PLACE"] - 200) / 200 * 10).toFixed(1) : 'n.a.'
        let leastDiverseEvent = data ? this.trimString(data["Least Diverse Event"]) : "lorem"
        let mostDiverseEvent = data ? this.trimString(data["Most Diverse Event"]) : "lorem"

        return (
            <div className={`sidebar-component venue ${this.props.show ? "open" : ""}`}>
                <div className="text-field venue-title caption" style={{color: this.colorFromHeader(placeType)}}>
                    <a href={mapsLink} style={{color: "inherit"}} rel="noopener noreferrer" target="_blank">{placeName} ↗</a>
                </div>
                <div className="venue-header-background" 
                style={{ backgroundColor: this.props.show ? placeType : 'transparent' }}></div>
                <div className="venue-details data">
                    <div className="text-field value">
                        <span>{strings.venue.graph.title}</span>
                        <BarChart data={divScore} />
                    </div>
                    {/* <div className="text-field value">
                        <span>Place effect</span>
                        <span>{placeEff}</span>
                    </div> */}
                </div>
                <div className="venue-details graph">
                    <div className="text-field caption">{strings.venue.events.least}</div>
                    <div className="text-field content">{leastDiverseEvent}</div>
                    <BarChartMulti data={this.props.graphData.least} />
                </div>

                <div className="venue-details graph">
                    <div className="text-field caption">{strings.venue.events.most}</div>
                    <div className="text-field content">{mostDiverseEvent}</div>
                    <BarChartMulti data={this.props.graphData.most} />
                </div>


            </div>
        )
    }
}