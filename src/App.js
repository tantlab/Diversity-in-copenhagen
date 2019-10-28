import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Nav from './Components/Nav'
import Main from './Components/Main'

// import logo from './logo.svg'
import './App.css'

function App() {

  return (
    
    <BrowserRouter>

      <div className="App">

        <Nav />

        <Main />

      </div>

    </BrowserRouter>
    
  )

}

export default App;
