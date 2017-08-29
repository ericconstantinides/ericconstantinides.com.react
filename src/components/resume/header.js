import React from 'react'

const Header = props => {
  return (
    <div className='site-section'>
      <header className='home-header resume-header'>
        <div className='image-wrapper print-column-1 resume-header__image-wrapper'>
          <img
            className='eric-photo resume-header__image'
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className='copy-wrapper print-column-2'>
          <h1>{props.name}</h1>
          <ul className='address'>
            <li>
              <a href={props.email} data-print-url='no'>
                {props.email}
              </a>
            </li>
            <li>{props.location}</li>
            <li>{props.phone}</li>
            <li className='social-links'>
              <a
                className='social-link social-link__github'
                href={`//github.com/${props.github}`}
                title='GitHub'
                target='_blank'
                data-print-url={`github.com/${props.github}`}
              >
                Github
              </a>
              <a
                className='social-link social-link__linkedin'
                href={`//linkedin.com/in/${props.linkedin}`}
                title='LinkedIn'
                target='_blank'
                data-print-url={`linkedin.com/in/${props.linkedin}`}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header
