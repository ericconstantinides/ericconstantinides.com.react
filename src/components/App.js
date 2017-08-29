import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../css/master.css'
import SiteHeader from './site-header'
import SiteFooter from './site-footer'
import Portfolio from './portfolio'
import Resume from './resume'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <SiteHeader />
        <Route exact path='/' component={Portfolio} />
        <Route path='/resume' component={Resume} />
        <SiteFooter />
      </div>
    )
  }
}

export default App
