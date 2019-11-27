import React, { Component } from 'react'
import { ResponsiveSankey } from '@nivo/sankey'

import BarChartMulti from './Charts/BarChartMulti'

export default class SidebarEventCrowd extends Component {

    trimString(str, length = 24) {
        if (str) {
            return str.length > length ? str.slice(0, length) + "..." : str
        } else return
    }

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
            venue["Total crowd"], venue["Total Red"], venue["Total Yellow"], venue["Total Blue"]
        ]

        let percents = [
            venue["Red percent"], venue["Yellow percent"], venue["Blue percent"]
        ]

        const colors = {
            r: "#f06666",
            y: "#fbd679",
            b: "#1d62ed",
            d: "#45de99",
            n: "#ece9e9"
        }        

        let alluvialData = {
            nodes: [
                { id: "Total crowd", color: colors.n },
                { id: "Total Political", color: colors.d },
                { id: "Red percent", color: colors.r },
                { id: "Yellow percent", color: colors.y },
                { id: "Blue percent", color: colors.b },
            ],
            links: [
                // { source: "Total crowd", target: "Total crowd", value: venue["Total crowd"] },
                { source: "Total Political", target: "Red percent", value: venue["Total Red"] },
                { source: "Total Political", target: "Yellow percent", value: venue["Total Yellow"] },
                { source: "Total Political", target: "Blue percent", value: venue["Total Blue"] }
            ]
        }

        return (
            <div className="sidebar-section crowd-info">
                {/* <BarChartMulti data={this.eventPercentages(totalPercents)} /> */}
                {/* <BarChartMulti data={percents} /> */}

                {alluvialData.links[0].value !== undefined ? (
                    <div className="nivo-container"
                        style={{ height: "120px" }}>
                        {/* <ResponsiveSankey
                            data={alluvialData}
                            margin={{ top: 0, right: 30, bottom: 0, left: 30 }}
                            align="justify"
                            colors={{ scheme: 'category10' }}
                            nodeOpacity={1}
                            nodeThickness={18}
                            nodeInnerPadding={3}
                            nodeSpacing={24}
                            nodeBorderWidth={0}
                            nodeBorderColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
                            linkOpacity={0.5}
                            linkHoverOthersOpacity={0.1}
                            enableLinkGradient={true}
                            labelPosition="outside"
                            labelOrientation="vertical"
                            labelPadding={16}
                            labelTextColor={{ from: 'color', modifiers: [['darker', 1]] }}
                            animate={true}
                            motionStiffness={140}
                            motionDamping={13}
                        // legends={[
                        //     {
                        //         anchor: 'bottom-right',
                        //         direction: 'column',
                        //         translateX: 130,
                        //         itemWidth: 100,
                        //         itemHeight: 14,
                        //         itemDirection: 'right-to-left',
                        //         itemsSpacing: 2,
                        //         itemTextColor: '#999',
                        //         symbolSize: 14,
                        //         effects: [
                        //             {
                        //                 on: 'hover',
                        //                 style: {
                        //                     itemTextColor: '#000'
                        //                 }
                        //             }
                        //         ]
                        //     }
                        // ]}
                        /> */}
                    </div>
                ) : ""}


            </div>
        )
    }
}
