import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import '../css/master.css'
import Header from './header'
import Portfolio from './portfolio'
import Resume from './resume'

class App extends Component {
  render () {
    console.log(this)
    return (
      <div className='App'>
        <Header />
        <Route exact path='/' component={Portfolio} />
        <Route path='/resume' component={Resume} />
      </div>
    )
  }
}

export default App
