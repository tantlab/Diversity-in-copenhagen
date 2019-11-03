import React from 'react'
import mapboxgl from 'mapbox-gl'
import carto from '@carto/carto-vl'

import 'mapbox-gl/src/css/mapbox-gl.css'

import './Mappa.css'

export default class Mappa extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lat:    55.675,
            lng:    12.57,
            zoom:   11,
            widget: 0
        }
    }

    componentDidMount() {

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: carto.basemaps.voyager,
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
            minZoom: 11,
            maxBounds: [12.3,55.55, 12.85,55.8]
        })

        carto.setDefaultAuth({
            username: 'drivinward',
            apiKey: '5a4fe9e4fe02bb120fdbf141a733e261167cd40f'
        })
    
        const source = new carto.source.Dataset('redux_data')
    
        const viz = new carto.Viz(`
            @viewportAvg:   viewportAvg($div_score)

            filter: (zoom() > 12.8)
            
            width: 7
            color: ramp($div_score, sunset)
            strokeWidth: 0.25
            strokeColor: white
            resolution: 32
        `);

        const layer = new carto.Layer('Diversity', source, viz)
        layer.addTo(map)
        
        map.addControl(new mapboxgl.NavigationControl({showCompass: false}), 'top-left')

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2),
            })
        })

        layer.on('updated', () => {
            const widgetData = viz.variables.viewportAvg.value;
            this.setState({
                widget: widgetData
            })
        })

        // const interactivity = new carto.Interactivity(layer)
        
        // const popup = new mapboxgl.Popup({
        //     closeButton: false,
        //     closeOnClick: false
        // })
        
        // const showPopup = (event) => {
        //     function text_truncate(str, length, ending) {
        //         if (length == null) {
        //           length = 100
        //         }
        //         if (ending == null) {
        //           ending = '...'
        //         }
        //         if (str.length > length) {
        //           return str.substring(0, length - ending.length) + ending;
        //         } else {
        //           return str
        //         }
        //     }

        //     if (event.features.length > 0 && map.getZoom().toFixed(2) > 12) {
        //         let vars = event.features[0].variables
        //         // popup.setHTML(`
        //         //     <div class="popup-row">
        //         //         <span>Diversity: </span><span>${Math.floor(vars.diversity.value)}</span>
        //         //     </div>
        //         // `)
        //         popup.setHTML(`
        //             <div class="popup-row">
        //                 <span>Place: </span><span>
        //                     ${vars.place.value === undefined ? '' : text_truncate(vars.place.value, 18)}
        //                 </span>
        //             </div>
        //             <div class="popup-row">
        //                 <span>Event: </span><span>
        //                     ${vars.event.value === undefined ? '' : text_truncate(vars.event.value, 18)}
        //                 </span>
        //             </div>
        //             <div class="popup-row">
        //                 <span>People: </span><span>
        //                     ${vars.attendance.value === undefined ? '' : vars.attendance.value}
        //                 </span>
        //             </div>
        //             <div class="popup-row">
        //                 <span>Diversity: </span><span>
        //                     ${vars.diversity.value === undefined ? '' : Math.floor(vars.diversity.value)}
        //                 </span>
        //             </div>
        //         `)
        //         popup.setLngLat([event.coordinates.lng, event.coordinates.lat]);
        //         if (!popup.isOpen()) {
        //             popup.addTo(map)
        //         }
        //     } else {
        //         popup.remove()
        //     }
        // }
        // interactivity.on('featureHover', showPopup)
        
    }

    render() {
        let lat     = this.state.lat.toString().split('.')
        let lng     = this.state.lng.toString().split('.')
        let zoom    = this.state.zoom
        let widget  = this.state.widget
        return (         
            <div className="page">
                <div className='dashboard'>
                    <div className="sidebar">
                        {isNaN(widget) || widget === 0 ? '' : (
                            <div className="sidebar-component data-widget">
                                <div className="title">Diversity</div>
                                    <div className="component-field">
                                        <span>Average</span> <span>{widget.toFixed(1)}</span>
                                    </div>
                                    <div className="component-field">
                                        <div className="bar-container">
                                            <div className="bar-component bar-rail"></div>
                                            <div className="bar-component bar-current" style={{width: `${widget/2}%`}}></div>
                                        </div>
                                    </div>
                            </div>
                        )}
                        <div className="sidebar-component">
                            <div className="title">Zoom State</div>
                            <div className="component-field">
                                <span>Lat</span> <span>{lat[0]}' {lat[1]}''</span>
                            </div>
                            <div className="component-field">
                                <span>Lon</span> <span>{lng[0]}' {lng[1]}''</span>
                            </div>
                            <div className="component-field">
                                <span>Zoom</span> <span>{zoom}</span>
                            </div>
                        </div>
                    </div>
                    <div ref={ el => this.mapContainer = el } className='mapContainer'></div>
                </div>
            </div>
        )
    }

}