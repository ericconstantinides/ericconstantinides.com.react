import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class SiteHeader extends Component {
  render () {
    return (
      <section className='site-header__container valprop valprop--portfolio'>
        <div className='main-nav__container'>
          <div className='site-container'>
            <nav className='main-nav'>
              <Link to='/' className='main-nav__item'>
                Home<span className='u-small-hide--inline'> / Portfolio</span>
              </Link>
              <Link to='/resume' className='main-nav__item'>
                Resume
              </Link>
              <a
                href='/Eric_Constantinides_resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='main-nav__item main-nav__item--pdf'
                title='Literally the resume page saved as a PDF'
              >
                PDF Resume
              </a>
              <a
                href='//muddlingthroughcode.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='main-nav__item external-link external-link--white'
              >
                Blog
              </a>
            </nav>
          </div>
        </div>
        {/* <header className='site-header valprop__header'>
          <div className='site-container'>
            <h1 className='site-header__title valprop__title'>
              Eric Constantinides' Portfolio
            </h1>
          </div>
          <div className='site-header__intro-container intro__container'>
            <div className='site-container'>
              <p className='site-header__intro intro' />
            </div>
          </div>
        </header> */}
      </section>
    )
  }
}
