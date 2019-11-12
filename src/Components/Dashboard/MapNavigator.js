import React from 'react'

const MapNavigator = ({ lat, lng, zoom, onClick }) => {

    return (
        <div className="navigator">
            <div className="navigator-field parameter" onClick={onClick}>
                <span style={{ cursor: "pointer" }}>Open Modal</span>
            </div>
            <div className="title">Navigator</div>
            <div className="navigator-field parameter">
                <span>Lat</span> <span>{lat[0]}'&#9;{lat[1]}''</span>
            </div>
            <div className="navigator-field parameter">
                <span>Lon</span> <span>{lng[0]}'&#9;{lng[1]}''</span>
            </div>
            <div className="navigator-field parameter">
                <span>Zoom</span> <span>{zoom}</span>
            </div>
        </div>
    )
}

export default MapNavigator