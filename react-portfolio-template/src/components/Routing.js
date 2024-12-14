import React from 'react'
import Root from './Root'
import Footer from './Footer'
import About from './About'
import Home from './Home'
import Header from './Header'
import Skills from './Skills'
import Contact from './Contact'
import { Switch } from 'react-router-dom/cjs/react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import Project from './Project'


const Routing = () => {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path ="/" component={Root}></Route>
        <Route exact path ="/home" component={Home}></Route>
        <Route exact path ="/about" component={About}></Route>
        <Route exact path ="/skills" component={Skills}></Route>
        <Route exact path ="/project" component={Project}></Route>
        <Route exact path ="/contact" component={Contact}></Route>
      </Switch>
    <Footer/>
    </>
  )
}

export default Routing
