import React from 'react'
import { Route } from 'react-router'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/src/css/mapbox-gl.css'

// try build the timeline with this
// import { ResponsiveLine } from '@nivo/line'

import './Mappa.css'

import Modal from './Modal'
import Sidebar from './Dashboard/Sidebar'
import SidebarEventInfo from './Dashboard/SidebarEventInfo'

// import MapNavigator from './Dashboard/MapNavigator'
// import SidebarComponentBubbles from './Dashboard/Charts/SidebarComponentBubbles'
// import VenueBar from './Dashboard/VenueBar'

export default class Mappa extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lat: 55.675, // coordinates of 
            lng: 12.57, // Copenhagen's center
            zoom: 11, // initial zoom level
            factions: [], // 
            lastSelectedVenue: null,
            venueFocus: false, // no selected place on load
            venueGraphData: {
                least: [0, 0, 0],
                most: [0, 0, 0]
            },

            modal: {
                el: null, // state for modal element
                transitionTiming: 750, // timing of modal transition
                showModal: false, // modal is closed by default
                sid: null // story id
            },

            rode: {
                name: null,
                diversity: null,
                hoveredStateId: null, // controls the hover state on rodes layer
            },

            placeHoveredStateId: null // controls the hover state on placess layer 
        }
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
        // map.addControl(new mapboxgl.NavigationControl());
        // let's make sure the default center is properly set
        map.setCenter([this.state.lng, this.state.lat]);

        const popup = new mapboxgl.Popup({ closeButton: false })

        // let modal = document.querySelector('.modal .reader')
        // initializing state for important elements
        this.setState({
            mapPopup: popup,
            // readerModal: modal
        })

        this.handleMapEvents(map)
        this.handleRodeEvents(map)
        this.handleVenueEvents(map)

    }


    // TO-DO: always checks if story id is valid
    openModal = (e) => {
        let s = e.features[0].properties["Neighborhood"]
        this.setState(prevState => ({
            modal: {
                ...prevState.modal,
                showModal: true,
                sid: s
            }
        }))
        setTimeout(() => {
            this.props.history.push(`/map/story?s=${s}`)
        }, this.state.modal.transitionTiming);
    }

    closeModal = () => {
        this.setState(prevState => ({
            modal: {
                ...prevState.modal,
                showModal: false,
            }
        }))
        setTimeout(() => {
            this.props.history.push(`/map`)
        }, this.state.modal.transitionTiming);
    }


    checkZoom = () => {
        if (this.state.zoom >= 13) {
            return true
        } else return false
    }

    getCurrentGroupsDataInView = (data) => {
        if (data.length > 0) {
            let c = [
                [],
                [],
                []
            ]
            let tot = []
            data.forEach(place => {
                c[0].push(place.properties['Total Red']);
                c[1].push(place.properties['Total Yellow']);
                c[2].push(place.properties['Total Blue']);
                tot.push(place.properties['Total Political Crowd'])
            });

            let avgs = c.map((faction) => {
                let aggregates = 0
                let tots = 0
                tot.map((placeTot, t) => {
                    return [aggregates += ( /* placeTot *  */ faction[t]), tots += placeTot]
                })
                return aggregates / tots * 100
            })
            return avgs
        } else return [0, 0, 0]
    }

    computePlaceGraphData(array) {
        let percentage = (array) => {
            let tot = 0
            array.forEach(element => {
                return tot += element
            })
            const percents = array.map(element => {
                return (element / tot * 100)
            });
            return percents
        }
        return percentage(array)
    }

    updateMapData = (map) => {
        // update average values of bubblechart
        if (this.checkZoom()) {
            const viewportData = map.queryRenderedFeatures({
                layers: ['venues']
            })
            this.setState({
                factions: this.getCurrentGroupsDataInView(viewportData)
            })
            return viewportData
        } else return false
    }


    handleMapEvents = (map) => {
        // first update of rendered layers
        // it renders the graphs' data the first time
        map.on('load', () => {
            this.updateMapData(map)
        })

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom(),
            })
            // if we zoom out, close also place info box
            if (this.checkZoom() === false) {
                this.setState({
                    venueFocus: false
                })
            }

        })

        // TO-DO: write function to handle events on zoom levels
        map.on('moveend', () => {
            this.updateMapData(map)
        })
    }




    handleRodeEvents = (map) => {
        map.on('click', 'rodes', (e) => {
            if (!this.checkZoom()) {
                this.openModal(e)
            }
        })

        map.on('moveend', 'rodes', (e) => {

            // calculating which area we are in
            function inside(point, vs) {
                // ray-casting algorithm based on
                // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

                var x = point[0],
                    y = point[1];

                var inside = false;
                for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
                    var xi = vs[i][0],
                        yi = vs[i][1];
                    var xj = vs[j][0],
                        yj = vs[j][1];

                    var intersect = ((yi > y) !== (yj > y)) &&
                        (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                    if (intersect) inside = !inside;
                }

                return inside;
            };

            let ids = e.features.filter(f => {
                return (inside(map.getCenter().toArray(), f.geometry.coordinates[0]) === true)
            })

            if (ids[0] !== undefined) {
                this.setState(prevState => ({
                    rode: {
                        ...prevState.rode,
                        name: ids[0].properties["Rode"],
                        diversity: ids[0].properties["DIV SCORE POLY"]
                    }
                }))
                // console.log(ids[0].properties["Rode"], ids[0].properties["DIV SCORE POLY"]);
            } else return
        })

        map.on('mousemove', 'rodes', (e) => {
            if (e.features.length > 0) {
                // if (this.state.rode.hoveredStateId) {
                //     map.setFeatureState({
                //         source: 'composite',
                //         sourceLayer: 'Rode_layer_nov12-462huj',
                //         id: this.state.rode.hoveredStateId
                //     }, { hover: false });
                // }

                // setting hoveredState id state
                this.setState(prevState => ({
                    rode: {
                        ...prevState.rode,
                        hoveredStateId: e.features[0].id
                    }
                }))

                if (!this.checkZoom()) {
                    map.getCanvas().style.cursor = 'pointer'

                    let popupCoords =
                        e.features[0].geometry.coordinates[0][0].length > 2 ?
                            e.features[0].geometry.coordinates[0][0][0] :
                            e.features[0].geometry.coordinates[0][0]

                    // console.log(this.state.rode.hoveredStateId, popupCoords);

                    this.state.mapPopup.setLngLat(popupCoords)
                        .setHTML(`
                        ${e.features[0].properties["Rode"]}</br>
                        ${e.features[0].properties["Neighborhood"]}
                    `)
                        .addTo(map)

                    map.setFeatureState({
                        source: 'composite',
                        sourceLayer: 'Rode_layer_nov12-462huj',
                        id: this.state.rode.hoveredStateId
                    }, {
                        hover: true
                    });
                }

            }
        })

        map.on('mouseleave', 'rodes', () => {
            map.getCanvas().style.cursor = ''

            if (this.state.rode.hoveredStateId) {
                map.setFeatureState({
                    source: 'composite',
                    sourceLayer: 'Rode_layer_nov12-462huj',
                    id: this.state.rode.hoveredStateId
                }, {
                    hover: false
                });
            }
            this.setState(prevState => ({
                rode: {
                    ...prevState.rode,
                    hoveredStateId: null
                }
            }))
            this.state.mapPopup.remove()
        })
    }




    handleVenueEvents = (map) => {
        // if click on the map (not on place points) we close the info box
        map.on('click', () => {
            this.setState({
                venueFocus: false
            })
        })
        map.on('click', 'venues', () => {
            this.setState({
                venueFocus: true
            })
        })
        map.on('mouseleave', 'venues', () => {
            map.getCanvas().style.cursor = ''

            // map.setFeatureState({
            //     source: 'composite',
            //     sourceLayer: 'placelayer_nov12-dworp9',
            //     id: this.state.placeHoveredStateId
            // }, { hover: false })

            this.state.mapPopup.remove()
        })
        // if click on the place points, we open the info box
        // and show info of the place
        map.on('mouseover', 'venues', (e) => {
            map.getCanvas().style.cursor = 'pointer'

            let data = e.features[0]
            let venueProps = data.properties

            this.setState({
                placeHoveredStateId: data.id
            })
            this.state.mapPopup.setLngLat(data.geometry.coordinates.slice())
                .setHTML(data.properties["Place"])
                .addTo(map)

            let least = [
                venueProps["no Red_least"],
                venueProps["no Yellow_least"],
                venueProps["no Blue_least"]
            ]
            let most = [
                venueProps["no Red_most"],
                venueProps["no Yellow_most"],
                venueProps["no Blue_most"]
            ]

            this.setState({
                venueFocus: true,
                lastSelectedVenue: venueProps,
                venueGraphData: {
                    least: this.computePlaceGraphData(least),
                    most: this.computePlaceGraphData(most)
                }
            })
        })
    }

    render() {
        // let lat = this.state.lat.toString().split('.')
        // let lng = this.state.lng.toString().split('.')
        // let zoom = parseInt(this.state.zoom)

        return (
            <div className="page" >


                <Route exact path="/map">
                    <Modal show={this.state.modal.showModal} 
                    onCloseBtn={this.closeModal} 
                    sid={this.state.modal.sid} />
                </Route> 

                <Route path="/map/story" >
                    <Modal show={this.state.modal.showModal}
                        onCloseBtn={this.closeModal}
                        sid={this.state.modal.sid} />
                </Route>

                <div className="dashboard" >
                    <div className="sidebar" >
                        <Sidebar
                            data={this.state.lastSelectedVenue}
                            graphData={this.state.venueGraphData} >

                            <SidebarEventInfo
                                data={this.state.lastSelectedVenue}
                                graphData={this.state.venueGraphData} />

                            <div className="sidebar-section crowd-info">
                                ciao1
                            </div>
                            <div className="sidebar-section scores">
                                ciao2
                            </div>
                            <div className="sidebar-section time">
                                ciao3
                            </div>
                        </Sidebar>

                        {/* <VenueBar
                            show={this.state.venueFocus}
                            data={this.state.lastSelectedVenue}
                            graphData={this.state.venueGraphData}
                            componentDidMount={this.scrollTop = this.scrollHeight} /> */}
                        {/* <SidebarComponentBubbles
                            zoom={this.state.zoom}
                            factions={this.state.factions}
                            rode={this.state.rode}
                            show={this.checkZoom()} /> */}
                    </div>
                </div>

                {/* <MapNavigator lat={lat} lng={lng} zoom={zoom} /> */}

                <div ref={el => this.mapContainer = el} className="mapContainer" > </div>
            </div>
        )
    }
}