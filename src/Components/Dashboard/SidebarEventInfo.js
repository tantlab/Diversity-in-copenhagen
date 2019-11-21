import React, { Component } from 'react'

export default class SidebarEventInfo extends Component {
    render() {
        return (
            <div className="sidebar-section place-info">
                <div className="place-name">PlaceName</div>
                <div className="event-types">
                    <div className="section-label">Event name</div>
                </div>
                <div className="event-diversity">
                    <div className="event-diversity-most"></div>
                    <div className="event-diversity-least"></div>
                </div>
            </div>
        )
    }
}
