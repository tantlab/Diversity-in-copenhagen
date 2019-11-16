import React from 'react'

import './BarChart.css'

export default class BarChartMulti extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="barchart multi">
                <div className="barchart-labels">
                    <div className="barchart-label" style={{
                        minWidth: this.props.data[0] !== 0 ? `${this.props.data[0]}%` : 0,
                        opacity: this.props.data[0] !== 0 ? 1 : 0,
                        // padding: this.props.data[0] <= 10 ? "0px calc(var(--spa) / 8)" : 0
                    }}>
                        {Math.round(this.props.data[0])}%
                    </div>
                    <div className="barchart-label" style={{
                        minWidth: this.props.data[1] !== 0 ? `${this.props.data[1]}%` : 0,
                        opacity: this.props.data[1] !== 0 ? 1 : 0,
                        // padding: this.props.data[1] <= 10 ? "0px calc(var(--spa) / 8)" : 0
                    }}>
                        {Math.round(this.props.data[1])}%
                    </div>
                    <div className="barchart-label" style={{
                        minWidth: this.props.data[2] !== 0 ? `${this.props.data[2]}%` : 0,
                        opacity: this.props.data[2] !== 0 ? 1 : 0,
                        // padding: this.props.data[2] <= 10 ? "0px calc(var(--spa) / 8)" : 0
                    }}>
                        {Math.round(this.props.data[2])}%
                    </div>
                </div>
                <div className="bar-container">
                    <div className="bar-component">
                        {/* <div className="bar-rail"></div> */}
                        <div className="bar-container bar-multi" style={{ backgroundColor: "var(--r)", width: `${this.props.data[0]}%` }}></div>
                        <div className="bar-container bar-multi" style={{ backgroundColor: "var(--y)", width: `${this.props.data[1]}%` }}></div>
                        <div className="bar-container bar-multi" style={{ backgroundColor: "var(--b)", width: `${this.props.data[2]}%` }}></div>
                    </div>
                </div>
            </div>
        )
    }

}

