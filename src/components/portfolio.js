import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'
// import JSON data here:
import portfolioJSON from '../content/portfolio.json'
import PortfolioItem from './portfolio_item'

export default class Portfolio extends Component {
  render () {
    const items = portfolioJSON.map(item => (
      <PortfolioItem {...item} key={item.id} />
    ))
    return (
      <BodyClassName className='page--portfolio'>
        <section className='site-section portfolio__section'>
          <div className='site-container'>
            <header className='header portfolio__header'>
              <h1>Projects</h1>
              <p className='portfolio__intro'>
                A list of major websites and apps I have been lead developer on.
              </p>
            </header>
            {items}
          </div>
        </section>
      </BodyClassName>
    )
  }
}
