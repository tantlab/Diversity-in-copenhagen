import React from 'react'
// import { Route } from 'react-router'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/src/css/mapbox-gl.css'

import './Mappa.css'

// import Modal from './Modal'
import Sidebar from './Dashboard/Sidebar'
import SidebarRode from './Dashboard/SidebarRode'
import SidebarPlaceInfo from './Dashboard/SidebarPlaceInfo'
import SidebarPlaceCrowd from './Dashboard/SidebarPlaceCrowd'

// import MapNavigator from './Dashboard/MapNavigator'
// import SidebarComponentBubbles from './Dashboard/Charts/SidebarComponentBubbles'
// import VenueBar from './Dashboard/VenueBar'

export default class Mappa extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lat: 55.675,                // coordinates of 
            lng: 12.57,                 // Copenhagen's center
            zoom: 11,                   // initial zoom level

            factions: [0, 0, 0],        // red, yellow, blue percentage
            rode: {
                hoveredStateId: null,   // controls the hover state on rodes layer
                lastSelected: null,
                isInFocus: false,
            },
            venue: {
                hoveredStateId: null,   // controls the hover state on places layer 
                lastSelected: null,
                isInFocus: false,       // no selected place on load
                graphData: {
                    least: [0, 0, 0],
                    most: [0, 0, 0]
                }
            },
            modal: {
                el: null,               // state for modal element
                transitionTiming: 750,  // timing of modal transition
                showModal: false,       // modal is closed by default
                sid: null               // story id
            }
        }
    }

    componentDidMount() {

        mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmlud2FyZCIsImEiOiJjazI1N2lkbm4xMHg2M25tcWQ1anprM3Y0In0.sxw7MdBqOuUsi3LDjHqhoA'
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/drivinward/ck3iuizoc0ae01cpeweqhc8nc/draft',
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

    // calculates factions presence in current viewing area
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

    // update features in view during map move
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
        // map.on('load', () => {
        //     this.updateMapData(map)
        // })

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom(),
            })

            // handle events for place layer
            // if we zoom out, close place sidebar
            if (!this.checkZoom() && this.state.venue.isInFocus === true) {
                this.setState(prevState => ({
                    venue: {
                        ...prevState.venue,
                        isInFocus: false
                    }
                }))
                // if we zoom in and there's one place selected, open place sidebar
            } else if (this.checkZoom() && this.state.venue.isInFocus === false && this.state.venue.lastSelected !== null) {
                this.setState(prevState => ({
                    venue: {
                        ...prevState.venue,
                        isInFocus: true
                    }
                }))
            }

            // handle events for rode layer
            // if we zoom out and a rode is selected
            if (!this.checkZoom() && this.state.rode.lastSelected !== null) {
                this.setState(prevState => ({
                    rode: {
                        ...prevState.rode,
                        isInFocus: true
                    }
                }))
                // if we zoom in, close rode sidebar
            } else if (this.checkZoom() && this.state.rode.isInFocus === true && this.state.rode.lastSelected !== null) {
                this.setState(prevState => ({
                    rode: {
                        ...prevState.rode,
                        isInFocus: false
                    }
                }))
            }
        })

        // map.on('moveend', () => {
        //     this.updateMapData(map)
        // })
    }

    handleRodeEvents = (map) => {

        // click to open story
        map.on('click', 'rodes', (e) => {
            if (!this.checkZoom()) {
                this.openModal(e)
            }
        })

        map.on('mousemove', 'rodes-violet', (e) => {
            this.handleRodeHover(map, e)
        })

        map.on('mousemove', 'rodes-green', (e) => {
            this.handleRodeHover(map, e)
        })

        map.on('mouseleave', 'rodes-violet', () => {
            map.getCanvas().style.cursor = ''
            this.state.mapPopup.remove()
        })
        map.on('mouseleave', 'rodes-green', () => {
            map.getCanvas().style.cursor = ''
            this.state.mapPopup.remove()
        })

        // map.on('moveend', 'rodes', (e) => {

        //     // calculating which area we are in
        //     function inside(point, vs) {
        //         // ray-casting algorithm based on
        //         // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

        //         var x = point[0],
        //             y = point[1];

        //         var inside = false;
        //         for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        //             var xi = vs[i][0],
        //                 yi = vs[i][1];
        //             var xj = vs[j][0],
        //                 yj = vs[j][1];

        //             var intersect = ((yi > y) !== (yj > y)) &&
        //                 (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        //             if (intersect) inside = !inside;
        //         }

        //         return inside;
        //     };

        //     let ids = e.features.filter(f => {
        //         return (inside(map.getCenter().toArray(), f.geometry.coordinates[0]) === true)
        //     })

        //     if (ids[0] !== undefined) {
        //         this.setState(prevState => ({
        //             rode: {
        //                 ...prevState.rode,
        //                 name: ids[0].properties["Rode"],
        //                 // div score of polygon area
        //                 diversity: ids[0].properties["DIV SCORE POLY"]
        //             }
        //         }))
        //         // console.log(ids[0].properties["Rode"], ids[0].properties["DIV SCORE POLY"]);
        //     } else return
        // })
    }
    // helper function used for rodes-green and rodes-violet
    handleRodeHover = (map, e) => {
        map.getCanvas().style.cursor = 'pointer'

        if (e.features.length > 0 && !this.checkZoom()) {
            map.getCanvas().style.cursor = 'pointer'

            this.setState(prevState => ({
                rode: {
                    ...prevState.rode,
                    hoveredStateId: e.features[0].id,
                    lastSelected: e.features[0],
                    isInFocus: true
                }
            }))

            let popupCoords =
                e.features[0].geometry.coordinates[0][0].length > 2 ?
                    e.features[0].geometry.coordinates[0][0][0] :
                    e.features[0].geometry.coordinates[0][0]

            this.state.mapPopup.setLngLat(popupCoords)
                .setHTML(`
                        ${e.features[0].properties["Rode"]}</br>
                        ${e.features[0].properties["Neighborhood"]}
                    `)
                .addTo(map)

            // set hover state for polygons
            // map.setFeatureState({
            //     source: 'composite',
            //     sourceLayer: 'rode_layer-Rode-7dz4s4',
            //     id: this.state.rode.hoveredStateId
            // }, {
            //     hover: true
            // });
            
        }
    }



    handleVenueEvents = (map) => {
        // if click on the map (not on place points) we close the sidebar
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
            this.state.mapPopup.remove()
        })
        // if click on the place points, we open the sidebar
        // and show info of the place
        map.on('mousemove', 'venues', (e) => {
            map.getCanvas().style.cursor = 'pointer'

            let data = e.features[0]
            let venueProps = data.properties

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

            if (this.checkZoom()) {
                this.setState({
                    venue: {
                        hoveredStateId: data.id,
                        lastSelected: venueProps,
                        isInFocus: true,
                        graphData: {
                            least: computePlaceGraphData(least),
                            most: computePlaceGraphData(most)
                        }
                    }
                })
            }

            this.state.mapPopup.setLngLat(data.geometry.coordinates.slice())
                .setHTML(data.properties["Place_Name"])
                .addTo(map)

            function computePlaceGraphData(array) {
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

        })
    }



    render() {
        // let lat = this.state.lat.toString().split('.')
        // let lng = this.state.lng.toString().split('.')
        // let zoom = parseInt(this.state.zoom)

        return (
            <div className="map-section" >
                {/* <Route exact path="/map">
                    <Modal show={this.state.modal.showModal}
                        onCloseBtn={this.closeModal}
                        sid={this.state.modal.sid} />
                </Route>
                <Route path="/map/story" >
                    <Modal show={this.state.modal.showModal}
                        onCloseBtn={this.closeModal}
                        sid={this.state.modal.sid} />
                </Route> */}

                <div className="dashboard" >

                    <Sidebar show={this.state.rode.isInFocus} >
                        <SidebarRode data={this.state} />
                    </Sidebar>

                    {/* venue sidebar */}
                    <Sidebar show={this.state.venue.isInFocus} >
                        <SidebarPlaceInfo data={this.state} />
                        <SidebarPlaceCrowd data={this.state} />
                    </Sidebar>

                </div>

                {/* <MapNavigator lat={lat} lng={lng} zoom={zoom} /> */}

                <div ref={el => this.mapContainer = el} className="mapContainer" > </div>
            </div>
        )
    }
}