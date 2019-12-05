import React, { Component } from 'react'

import BarChartMulti from './Charts/BarChartMulti'
import SliderChart from './Charts/SliderChart'
import strings from '../../_localization.js'

export default class SidebarPlaceCrowd extends Component {

    // total crowd
    eventPercentages(array) {
        if (array.length > 0) {
            let tot = 0
            array.forEach(element => {
                tot += element
            })
            const percs = array.map(el => {
                return el / tot * 100
            })
            return percs
        } else return [0, 0, 0]
    }

    render() {

        let data =
            this.props.data ? this.props.data : ''

        let venue =
            data.venue.lastSelected !== null
                ? data.venue.lastSelected
                : ''

        let totalPercents = [
            venue["Red crowd"], venue["Yellow crowd"], venue["Blue crowd"], venue["Total crowd"]
        ]

        let percents = [
            venue["Red percent"], venue["Yellow percent"], venue["Blue percent"]
        ]

        let charge = !isNaN(Math.round(venue["Political Charge"])) ? Math.round(venue["Political Charge"]) : 0
        let score = !isNaN(Math.round(venue["DIV SCORE PLACE"])) ? Math.round(venue["DIV SCORE PLACE"]) : 0

        return (
            <div className="crowd-info">

                <div className="sidebar-section">
                    <div className="sidebar-label">{strings.map.sidebar.venue.graphs.overall}</div>
                    <BarChartMulti data={this.eventPercentages(totalPercents)} />
                </div>
                <div className="sidebar-section">
                    <div className="sidebar-label">{strings.map.sidebar.venue.graphs.political}</div>
                    <BarChartMulti data={percents} />
                </div>

                <div className="sidebar-poldiv">
                    <div className="sidebar-section">
                        <div className="sidebar-label">{strings.map.sidebar.venue.graphs.charge}</div>
                        <SliderChart data={charge} />
                    </div>
                    <div className="sidebar-section">
                        <div className="sidebar-label">{strings.map.sidebar.venue.graphs.score}</div>
                        <SliderChart data={score} />
                    </div>
                </div>

            </div>
        )
    }
}
