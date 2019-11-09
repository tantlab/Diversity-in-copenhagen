import React from 'react'

export default class Mappa extends React.Component {
    render() {
        let colors = ['#00B1D9', '#EACB00', '#E63462']
        return (
            <div className="sidebar-component data-widget">
                <div className="title"> {this.props.title} </div>
                <div className="component-field grid multi">
                    <span>Blue</span>
                    <span>Yellow</span>
                    <span>Red</span>
                </div>
                <div className="component-field grid multi">
                    <span style={{ color: colors[0] }}>{Math.round(this.props.factions[0])}%</span>
                    <span style={{ color: colors[1] }}>{Math.round(this.props.factions[1])}%</span>
                    <span style={{ color: colors[2] }}>{Math.round(this.props.factions[2])}%</span>
                </div>
                <div className="component-field">
                    <div className="chart-container">
                        <div className="chart-component bubbles x-axis"></div>
                        <div className="chart-component bubbles">
                            <div className="bubbles container">
                                <div className="bubbles element" style={{
                                    width: `${this.props.factions[0]}px`,
                                    height: `${this.props.factions[0]}px`,
                                    backgroundColor: colors[0]
                                }}></div>
                            </div>
                            <div className="bubbles container">
                                <div className="bubbles element" style={{
                                    width: `${this.props.factions[1]}px`,
                                    height: `${this.props.factions[1]}px`,
                                    backgroundColor: colors[1]
                                }}></div>
                            </div>
                            <div className="bubbles container">
                                <div className="bubbles element" style={{
                                    width: `${this.props.factions[2]}px`,
                                    height: `${this.props.factions[2]}px`,
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