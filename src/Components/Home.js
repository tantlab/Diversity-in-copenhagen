import React from "react"
// import { Link } from "react-router-dom"
// import { Keyframes } from 'react-spring/renderprops'
import { Scrollama, Step } from 'react-scrollama'

import Mappa from "./Mappa"
import strings from "../_localization"
import "./Home.css"


export default class Home extends React.Component {
    state = { data: 0 }

    onStepEnter = ({ element, data, direction }) => {
        this.setState({ data: data })
    }

    onStepExit = ({ element, data, direction }) => {
        if (data === 1 && direction === "up") {
            this.setState({ data: 0 })
        } else return
        // console.log(this.state.data);
    }

    render() {

        return (
            <div className="page">

                <Mappa active={this.state.data >= 7} flyTo={this.state.data} />

                <div className={`home-overlay 
                    ${this.state.data === 0 ? 'full' : ''} 
                    ${this.state.data >= 1 && this.state.data < 7 ? 'half' : ''} 
                    ${this.state.data >= 7 ? 'none' : ''}`}>
                </div>

                <div className="hero">
                    <div className="hero-content">
                        <div className="title">{strings.home.hero.title}</div>
                        <div className="subtitle">{strings.home.hero.subtitle}</div>
                    </div>
                </div>

                <div className="scrolly-intro">
                    <div className="intro-texts">
                        <Scrollama offset={0.33} debug={false} onStepEnter={this.onStepEnter} onStepExit={this.onStepExit}>
                            {strings.home.paragraphs.map((section, i) => {
                                return (
                                    <Step data={i + 1}>
                                        <div className="intro-section">
                                            <div className="title">{section}</div>
                                        </div>
                                    </Step>
                                )
                            })}
                            {/* This steps hosts the map and sidebar in the end */}
                            <Step data={7}>
                                <div style={{ height: "100vh" }}></div>
                            </Step>
                        </Scrollama>
                    </div>
                </div>

            </div >
        )
    }
}