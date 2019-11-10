import React from 'react'

import './Modal.css'

export default class Overlay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    handleClick() {
        console.log("modal closed")
    }

    render() {

        // show nothing if "show" prop is false
        // if (!this.props.show) {
        //     return null
        // }

        return (
            <div className={`modal ${this.props.show ? 'show' : ''}`}>
                <div className="overlay"></div>
                <div className="reader">
                    <div className="reader-toolbar">
                        <div className="close" onClick={this.props.onClose}>
                            <div className="line" />
                            <div className="line" />
                        </div>
                    </div>
                    <div className="reader-content-area">
                        <div className="reader-content">
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}