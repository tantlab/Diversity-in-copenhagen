import React from 'react'
import mapboxgl from 'mapbox-gl'
import carto from '@carto/carto-vl'

import 'mapbox-gl/src/css/mapbox-gl.css'

import './Mappa.css'

class Mappa extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lat: 55.676,
            lng: 12.5183,
            zoom: 11
        }
    }

    componentDidMount() {

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: carto.basemaps.darkmatter,
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
            minZoom: 10.5,
            maxBounds: [12.15,55.55, 12.95,55.8]
        })

        carto.setDefaultAuth({
            username: 'drivinward',
            apiKey: '5a4fe9e4fe02bb120fdbf141a733e261167cd40f'
        })
    
        const source = new carto.source.Dataset('carto_clean')
    
        const viz = new carto.Viz(`
            @event: $event_name,
            @place: $place_name_clean_,
            @attendance: $event_crowd,
            @diversity: $div_score_3x75_,

            width: 7,
            color: blue,
            strokeWidth: 0.25
        `);

        const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        })

        const layer = new carto.Layer('layer', source, viz)
        const interactivity = new carto.Interactivity(layer)
    
        layer.addTo(map)

        // map.addControl(new mapboxgl.NavigationControl({showCompass: false}), 'top-left')

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2),
            })
        })

        interactivity.on('featureHover', (event) => {
            if (event.features.length > 0 && map.getZoom().toFixed(2) > 12) {
                let vars = event.features[0].variables
                
                popup.setHTML(`
                    <div class="popup-row">
                        <span>Place: </span><span>${text_truncate(vars.place.value, 18)}</span>
                    </div>
                    <div class="popup-row">
                        <span>Event: </span><span>${text_truncate(vars.event.value, 18)}</span>
                    </div>
                    <div class="popup-row">
                        <span>People: </span><span>${vars.attendance.value}</span>
                    </div>
                    <div class="popup-row">
                        <span>Diversity: </span><span>${Math.floor(vars.diversity.value)}</span>
                    </div>
                `)
                popup.setLngLat([event.coordinates.lng, event.coordinates.lat]);
                if (!popup.isOpen()) {
                    popup.addTo(map)
                }
            } else {
                popup.remove()
            }
        })
        
        function text_truncate(str, length, ending) {
            if (length == null) {
              length = 100
            }
            if (ending == null) {
              ending = '...'
            }
            if (str.length > length) {
              return str.substring(0, length - ending.length) + ending;
            } else {
              return str
            }
        }

    }

    render() {
        let lat = this.state.lat.toString().split('.')
        let lng = this.state.lng.toString().split('.')
        return (
            <div className='dashboard'>
                <div className="sidebar">
                    <div className="sidebar-component">
                        <div className="title">Zoom State</div>
                        <div className="textField"><span>Lat</span> <span>{lat[0]}' {lat[1]}''</span></div>
                        <div className="textField"><span>Lon</span> <span>{lng[0]}' {lng[1]}''</span></div>
                        <div className="textField"><span>Zoom</span> <span>{this.state.zoom}</span></div>
                    </div>
                </div>
                <div ref={ el => this.mapContainer = el } className='mapContainer'></div>
            </div>
        )
    }

}

export default Mappa