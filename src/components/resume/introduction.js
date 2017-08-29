import React from 'react'

const Introduction = props => {
  return (
    <section className='site-section'>
      <h2>Introduction</h2>
      <div
        dangerouslySetInnerHTML={{ __html: props.introduction }}
        className='introduction'
      />
    </section>
  )
}

export default Introduction
