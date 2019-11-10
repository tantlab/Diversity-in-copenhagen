import React from 'react'
import { Redirect } from 'react-router-dom'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/src/css/mapbox-gl.css'

import SidebarComponentBubbles from './Dashboard/SidebarComponentBubbles'
import './Mappa.css'
import VenueBar from './Dashboard/VenueBar'
import Modal from './Modal'

export default class Mappa extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            lat: 55.675,                // coordinates of copenhagen's center (?)
            lng: 12.57,
            zoom: 18,
            factions: [],
            isSelectedVenue: false,     // no selected place on load
            modalOpen: false            // modal is closed by default
        }
    }

    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen })
    }

    handleVenueClick = () => {
        this.setState({ redirect: true });
    }

    getAvgValues = (data) => {
        if (data.length > 0) {
            let c = [[], [], []]
            data.forEach(element => {
                c[0].push(element.properties['Red Percent']);
                c[1].push(element.properties['Yellow Percent']);
                c[2].push(element.properties['Blue Percent']);
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

        map.on('mouseenter', 'venues', (e) => {
            map.getCanvas().style.cursor = 'pointer'
        })
        map.on('mouseleave', 'venues', (e) => {
            map.getCanvas().style.cursor = ''
        })
        map.on('click', (e) => {
            this.setState({
                isSelectedVenue: false
            })
        })
        map.on('click', 'venues', (e) => {
            let venueProps = e.features[0].properties
            this.setState({
                isSelectedVenue: true,
                lastSelectedVenue: venueProps
            })
            this.handleVenueClick()
            this.toggleModal()
        })

    }

    render() {
        let lat = this.state.lat.toString().split('.')
        let lng = this.state.lng.toString().split('.')
        let zoom = this.state.zoom.toFixed(4)

        if (this.state.redirect) {
            return <Redirect push to="/map/story" />
        }

        return (
            <div className="page">

                {/* maybe should use BrowserRouter/Route here to handle modal showing? */}
                <Modal show={this.state.modalOpen} onClose={this.toggleModal}>
                    <p>Lorem Ispum is a choke artist. It chokes! You’re disgusting.</p>
                    <p>I think the only card she has is the Lorem card. Lorem Ipsum better hope that there are no "tapes" of our conversations before he starts leaking to the press!</p>
                    <p>Lorem Ispum is a choke artist. It chokes! The other thing with Lorem Ipsum is that you have to take out its family. You could see there was text coming out of her eyes, text coming out of her wherever.</p>
                    <p>When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words.</p>
                    <p>I have a 10 year old son. He has words. He is so good with these words it's unbelievable. You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text. Lorem Ipsum better hope that there are no "tapes" of our conversations before he starts leaking to the press!</p>
                    <p>Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things.</p>
                    <p>Lorem Ipsum is FAKE TEXT! The best taco bowls are made in Trump Tower Grill. I love Hispanics!</p>
                    <p>We have so many things that we have to do better... and certainly ipsum is one of them. I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok?</p>
                </Modal>

                <div className="dashboard">
                    <div className="sidebar">

                        <VenueBar place={this.state.lastSelectedVenue} isOpen={this.state.isSelectedVenue} />

                        <SidebarComponentBubbles
                            title="Factions"
                            zoom={this.state.zoom}
                            factions={this.state.factions} />

                    </div>
                </div>

                <div className="navigator">
                    <div className="title">Navigator</div>
                    <div className="navigator-field parameter">
                        <span>Lat</span> <span>{lat[0]}'&#9;{lat[1]}''</span>
                    </div>
                    <div className="navigator-field parameter">
                        <span>Lon</span> <span>{lng[0]}'&#9;{lng[1]}''</span>
                    </div>
                    <div className="navigator-field parameter">
                        <span>Zoom</span> <span>{Math.round(zoom)}</span>
                    </div>
                </div>

                <div ref={el => this.mapContainer = el} className='mapContainer'></div>
            </div>
        )
    }

}