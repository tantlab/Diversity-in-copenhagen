import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// list of pages
import Home from './Home'
import Mappa from './Mappa'

import './Main.css'

const Main = () => {
    return (
        <Route render={({ location }) => (
            <TransitionGroup>
                <CSSTransition key={location.key}
                    timeout={300}
                    classNames="fade">
                    <Switch location={location}>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/map" component={Mappa}></Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        )}></Route>
    )
}

export default Main