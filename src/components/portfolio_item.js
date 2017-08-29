import React from 'react'

const PortfolioItem = props => {
  return (
    <article
      className='portfolio-item portfolio-item--large'
      data-id={props.id}
    >
      <div className='portfolio-item__inner'>
        <div className='portfolio-item__image-wrapper'>
          <img
            className='portfolio-item__image'
            src={'/images/' + props.screenshot}
            alt={`${props.title} screenshot`}
          />
        </div>
        <div className='portfolio-item__copy'>
          <h3 className='kicker'>
            <span>{props.role}</span>
            <span>{props.date}</span>
          </h3>
          <h2 className='portfolio-item__title'>{props.title}</h2>
          <p>{props.description}</p>
          {props.link}
        </div>
      </div>
    </article>
  )
}

export default PortfolioItem
