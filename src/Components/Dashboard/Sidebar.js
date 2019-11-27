import React, { Component } from 'react'
import './Sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <div className={`sidebar ${this.props.show ? 'open' : ''}`} >
                <div className="sidebar-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
