import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    // const bg = 'background-image: url(/images/photo--transamerica.jpg)'
    return (
      <section className="valprop valprop--portfolio">
        <header className="valprop__header">
          <div className="site-container">
            <h1 className="valprop__title">Eric Constantinides' Portfolio</h1>
          </div>
          <div className="intro__container">
            <div className="site-container">
              <p className="intro"></p>
            </div>
          </div>
        </header>
      </section>
    )
  }
}
