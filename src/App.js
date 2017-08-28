import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './css/master.css';
import Header from './components/header'
import Portfolio from './components/portfolio'
import Resume from './components/resume'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={Portfolio} />
        <Route path='/resume' component={Resume} />
      </div>
    );
  }
}

export default App;
