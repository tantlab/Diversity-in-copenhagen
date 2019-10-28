import React from 'react'
import { Route, Switch } from 'react-router-dom'

// list of pages
import Home from './Home'
import Mappa from './Mappa'

const Main = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/map" component={Mappa}></Route>
        </Switch>
    )
}

export default Main