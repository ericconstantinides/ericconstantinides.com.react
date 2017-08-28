import React from 'react'

const Introduction = (props) => {
  return (
    <section dangerouslySetInnerHTML={{ __html: props.introduction }}
      className='introduction'
    />
  )
}

export default Introduction