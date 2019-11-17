import React from 'react'

import './BarChart.css'
import LocalizedStrings from 'react-localization'

let strings = new LocalizedStrings({
    en: {
        less: "Less diverse",
        more: "More diverse"
    },
    it: {
        less: "Più diverso",
        more: "Meno diverso"
    }
})

export default class BarChartMulti extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    isInteger(number) {
        if (isNaN(number)) {
            return
        } else return Number.isInteger(number) ? parseInt(number)/10 : number
    }

    render() {
        return (
            <div className="barchart minmax">
                <div className="barchart-labels">
                    {/* <div className="barchart-label max">0</div> */}
                    <div className="barchart-label current"
                        style={{ width: `${this.props.data * 10}%` }}></div>
                    <div className="barchart-label current"
                        style={{ transform: `translateX(-50%)` }}>
                        {this.isInteger(this.props.data*10)}
                    </div>
                    {/* <div className="barchart-label min">10</div> */}
                </div>

                <div className="bar-container">
                    <div className="bar-component">
                        {/* <div className="bar-rail"></div> */}
                        <div className="bar-rail"></div>
                        <div className="bar-current"
                            style={{ backgroundColor: "transparent", width: `${this.props.data * 10}%` }}></div>
                        <div className="bar-current"
                            style={{
                                backgroundColor: "var(--g)",
                                borderRadius: "12px",
                                width: "24px",
                                transform: `translateX(-50%)`
                            }}></div>
                    </div>
                </div>

                <div className="barchart-ticks">
                    <div className="barchart-label">{strings.less}</div>
                    <div className="barchart-label">{strings.more}</div>
                </div>

            </div>
        )
    }

}

