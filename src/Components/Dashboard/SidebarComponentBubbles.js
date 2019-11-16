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
            if (this.props.factions && this.props.factions.length === 3 && this.props.show) {
                return Math.round(this.props.factions[num])
            } else return 0
        }
    }

    render() {
        return (
            <div className={`sidebar-component bubbles chart ${this.props.show ? 'open' : ''}`}>
                <div className="component-field">
                <div>Current Area</div>
                    <span>{this.props.rode.name}</span>
                </div>
                <div className="title">Factions Presence</div>
                <div className="component-field grid multi-3">
                    <span>Red</span>
                    <span>Yellow</span>
                    <span>Blue</span>
                </div>
                <div className="component-field grid multi-3">
                    <span /* style={{ color: colors[0] }} */>{this.getFactions(0)}%</span>
                    <span /* style={{ color: colors[1] }} */>{this.getFactions(1)}%</span>
                    <span /* style={{ color: colors[2] }} */>{this.getFactions(2)}%</span>
                </div>
                <div className="component-field">
                    <div className="chart-container">
                        <div className="chart-component bubbles x-axis"></div>
                        <div className="chart-component bubbles">
                            <div className="bubbles container">
                                <div className="bubbles element" style={{
                                    width: `${this.getFactions(0)}px`,
                                    height: `${this.getFactions(0)}px`,
                                    backgroundColor: 'var(--r)'
                                }}></div>
                            </div>
                            <div className="bubbles container">
                                <div className="bubbles element" style={{
                                    width: `${this.getFactions(1)}px`,
                                    height: `${this.getFactions(1)}px`,
                                    backgroundColor: 'var(--y)'
                                }}></div>
                            </div>
                            <div className="bubbles container">
                                <div className="bubbles element" style={{
                                    width: `${this.getFactions(2)}px`,
                                    height: `${this.getFactions(2)}px`,
                                    backgroundColor: 'var(--b)'
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}