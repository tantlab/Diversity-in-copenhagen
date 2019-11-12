import React from 'react'

import './SidebarComponentBubbles.css'

export default class SidebarComponentBubbles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    getFactions(num) {
        if (num >= 0 && num < 3) {
            if (this.props.factions && this.props.factions.length === 3 && this.props.zoom > 12) {
                return Math.round(this.props.factions[num])
            } else return 0
        }
    }

    checkProps() {
        if (this.props.factions && this.props.factions.length === 3 && this.props.zoom > 12) {
            return true
        } else return false
    }

    toggleOpen() {
        if (this.checkProps() === true) {
            if (this.state.open !== true) {
                this.setState({
                    open: true
                })
            }
        } else if (this.checkProps() === false) {
            if (this.state.open !== false) {
                this.setState({
                    open: false
                })
            }
        }
    }

    componentDidMount() {
        this.toggleOpen()
    }

    componentDidUpdate() {
        this.toggleOpen()
    }

    render() {
        let colors = ['#E63462', '#EACB00', '#00B1D9']

        return (
            <div className={`sidebar-component bubbles chart ${this.state.open ? 'open' : ''}`}>
                <div className="title"> {this.props.title} </div>
                <div className="component-field grid multi-3">
                    <span>Red</span>
                    <span>Yellow</span>
                    <span>Blue</span>
                </div>
                <div className="component-field grid multi-3">
                    <span style={{ color: colors[0] }}>{this.getFactions(0)}%</span>
                    <span style={{ color: colors[1] }}>{this.getFactions(1)}%</span>
                    <span style={{ color: colors[2] }}>{this.getFactions(2)}%</span>
                </div>
                <div className="component-field">
                    <div className="chart-container">
                        <div className="chart-component bubbles x-axis"></div>
                        <div className="chart-component bubbles">
                            <div className="bubbles container">
                                <div className="bubbles element" style={{
                                    width: `${this.getFactions(0)}px`,
                                    height: `${this.getFactions(0)}px`,
                                    backgroundColor: colors[0]
                                }}></div>
                            </div>
                            <div className="bubbles container">
                                <div className="bubbles element" style={{
                                    width: `${this.getFactions(1)}px`,
                                    height: `${this.getFactions(1)}px`,
                                    backgroundColor: colors[1]
                                }}></div>
                            </div>
                            <div className="bubbles container">
                                <div className="bubbles element" style={{
                                    width: `${this.getFactions(2)}px`,
                                    height: `${this.getFactions(2)}px`,
                                    backgroundColor: colors[2]
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}