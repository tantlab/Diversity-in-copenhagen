import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// try using Pose library


// list of pages
import Home from './Home'
import Nav from './Globals/Nav'

// import Cursor from './Cursor'

const Main = () => {
    return (
        <BrowserRouter>
            <div className="App">

                <Nav />
                <Switch >
                    <Route exact path="/" component={Home}></Route>
                    {/* <Route path="/map" component={Mappa}></Route> */}
                </Switch>

            </div>
        </BrowserRouter>
    )
}

export default Main