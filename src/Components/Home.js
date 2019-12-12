import React from "react"
// import { Link } from "react-router-dom"
// import { Keyframes } from 'react-spring/renderprops'
import { Scrollama, Step } from 'react-scrollama'
import { Link, Element } from 'react-scroll'


import Mappa from "./Mappa"
import strings from "../_localization"
import "./Home.css"


export default class Home extends React.Component {
    state = { data: 0 }

    mapRef = React.createRef()

    onStepEnter = ({ element, data, direction }) => {
        this.setState({ data: data })
    }

    onStepExit = ({ element, data, direction }) => {
        if (data === 1 && direction === "up") {
            this.setState({ data: 0 })
        } else if (data === 6 && direction === "down") {
            this.setState({ data: 7 })
        } else return
    }

    render() {

        return (
            <div className="page">

                <Mappa active={this.state.data} flyTo={this.state.data} />

                <div className={`home-overlay 
                    ${this.state.data <= 1 ? 'full' : ''} 
                    ${this.state.data >= 2 && this.state.data <=6 ? 'half' : ''} 
                    ${this.state.data > 6 ? 'none' : ''}`}>
                </div>

                <div className="hero">
                    <div className="hero-content">
                        <div className="title">{strings.home.hero.title}</div>
                        <div className="subtitle">{strings.home.hero.subtitle}</div>
                        <Link activeClass="scrolling" to="scrollDownIntro" spy={true} smooth={true} offset={50} duration={1000}>
                            <div className="cta-intro">What does this mean?</div>
                        </Link>
                    </div>
                </div>

                <Element name="scrollDownIntro" className="scroll-target"></Element>
                <div className="scrolly-intro">
                    <div className="intro-texts">
                        <Scrollama offset={0.33} debug={false} onStepEnter={this.onStepEnter} onStepExit={this.onStepExit}>
                            {strings.home.paragraphs.map((section, i) => {
                                return (
                                    <Step key={i + 1} data={i + 1}>
                                        <div className="intro-section">
                                            <div className="title">{section}</div>
                                        </div>
                                    </Step>
                                )
                            })}
                            {/* This steps hosts the map and sidebar in the end */}
                            {/* <Step data={7}> */}
                            {/* <div style={{ height: "500px" }}></div> */}
                            {/* </Step> */}
                        </Scrollama>
                        <div style={{ height: "100vh" }}>
                            <Element name="mapScrollTarget" className="scroll-target"></Element>
                        </div>
                    </div>
                </div>

            </div >
        )
    }
}