import React from "react"
// import { Link } from "react-router-dom"

import Plx from "react-plx"

// import CTAButton from "./Globals/CTAButton"
import "./Home.css"

const plxData = [
    {
        start: ".sticky",
        duration: "100vh",
        properties: [
            {
                startValue: -75,
                endValue: 50,
                unit: "vh",
                property: "translateY"
            },
            {
                startValue: 0,
                endValue: 1,
                property: "opacity"
            }
        ]
    },
    {
        start: ".sticky",
        startOffset: "100vh",
        duration: "100vh",
        properties: [
            {
                startValue: 50,
                endValue: 150,
                unit: "vh",
                property: "translateY"
            },
            {
                startValue: 1,
                endValue: 0,
                property: "opacity"
            }
        ]
    }
]

const Home = () => {

    return (
        <div className="page">
            <div>
                <div className="section hero" style={{ height: "400vh" }}>
                    <Plx
                        className="sticky"
                        parallaxData={plxData}>
                        <h1>This is the Homepage's Hero Section</h1>
                    </Plx>
                    {/* <Link to="/map" className="link">
                        <CTAButton title="Explore&nbsp;the&nbsp;Map" />
                    </Link> */}
                </div>
                {/* <div className="section hero">
                    <h1>This is Section 2</h1>
                </div> */}
            </div>
        </div>
    )

}

export default Home