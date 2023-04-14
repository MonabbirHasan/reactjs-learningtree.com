import React from 'react'
import Home from './Home'
import Service from './Service'
import Contact from './Contact'
import About from './About'
import Navbar from './Navbar'
import Course from './Course'
import Course_Details from './Course_Details'
import { Switch, Route, Redirect } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/details" component={Course_Details}/>
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App
