import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// try using Pose library


// list of pages
import Home from './Home'
import Nav from './Globals/Nav'

// import Cursor from './Cursor'

const ColorTheme = React.createContext({
    r: "#f06666",
    y: "#f7cc5f",
    b: "#1d62ed",
    g: "#39b87f",
})

const Main = () => {
    return (
        <BrowserRouter>
            <ColorTheme.Provider>
                <div className="App">

                    <Nav />
                    <Switch >
                        <Route exact path="/" component={Home}></Route>
                        {/* <Route path="/map" component={Mappa}></Route> */}
                    </Switch>

                </div>
            </ColorTheme.Provider>
        </BrowserRouter>
    )
}

export default Main