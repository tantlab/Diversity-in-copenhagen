import React from 'react'
import uuid from 'uuid'
import { createPortal } from 'react-dom'

import './Modal.css'
import './Page.css'

import stories from '../_stories.js'

const Overlay = (props) => {

    const whichStory = (id) => {
        if (id !== undefined && id !== null) {
            const content = stories.filter(story => {
                return story.id === id
            })
            return content[0] !== undefined ? content[0] : ''
        } else return 'no title'
    }

    const pageContent = (array) => {
        return array.map(el => {
            switch (el.type) {
                case 'title':
                    return (<div key={uuid()} className="page-title">{el.copy}</div>)
                case 'paragraph':
                    return (<div key={uuid()} className="page-paragraph">{el.copy}</div>)
                case 'quote':
                    return (<div key={uuid()} className="page-quote">{el.copy}</div>)
                case 'images':
                    return (
                        <div key={uuid()} className="page-images">
                            {el.source.map(source => {
                                return (
                                    <div key={uuid()} className="page-image-container">
                                        <img key={uuid()} className="page-image" src={source} alt="some kind of thing" />
                                    </div>
                                )
                            })}
                        </div>
                    )
                default:
                    break
            }
        })
    }

    return createPortal(
        <div className={`modal ${props.show ? 'show' : ''}`}>
            <div className="overlay" onClick={props.onCloseBtn}></div>
            <div className="reader">
                <div className="reader-toolbar">
                    <div className="close" onClick={props.onCloseBtn}>
                        <div className="line" />
                        <div className="line" />
                    </div>
                </div>
                <div className="reader-content-area">
                    <div className="reader-story-intro">
                        <h1>{whichStory(props.sid).title}</h1>
                        <div className="intro-subtitle">
                            {whichStory(props.sid).subtitle}
                        </div>
                    </div>

                    <div className="reader-content">
                        {props.sid !== null ? (
                            whichStory(props.sid).sections.map(section => {
                                return (
                                    <div key={uuid()} className="story-section">
                                        {pageContent(section)}
                                        {/* <div key={uuid()} className="story-title">{section.title}</div> */}
                                        {/* <div key={uuid()} className="story-paragraph">{section.copy}</div> */}
                                    </div>
                                )
                            })
                        ) : ''}

                    </div>
                </div>
            </div>
        </div>, document.getElementById("modal_root")
    )
}

export default Overlay