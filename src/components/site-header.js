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
                Home / Portfolio
              </Link>
              <Link to='/resume' className='main-nav__item'>
                Résume
              </Link>
              <a
                href='/Eric_Constantinides_resume.pdf'
                target='_blank'
                className='main-nav__item'
                title='Literally the résumé page saved as a PDF'
              >
                PDF Résume
              </a>
            </nav>
          </div>
        </div>
        <header className='site-header valprop__header'>
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
        </header>
      </section>
    )
  }
}
