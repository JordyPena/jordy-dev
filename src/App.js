import React from 'react'
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Nav from "./components/Nav"
import {Route} from "react-router-dom"

function App() {
  return (
    <>
      <div>
        <Route component={Nav}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Projects" component={Projects}/>
        <Route exact path="/Contact" component={Contact}/>
      </div>
    </>
  )
}

export default App
