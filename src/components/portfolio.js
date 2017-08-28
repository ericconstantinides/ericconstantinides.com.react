import React, { Component } from 'react'
// import JSON data here:
import portfolioJSON from '../content/portfolio.json'
import PortfolioItem from './portfolio_item'

export default class Portfolio extends Component {
  render () {
    const items = portfolioJSON.map(item => <PortfolioItem {...item} key={item.id} />)
    return <div>{items}</div>
  }
}