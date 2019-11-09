import React from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/src/css/mapbox-gl.css'

import SidebarComponent from './SidebarComponent'
import './Mappa.css'

export default class Mappa extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lat: 55.675,     // coordinates of copenhagen's center (?)
            lng: 12.57,
            zoom: 11,
            widget: 0
        }
    }

    getAvgValues = (data) => {
        if (data.length > 0) {
            let c = [[], [], []]
            data.forEach(element => {
                c[0].push(element.properties['Blue Percent']);
                c[1].push(element.properties['Yellow Percent']);
                c[2].push(element.properties['Red Percent']);
            });
            let avgs = c.map(faction => {
                let sum = 0
                faction.forEach(element => {
                    sum += element
                });
                return parseFloat((sum / faction.length).toFixed(2))
            })
            return avgs
        }
        else return [0, 0, 0]
    }

    populateSidebar = () => {
        if (this.state.zoom >= 12 && this.state.factions) {
            if (this.state.factions.length > 0) {
                return ( <SidebarComponent title="Factions" factions={this.state.factions} /> )
            } else return ''
        } else return ''
    }

    componentDidMount() {

        mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmlud2FyZCIsImEiOiJjazI1N2lkbm4xMHg2M25tcWQ1anprM3Y0In0.sxw7MdBqOuUsi3LDjHqhoA'

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/drivinward/ck2rkn9853jak1co95id5hozb/draft',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
            minZoom: 11,
            maxBounds: [12.3, 55.55, 12.85, 55.8]
        })

        // let's make sure the default center is properly set
        map.setCenter([this.state.lng, this.state.lat]);

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom(),
            })

        })

        // write function to handle events on zoom levels
        map.on('moveend', () => {
            const viewportData = map.queryRenderedFeatures({ layers: ['venues'] })
            if (this.state.zoom >= 12) {
                this.setState({
                    factions: this.getAvgValues(viewportData)
                })
            }
        })

    }

    render() {
        let lat = this.state.lat.toString().split('.')
        let lng = this.state.lng.toString().split('.')
        let zoom = Math.round(this.state.zoom)

        return (
            <div className="page">
                <div className='dashboard'>
                    <div className="sidebar">

                        {this.populateSidebar()}

                        <div className="sidebar-component">
                            <div className="title">Position</div>
                            <div className="component-field parameter">
                                <span>Lat</span> <span>{lat[0]}'&#9;{lat[1]}''</span>
                            </div>
                            <div className="component-field parameter">
                                <span>Lon</span> <span>{lng[0]}'&#9;{lng[1]}''</span>
                            </div>
                            <div className="component-field parameter">
                                <span>Zoom</span> <span>{zoom}</span>
                            </div>
                        </div>
                    </div>
                    <div ref={el => this.mapContainer = el} className='mapContainer'></div>
                </div>
            </div>
        )
    }

}