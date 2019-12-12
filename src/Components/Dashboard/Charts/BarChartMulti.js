import React from 'react'

import './BarChart.css'


// let labels = ["Political crowd", "Non-political crowd"]

export default class BarChartMulti extends React.Component {

    colors_ = this.props.data.length > 3 ? ["#f06666", "#fbd679", "#1d62ed", "#ece9e9"] : ["#f06666", "#fbd679", "#1d62ed", "#45de99"]

    colors = () => {
        switch(this.props.data.length) {
            case 1:
                break
            case 2:
                return ["#39B87F", "ece9e9"]
            case 3:
                return ["#f06666", "#fbd679", "#1d62ed", "#45de99"]
            case 4:
                return ["#f06666", "#fbd679", "#1d62ed", "#ece9e9"]
            default:
                break
        }
    }

    render() {
        return (
            <div className="barchart multi">
                <div className="barchart-labels">
                    {this.props.data.map((entry, index) => (
                        <div key={index}
                            className="barchart-label"
                            style={{
                                minWidth: Math.round(this.props.data[index]) !== 0 ? `${Math.round(this.props.data[index])}%` : 0,
                                opacity: Math.round(this.props.data[index]) > 2 ? 1 : 0,
                                // padding: this.props.data[1] <= 10 ? "0px calc(var(--spa) / 8)" : 0
                            }}>
                            {Math.round(this.props.data[index])}%
                            </div>
                    ))}
                </div>
                <div className="bar-container">
                    <div className="bar-component">
                        {/* <div className="bar-rail"></div> */}
                        {this.props.data.map((entry, index) => (
                            <div key={index}
                                className="bar-multi"
                                style={{ backgroundColor: this.colors()[index], width: `${this.props.data[index]}%` }} />
                        ))}
                    </div>
                </div>
            </div>
        )
    }

}

