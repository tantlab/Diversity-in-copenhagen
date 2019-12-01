import React from 'react'

import './SliderChart.css'

const SliderChart = (props) => {

    return (
        <div className="slider-chart">
            <div className="slider-chart-label"
                style={{ width: `${props.data*2}%` }}>
                {props.data}
            </div>
            <div className="slider-chart-axis-range">
                <div className="slider-chart-range-label min"
                    style={{ opacity: props.data <= 10 ? 0 : .5 }}>0</div>
                <div className="slider-chart-range-label max"
                    style={{ opacity: props.data >= 75 ? 0 : .5 }}>100</div>
            </div>
            <div className="slider-chart-axis">
                <div className="slider-chart-tick"></div>
                <div className="slider-chart-rail"></div>
                <div className="slider-chart-tick"></div>
            </div>
            <div className="slider-chart-bubble-rail"
                style={{ transform: `translate(${props.data}%, 50%)` }}>
                <div className="slider-chart-bubble"></div>
            </div>
        </div >
    )
}

export default SliderChart