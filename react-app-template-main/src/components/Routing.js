import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Default from './Default'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Herosection from './Herosection'

const Routing = () => {
  return (
    <>
        < Header/>
      <Switch>
      <Route exact path ="/" component={Default}></Route>
        <Route exact path ="/home" component={Home}></Route>
        <Route exact path ="/about" component={About}></Route>
        <Route exact path ="/herosection" component={Herosection}></Route>
        <Route exact path ="/contact" component={Contact}></Route>
      </Switch>
      <Footer/>
    </>
  )
}

export default Routing
