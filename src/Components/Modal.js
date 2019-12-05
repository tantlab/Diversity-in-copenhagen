import React from 'react'
import { createPortal } from 'react-dom'

import './Modal.css'

const Overlay = (props) => {

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
                    <div className="reader-story-title">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="reader-content">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>, document.getElementById("modal_root")
    )
}

export default Overlay