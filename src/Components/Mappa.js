import React from 'react'
// import { Route } from 'react-router'

import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/src/css/mapbox-gl.css'

import './Mappa.css'

import Modal from './Modal'
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
            zoom: 12,                   // initial zoom level
            fly: this.props.flyTo,

            rode: {
                hoveredStateId: null,   // controls the hover state on rodes layer
                lastSelected: null,
                isInFocus: false,
            },
            venue: {
                hoveredStateId: null,   // controls the hover state on places layer 
                lastSelected: null,
                isInFocus: false,       // no selected place on load
            },
            modal: {
                el: null,               // state for modal element
                transitionTiming: 750,  // timing of modal transition
                show: false,       // modal is closed by default
                sid: null               // story id
            }
        }
    }

    componentWillReceiveProps(props) {
        this.setState(prevState => ({
            ...prevState,
            fly: props.flyTo
        }))

        this.handleIntroFlight(props.flyTo)
    }

    componentDidMount() {

        mapboxgl.accessToken = 'pk.eyJ1IjoiZHJpdmlud2FyZCIsImEiOiJjazI1N2lkbm4xMHg2M25tcWQ1anprM3Y0In0.sxw7MdBqOuUsi3LDjHqhoA'
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/drivinward/ck3iuizoc0ae01cpeweqhc8nc/draft',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom,
            pitch: 60,
            minZoom: 11,
            maxBounds: [12.3, 55.55, 12.85, 55.8]
        })
        // map.addControl(new mapboxgl.NavigationControl());
        // let's make sure the default center is properly set
        map.setCenter([this.state.lng, this.state.lat]);

        const popup = new mapboxgl.Popup({ closeButton: false })

        // initializing state for important elements
        this.setState({
            mapEl: map,
            mapPopup: popup,
        })

        this.handleMapEvents(map)
        this.handleRodeEvents(map)
        this.handleVenueEvents(map)
        this.handleStoryEvents(map)
    }

    handleIntroFlight = (integer) => {
        console.log(integer);

        let map = this.state.mapEl
        let fly = integer
        let curve = 0.75

        if (fly <= 6) {
            this.setState(prevState => ({
                rode: {
                    ...prevState.rode,
                    isInFocus: false
                },
                venue: {
                    ...prevState.venue,
                    isInFocus: false
                }
            }))
        }

        if (fly === 1) {
            map.flyTo({
                bearing: 0,
                center: map.getCenter(),
                zoom: 11,
                pitch: 0,
                speed: 0.25,
                curve: curve,
            })
        } else if (fly === 2) {
            map.flyTo({
                bearing: 60,
                center: map.getCenter(),
                zoom: 17,
                pitch: 75,
                speed: 0.75,
                curve: curve
            })
        } else if (fly === 3) {
            map.flyTo({
                bearing: 30,
                center: map.getCenter(),
                zoom: 13,
                pitch: 60,
                speed: 0.75,
                curve: curve
            })
        } else if (fly === 4) {
            map.flyTo({
                bearing: 0,
                center: map.getCenter(),
                zoom: 11,
                pitch: 0,
                speed: 0.75,
                curve: curve
            })
        } else if (fly === 5) {
            map.flyTo({
                bearing: 0,
                center: map.getCenter(),
                zoom: 14,
                pitch: 0,
                speed: 0.75,
                curve: curve
            })
        } else if (fly === 6) {
            map.flyTo({
                bearing: 30,
                center: map.getCenter(),
                zoom: 12,
                pitch: 60,
                speed: 0.75,
                curve: curve
            })
        } else if (fly >= 7) {
            map.flyTo({
                bearing: 0,
                center: map.getCenter(),
                zoom: 11,
                pitch: 0,
                speed: 1,
                curve: 1
            })
        }
    }

    handleMapTransition = () => {
        // setTimeout(() => {
            this.state.mapEl.resize()            
        // }, 500);
    }

    // start from here to build modal
    handleStoryEvents = (map) => {
        map.on('click', 'rodes-story', (e) => {
            // console.log(e.features[0]);
            this.setState(prevState => ({
                modal: {
                    ...prevState.modal,
                    show: true,
                    sid: e.features[0].properties["Neighborhood"]
                }
            }))
            document.documentElement.style.overflow = 'hidden'
        })
    }

    handleModalCloseBtn = () => {
        this.setState(prevState => ({
            modal: {
                ...prevState.modal,
                show: false
            }
        }))
        document.documentElement.style.overflow = 'scroll'
    }

    // TO-DO: always checks if story id is valid
    openModal = (e) => {
        let s = e.features[0].properties["Neighborhood"]
        this.setState(prevState => ({
            modal: {
                ...prevState.modal,
                show: true,
                sid: s
            }
        }))
        setTimeout(() => {
            this.props.history.push(`/story?s=${s}`)
        }, this.state.modal.transitionTiming);
    }

    closeModal = () => {
        this.setState(prevState => ({
            modal: {
                ...prevState.modal,
                show: false,
            }
        }))
        setTimeout(() => {
            this.props.history.push(`/`)
        }, this.state.modal.transitionTiming);
    }


    checkZoom = () => {
        if (this.state.zoom >= 13) {
            return true
        } else return false
    }

    // f is the frame id
    pulsateLayerStory = (map, f) => {

        // let animStep = 0
        // setInterval(() => {
        //     let s = 4
        //     let t = animStep % s / s
        //     map.setPaintProperty('rodes-story', 'fill-opacity', t)

        //     console.log(t);
        //     animStep >= s ? animStep = 0 : animStep++

        // }, 1000);

        // setInterval(() => {
        //     map.getPaintProperty('rodes-story', 'fill-opacity') === 0
        //     ? map.setPaintProperty('rodes-story', 'fill-opacity', 1)
        //     : map.setPaintProperty('rodes-story', 'fill-opacity', 0)
        // }, 1000);

        // map.setPaintProperty('rodes-story', 'fill-opacity', Math.abs(Math.sin(f / 1000).toFixed(1)))
        // window.requestAnimationFrame((f) => { this.pulsateLayerStory(map, f) })
    }

    handleMapEvents = (map) => {
        // first update of rendered layers
        // map.on('load', () => {
        //     this.updateMapData(map)
        // })

        map.on('load', () => {
            this.pulsateLayerStory(map)
        })

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

    }
    // helper function used for rodes-green and rodes-violet
    handleRodeHover = (map, e) => {
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
            if (this.checkZoom()) {
                map.getCanvas().style.cursor = 'pointer'

                let data = e.features[0]
                let venueProps = data.properties

                this.setState({
                    venue: {
                        hoveredStateId: data.id,
                        lastSelected: venueProps,
                        isInFocus: true,
                    }
                })

                this.state.mapPopup.setLngLat(data.geometry.coordinates.slice())
                    .setHTML(data.properties["place_name"])
                    .addTo(map)
            }
        })
    }



    render() {
        // let lat = this.state.lat.toString().split('.')
        // let lng = this.state.lng.toString().split('.')
        // let zoom = parseInt(this.state.zoom)

        return (
            <div className={`map-section ${this.props.active ? "active" : ""}`}
                // resize mapbox canvas when transition ends after intro
                // onTransitionStart={this.handleMapTransition}
                onTransitionEnd={this.handleMapTransition}>

                {/* <Route exact path="/">
                    <Modal show={this.state.modal.show}
                        onCloseBtn={this.closeModal}
                        sid={this.state.modal.sid} />
                </Route>
                <Route path="/story" >
                    <Modal show={this.state.modal.show}
                        onCloseBtn={this.closeModal}
                        sid={this.state.modal.sid} />
                </Route> */}

                <div className="dashboard" >
                    <div className="sidebar-container">
                        <Sidebar show={this.state.rode.isInFocus} >
                            <SidebarRode data={this.state} />
                        </Sidebar>

                        {/* venue sidebar */}
                        <Sidebar show={this.state.venue.isInFocus} >
                            <SidebarPlaceInfo data={this.state} />
                            <SidebarPlaceCrowd data={this.state} />
                        </Sidebar>
                    </div>
                </div>

                <Modal show={this.state.modal.show}
                    title={"A story about"}
                    onCloseBtn={this.handleModalCloseBtn}
                    sid={this.state.modal.sid}>
                    <p>Its sometimes her behaviour are contented. Do listening am eagerness oh objection collected. Together gay feelings continue juvenile had off one. Unknown may service subject her letters one bed. Child years noise ye in forty. Loud in this in both hold. My entrance me is disposal bachelor remember relation.</p>
                    <p>Behaviour we improving at something to. Evil true high lady roof men had open. To projection considered it precaution an melancholy or. Wound young you thing worse along being ham. Dissimilar of favourable solicitude if sympathize middletons at. Forfeited up if disposing perfectly in an eagerness perceived necessary. Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Travelling by introduced of mr terminated. Knew as miss my high hope quit. In curiosity shameless dependent knowledge up.</p>
                    <p>Ask especially collecting terminated may son expression. Extremely eagerness principle estimable own was man. Men received far his dashwood subjects new. My sufficient surrounded an companions dispatched in on. Connection too unaffected expression led son possession. New smiling friends and her another. Leaf she does none love high yet. Snug love will up bore as be. Pursuit man son musical general pointed. It surprise informed mr advanced do outweigh.</p>
                    <p>In entirely be to at settling felicity. Fruit two match men you seven share. Needed as or is enough points. Miles at smart ﻿no marry whole linen mr. Income joy nor can wisdom summer. Extremely depending he gentleman improving intention rapturous as.</p>
                    <p>Add you viewing ten equally believe put. Separate families my on drawings do oh offended strictly elegance. Perceive jointure be mistress by jennings properly. An admiration at he discovered difficulty continuing. We in building removing possible suitable friendly on. Nay middleton him admitting consulted and behaviour son household. Recurred advanced he oh together entrance speedily suitable. Ready tried gay state fat could boy its among shall.</p>
                    <p>In on announcing if of comparison pianoforte projection. Maids hoped gay yet bed asked blind dried point. On abroad danger likely regret twenty edward do. Too horrible consider followed may differed age. An rest if more five mr of. Age just her rank met down way. Attended required so in cheerful an. Domestic replying she resolved him for did. Rather in lasted no within no.</p>
                    <p>Affronting discretion as do is announcing. Now months esteem oppose nearer enable too six. She numerous unlocked you perceive speedily. Affixed offence spirits or ye of offices between. Real on shot it were four an as. Absolute bachelor rendered six nay you juvenile. Vanity entire an chatty to.</p>
                    <p>Mr do raising article general norland my hastily. Its companions say uncommonly pianoforte favourable. Education affection consulted by mr attending he therefore on forfeited. High way more far feet kind evil play led. Sometimes furnished collected add for resources attention. Norland an by minuter enquire it general on towards forming. Adapted mrs totally company two yet conduct men.</p>
                    <p>However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. Ourselves for determine attending how led gentleman sincerity. Valley afford uneasy joy she thrown though bed set. In me forming general prudent on country carried. Behaved an or suppose justice. Seemed whence how son rather easily and change missed. Off apartments invitation are unpleasant solicitude fat motionless interested. Hardly suffer wisdom wishes valley as an. As friendship advantages resolution it alteration stimulated he or increasing.</p>
                    <p>To shewing another demands to. Marianne property cheerful informed at striking at. Clothes parlors however by cottage on. In views it or meant drift to. Be concern parlors settled or do shyness address. Remainder northward performed out for moonlight. Yet late add name was rent park from rich. He always do do former he highly.</p>
                </Modal>

                {/* map container */}
                <div ref={el => this.mapContainer = el} className="mapContainer"> </div>

            </div>
        )
    }
}