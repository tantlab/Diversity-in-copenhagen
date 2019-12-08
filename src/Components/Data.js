import React from "react"
import uuid from "uuid"

import strings from "../_localization"

import "./Page.css"

const Data = () => {

    const pageContent = (array) => {
        return array.map(section => {
            return (
                <div className="page-section">
                    {section.map(el => {
                        switch (el.type) {
                            case 'title':
                                return (<div key={uuid()} className="page-title">{el.copy}</div>)
                            case 'paragraph':
                                return (<div key={uuid()} className="page-paragraph">{el.copy}</div>)
                            case 'quote':
                                return (<div key={uuid()} className="page-quote">{el.copy}</div>)
                            case 'caption':
                                return (<div key={uuid()} className="page-caption">{el.copy}</div>)
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
                    })}
                </div>
            )
        })
    }

    return (
        <div className="secondary-page">

            <div className="page-hero">
                <div className="page-hero-title">
                    {strings.data.title}
                </div>
            </div>

            {pageContent(strings.data.content)}

            <div className="page-conclusion">
                Vi håber at du nu har et fundament fro at forstå hvad du ser på det Københavnske diversitetskort. Hvis du har spørgsmål til metoden er du velkomment il at skrive til Anders Koed Madsen på <a href="mailto:akma@hum.aau.dk">akma@hum.aau.dk</a>.
            </div>

        </div>
    )
}

export default Data