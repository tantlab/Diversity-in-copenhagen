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
                    <div className="reader-content">
                        <h1>A story about {props.sid}</h1>
                        <p>Lorem Ispum is a choke artist. It chokes! You’re disgusting.</p>
                        <p>I think the only card she has is the Lorem card. Lorem Ipsum better hope that there are no "tapes" of our conversations before he starts leaking to the press!</p>
                        <p>Lorem Ispum is a choke artist. It chokes! The other thing with Lorem Ipsum is that you have to take out its family. You could see there was text coming out of her eyes, text coming out of her wherever.</p>
                        <p>When other websites give you text, they’re not sending the best. They’re not sending you, they’re sending words that have lots of problems and they’re bringing those problems with us. They’re bringing mistakes. They’re bringing misspellings. They’re typists… And some, I assume, are good words.</p>
                        <p>I have a 10 year old son. He has words. He is so good with these words it's unbelievable. You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text. Lorem Ipsum better hope that there are no "tapes" of our conversations before he starts leaking to the press!</p>
                        <p>Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things.</p>
                        <p>Lorem Ipsum is FAKE TEXT! The best taco bowls are made in Trump Tower Grill. I love Hispanics!</p>
                        <p>We have so many things that we have to do better... and certainly ipsum is one of them. I don't think anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it was. It could be Russia, but it could also be China. It could also be lots of other people. It also could be some wordsmith sitting on their bed that weights 400 pounds. Ok?</p>
                    </div>
                </div>
            </div>
        </div>, document.getElementById("modal_root")
    )
}

export default Overlay