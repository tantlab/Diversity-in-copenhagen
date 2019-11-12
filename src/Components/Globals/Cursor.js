import React from 'react'

export default class Cursor extends React.Component {

    dimensions = 20

    inject = () => {
        let el = document.createElement("DIV")
        el.className = "_cursor"

        let style = this.cursor.elStyle

        el.style.position = style.position
        el.style.height = `${this.cursor.dimensions}px`
        el.style.width = `${this.cursor.dimensions}px`
        el.style.borderRadius = style.borderRadius
        el.style.backgroundColor = style.backgroundColor
        el.style.border = style.border
        el.style.zIndex = style.zIndex
        el.style.transition = style.transition
        el.style.pointerEvents = style.pointerEvents
        el.style.transformOrigin = 'center'

        document.body.appendChild(el)
    }
    
    updatePosition = (event) => {
        let el = document.getElementsByClassName("_cursor")[0]
        el.style.left = `${event.clientX - 20}px`
        el.style.top = `${event.clientY - 20}px`
    }
    
    hover = (boolean) => {
        let el = document.getElementsByClassName("_cursor")[0]
        if (boolean === true) {
            el.style.width = `${this.cursor.dimensions*2}px`
            el.style.height = `${this.cursor.dimensions*2}px`
        } else {
            el.style.width = `${this.cursor.dimensions}px`
            el.style.height = `${this.cursor.dimensions}px`
        }
    }

    elStyle = {
        zIndex: 9999,
        position: "absolute",
        left: 0,
        top: 0,
        dimensions: `${this.dimensions}px`,
        height: `${this.dimensions}px`,
        width: `${this.dimensions}px`,
        borderRadius: "100%",
        border: "2px solid white",
        transition: "width var(--tra) var(--crv), height var(--tra) var(--crv)",
        pointerEvents: "none"
    }
    
    componentDidMount() {
        this.cursor.inject()
        window.addEventListener('mousemove', (event) => {
            this.cursor.updatePosition(event)
            if (event.target && event.target.nodeName === "A") {
                this.cursor.hover(true)
            } else this.cursor.hover(false)
        })
    }
    
}