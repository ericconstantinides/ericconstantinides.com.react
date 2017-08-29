import React from 'react'

const Experience = props => {
  function renderProjects (project) {
    return (
      <article className='resume-project'>
        <div className='resume-project__image-wrapper'>
          <img
            className='resume-project__image'
            src={'/images/' + project.screenshot}
            alt=''
          />
        </div>
        <div className='resume-project__meta'>
          <h4 className='resume-project__title'>{project.title}</h4>
          <h4 className='resume-project__role'>{project.role}</h4>
        </div>
      </article>
    )
  }
  function renderPosition (position) {
    return (
      <div className='position'>
        <strong>{position.title}</strong> {position.meta}
      </div>
    )
  }
  function renderExperienceItems (item) {
    return (
      <article
        key={item.name}
        className='xxxprint-page-break-after xxxprint-dont-break'
      >
        <div className='print-avoid-break'>
          <div className='full-across'>
            <h3>{item.name}</h3>
            <p className='subhead'>{item.location}</p>
          </div>
          <p>
            <strong>
              {item.startDate} - {item.endDate}
            </strong>
            {item.position.map(renderPosition)}
          </p>
          <p>
            <strong>Responsibilities:</strong> {item.responsibilities}
          </p>
        </div>
        {item.projects.map(renderProjects)}
      </article>
    )
  }
  return <div>{props.items.map(renderExperienceItems)}</div>
}
export default Experience
