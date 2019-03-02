import React, { Component } from 'react'
import BodyClassName from 'react-body-classname'
import DocumentTitle from 'react-document-title'

import PortfolioItem from './PortfolioItem'

import projects from '../content/projects'
import introduction from '../content/introduction'

export default class Portfolio extends Component {
  render () {
    const items = projects.map(item => (
      <PortfolioItem {...item} key={item.id} />
    ))
    return (
      <DocumentTitle title='Eric Constantinides | A web app developer in San Jose, CA'>
        <BodyClassName className='page--portfolio'>
          <section className='site-section portfolio__section'>
            <div className='site-container'>
              <header className='header portfolio__header'>
                <h1>Eric Constantinides' Portfolio</h1>
                <p>{introduction.homepage}</p>
                <h2>Projects</h2>
              </header>
              {items}
            </div>
          </section>
        </BodyClassName>
      </DocumentTitle>
    )
  }
}
