import React from 'react'

// try build the timeline with this
import { ResponsiveLine } from '@nivo/line'

import strings from '../../_localization.js'
import trimString from '../helpers'

export default class SidebarRode extends React.Component {

    render() {
        // console.log(this.props.data.rode);

        let data = this.props.data ? this.props.data.rode : null
        let active = data.lastSelected !== null ? data.lastSelected.properties : null

        let dataLabels = {
            name: "Rode",
            least: "Least Diverse Place",
            most: "Most Diverse Place",
            divScore: "DIV SCORE POLY OVERALL",
            charge: "DIV 2018"
        }

        let name = active !== null ? active[dataLabels.name] : null
        let least = active !== null ? active[dataLabels.least] : null
        let most = active !== null ? active[dataLabels.most] : null
        let divScore = active !== null ? active[dataLabels.divScore] : null
        let polCharge = active !== null ? active[dataLabels.charge] : null

        const validateData = (el) => {
            return isNaN(parseFloat(el)) ? 0 : parseFloat(el)
        }

        // console.log(active);

        let graphData = [
            {
                id: strings.map.sidebar.rode.place.graphLegend.score,
                data: (active !== null
                    ? [
                        { x: "2013", y: validateData(active["DIV 2013"]) },
                        { x: "2014", y: validateData(active["DIV 2014"]) },
                        { x: "2015", y: validateData(active["DIV 2015"]) },
                        { x: "2016", y: validateData(active["DIV 2016"]) },
                        { x: "2017", y: validateData(active["DIV 2017"]) },
                        { x: "2018", y: validateData(active["DIV 2018"]) }
                    ]
                    : null)
            },
            {
                id: strings.map.sidebar.rode.place.graphLegend.crowd,
                data: (active !== null
                    ? [
                        { x: "2013", y: validateData(active["PC 2013"]) },
                        { x: "2014", y: validateData(active["PC 2014"]) },
                        { x: "2015", y: validateData(active["PC 2015"]) },
                        { x: "2016", y: validateData(active["PC 2016"]) },
                        { x: "2017", y: validateData(active["PC 2017"]) },
                        { x: "2018", y: validateData(active["PC 2018"]) }
                    ]
                    : null)
            },
        ]

        return (
            <div className="sidebar-rode">

                <div className="sidebar-legend-container">
                    <div className="legend-title">Legend</div>
                    <div className="legend-map">
                        <div className="legend-map-rodes-labels">
                            <div>Less diverse</div>
                            <div>More diverse</div>
                        </div>
                        <div className="legend-map-rodes-chart">
                            <div className="legend-map-rodes-chart-component" style={{backgroundColor: "var(--u)"}}></div>
                            <div className="legend-map-rodes-chart-component" style={{backgroundColor: "#dabfe3"}}></div>
                            <div className="legend-map-rodes-chart-component" style={{backgroundColor: "#b3e5ce"}}></div>
                            <div className="legend-map-rodes-chart-component" style={{backgroundColor: "var(--g)"}}></div>
                        </div>
                    </div>
                </div>

                <div className="sidebar-header-label">
                    {name}
                </div>

                <div className="sidebar-sublevel">
                    <div className="sidebar-sublevel-unit">
                        <div className="sidebar-label">{strings.map.sidebar.rode.place.least}</div>
                        <div className="sidebar-value text">{trimString(least, 32)}</div>
                    </div>
                    <div className="sidebar-sublevel-unit">
                        <div className="sidebar-label">{strings.map.sidebar.rode.place.most}</div>
                        <div className="sidebar-value text">{trimString(most, 32)}</div>
                    </div>
                </div>

                <div className="sidebar-sided">
                    <div className="sidebar-sublevel-unit">
                        <div className="sidebar-label">{strings.map.sidebar.rode.place.diversity}</div>
                        <div className="sidebar-value numeric">{divScore}</div>
                    </div>
                    <div className="sidebar-sublevel-unit">
                        <div className="sidebar-label">{strings.map.sidebar.rode.place.charge}</div>
                        <div className="sidebar-value numeric">{polCharge}</div>
                    </div>
                </div>

                {graphData[0].data !== null ? (
                    <div className="nivo-container nivo-lines" style={{ height: "200px" }}>
                        <ResponsiveLine
                            data={graphData}
                            margin={{ top: 40, right: 12, bottom: 20, left: 12 }}
                            xScale={{ type: 'point' }}
                            yScale={{ type: 'linear', stacked: false, min: 0, max: 'auto' }}
                            curve="monotoneX"
                            axisTop={null}
                            axisRight={null}
                            axisBottom={{
                                orient: 'bottom',
                                tickSize: 3,
                                tickPadding: 5,
                                tickRotation: 0,
                                legend: 'Diversity Score',
                                legendOffset: 36,
                                legendPosition: 'middle'
                            }}
                            // axisLeft={{
                            //     orient: 'left',
                            //     tickSize: 3,
                            //     tickPadding: 5,
                            //     tickRotation: -48,
                            //     legend: '',
                            //     legendOffset: -40,
                            //     legendPosition: 'middle'
                            // }}
                            axisLeft={null}
                            enableGridX={false}
                            colors={["#39b87f", "#707070"]}
                            lineWidth={3}
                            pointSize={10}
                            pointColor={"#f0f0f0"}
                            pointBorderWidth={3}
                            pointBorderColor={{ from: 'serieColor' }}
                            enablePointLabel={true}
                            pointLabel="y"
                            pointLabelYOffset={-12}
                            enableArea={true}
                            areaBaselineValue={0}
                            areaOpacity={0.15}
                            isInteractive={false}
                            useMesh={true}
                            legends={[
                                {
                                    anchor: 'top-left',
                                    direction: 'row',
                                    justify: false,
                                    translateX: 0,
                                    translateY: -35,
                                    itemsSpacing: 0,
                                    itemDirection: 'left-to-right',
                                    itemWidth: 100,
                                    itemHeight: 20,
                                    itemOpacity: 0.75,
                                    symbolSize: 12,
                                    symbolShape: 'circle',
                                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                    effects: [
                                        {
                                            on: 'hover',
                                            style: {
                                                itemBackground: 'rgba(0, 0, 0, .03)',
                                                itemOpacity: 1
                                            }
                                        }
                                    ]
                                }
                            ]}
                        />
                    </div>
                ) : ""}

            </div>
        )
    }
}