import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// list of pages
import Home from './Home'
import About from './About'
import Data from './Data'
import Nav from './Globals/Nav'

import strings from '../_localization.js'
import { Provider } from 'react-globally'
// import Cursor from './Cursor'

const Main = () => {

    // To be changed once English support is ready
    // let languagePreference

    // if (localStorage.languagePreference === undefined) {
    //     // remembering language preferences
    //     languagePreference = navigator.language.split('-')[0]
    //     // console.log('no preference, setting...', languagePreference);
    //     localStorage.setItem('languagePreference', languagePreference)
    // } else {
    //     // setting retrieved language preferences
    //     languagePreference = localStorage.getItem('languagePreference')
    //     // console.log('preference found!', languagePreference);
    //     strings.setLanguage(languagePreference)
    // }
    strings.setLanguage('da')

    return (
        <Provider globalState={strings}>
            <BrowserRouter>
                <div className="App">

                    <Nav />
                    <Switch >
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/about" component={About}></Route>
                        <Route exact path="/method" component={Data}></Route>
                    </Switch>

                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default Main