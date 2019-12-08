import React from "react"
// import { Link } from "react-router-dom"
// import { Keyframes } from 'react-spring/renderprops'
import { Scrollama, Step } from 'react-scrollama'

import Mappa from "./Mappa"
import "./Home.css"

// import { ReactComponent as SVGMap } from '../static/cph.svg'

// const RedCircle = Keyframes.Spring({
//     1: { transform: "scale(3)", backgroundColor: "#f06666", opacity: 0, left: "0%" },
//     2: { transform: "scale(1)", backgroundColor: "#f06666", opacity: 1, left: "0%", top: "0%" },
//     3: [
//         { transform: "scale(1)", backgroundColor: "#39b87f", opacity: 1, left: "50%", top: "50%" },
//         { transform: "scale(3)", backgroundColor: "#39b87f", opacity: 0, left: "50%", top: "50%" }
//     ]
// })
// const BlueCircle = Keyframes.Spring({
//     1: { transform: "scale(3)", backgroundColor: "#f7cc5f", opacity: 0, left: "50%", top: "0%" },
//     2: { transform: "scale(1)", backgroundColor: "#f7cc5f", opacity: 1, left: "50%", top: "100%" },
//     3: [
//         { transform: "scale(1)", backgroundColor: "#39b87f", opacity: 1, left: "50%", top: "50%" },
//         { transform: "scale(3)", backgroundColor: "#39b87f", opacity: 0, left: "50%", top: "50%" }
//     ]
// })
// const YellowCircle = Keyframes.Spring({
//     1: { transform: "scale(3)", backgroundColor: "#1d62ed", opacity: 0, left: "100%" },
//     2: { transform: "scale(1)", backgroundColor: "#1d62ed", opacity: 1, left: "100%", top: "0%" },
//     3: [
//         { transform: "scale(1)", backgroundColor: "#39b87f", opacity: 1, left: "50%", top: "50%" },
//         { transform: "scale(3)", backgroundColor: "#39b87f", opacity: 0, left: "50%", top: "50%" }
//     ]
// })


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
                        <div className="title">Do you live in a bubble?</div>
                        <div className="subtitle">A datascape of political diversity in Copenhagen</div>
                    </div>
                </div>
                <div className="scrolly-intro">
                    <div className="intro-texts">
                        <Scrollama offset={0.33} debug={false} onStepEnter={this.onStepEnter} onStepExit={this.onStepExit}>
                            <Step data={1}>
                                <div className="intro-section">
                                    <div className="title">We tend to spend time with people like ourselves. This is why our political discussions often take place in bubble where we rarely encounter opinions that conflict with our own.</div>
                                </div>
                            </Step>
                            <Step data={2}>
                                <div className="intro-section">
                                    <div className="title">Urban life and urban space can either strengthen or break such bubbles. This is a space where people in neither at work nor at home. It is a space with possibilities for chance encounters with different people.</div>
                                </div>
                            </Step>
                            <Step data={3}>
                                <div className="intro-section">
                                    <div className="title">But which parts of the city succeeds in breaking political bubbles?</div>
                                </div>
                            </Step>
                            <Step data={4}>
                                <div className="intro-section">
                                    <div className="title">And which parts come to serve as home for a very specific political crowd?</div>
                                </div>
                            </Step>
                            <Step data={5}>
                                <div className="intro-section">
                                    <div className="title">And is there something about the programming of the urban that make some places more and less diverse than others?</div>
                                </div>
                            </Step>
                            <Step data={6}>
                                <div className="intro-section">
                                    <div className="title">Explore the map and see how diverse your favorite place are or dive into the qualitative stories about Nørrebro and Kongens Nytorv</div>
                                </div>
                            </Step>
                            {/* This steps hosts the map and sidebar in the end */}
                            <Step data={7}>
                                <div style={{ height: "100vh" }}></div>
                            </Step>
                        </Scrollama>
                    </div>

                    {/* <div className="intro-anim">
                        <div className="follower">
                            <div className="circle-holder">
                                <RedCircle state={this.state.data}>
                                    {styles => <div className="circle" style={styles}></div>}
                                </RedCircle>
                            </div>
                            <div className="circle-holder">
                                <BlueCircle state={this.state.data}>
                                    {styles => <div className="circle" style={styles}></div>}
                                </BlueCircle>
                            </div>
                            <div className="circle-holder">
                                <YellowCircle state={this.state.data}>
                                    {styles => <div className="circle" style={styles}></div>}
                                </YellowCircle>
                            </div>
                            <div className="intro-map">
                                <SVGMap width="100%" height="auto" />
                            </div>
                        </div>
                    </div> */}
                </div>

            </div >
        )
    }
}