import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../css/master.css'
import SiteHeader from './site-header'
import SiteFooter from './site-footer'
import Portfolio from './portfolio'
import Resume from './resume'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-50643936-1')

/**
 * @return {null}
 */
function Analytics (props) {
  ReactGA.set({ page: props.location.pathname + props.location.search })
  ReactGA.pageview(props.location.pathname + props.location.search)
  return null
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <SiteHeader />
        <Route path='/' component={Analytics} />
        <Route exact path='/' component={Portfolio} />
        <Route path='/resume' component={Resume} />
        <SiteFooter />
      </div>
    )
  }
}

export default App
