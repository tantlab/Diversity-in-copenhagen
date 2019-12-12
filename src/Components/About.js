import React from "react"
import uuid from "uuid"

import about_strings from "../_about_strings"

import "./Page.css"

const About = () => {

    const pageContent = (array) => {
        return array.map(section => {
            return (
                <div key={uuid()} className="page-section">
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
                            case 'people':
                                return (
                                    <div className="page-people-section">
                                        {el.list.map(person => {
                                            return (
                                                <div key={uuid()} className="page-person">
                                                    <div className="page-people-img-container">
                                                        <img src={person.img} alt="Profile" />
                                                    </div>
                                                    <div className="page-people-name">{person.name}</div>
                                                    {person.fields.map(field => {
                                                        switch (field.type) {
                                                            case 'text':
                                                                return (<div key={uuid()} className="page-people-textfield">{field.value}</div>)
                                                            case 'mailto':
                                                                return (<a key={uuid()} href={`mailto:${field.value}`} className="page-people-textfield">{field.value}</a>)
                                                            case 'link':
                                                                return (<a key={uuid()} href={`${field.value}`} target="_blank" rel="noopener noreferrer" className="page-people-textfield">{field.value}</a>)
                                                            default:
                                                                break
                                                        }
                                                    })}
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
                    {about_strings.title}
                </div>
            </div>

            {pageContent(about_strings.content)}

            <div className="page-conclusion">
                {/* Vi håber at du nu har et fundament fro at forstå hvad du ser på det Københavnske diversitetskort. Hvis du har spørgsmål til metoden er du velkomment il at skrive til Anders Koed Madsen på <a href="mailto:akma@hum.aau.dk">akma@hum.aau.dk</a>. */}
            </div>

        </div>
    )
}

export default About