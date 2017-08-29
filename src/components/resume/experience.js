import React from 'react'

const Experience = props => {
  function renderProjects (project) {
    const title = project.alt_title ? project.alt_title : project.title
    const tech = project.primary_tech.map(tech => (
      <span className='project__tech-item'>{tech}</span>
    ))
    return (
      <article className='project' key={title}>
        <div className='project__inner'>
          <div className='project__primary'>
            <div className='project__image-wrapper'>
              <img
                className='project__image'
                src={'/images/' + project.screenshot}
                alt=''
              />
            </div>
            <div className='project__meta'>
              <h4 className='project__role'>{project.role}</h4>
              <h3 className='project__title'>{title}</h3>
            </div>
          </div>
          <p className='project__tech project__meta'>
            <strong>Primary Tech:</strong> {tech}
          </p>
        </div>
      </article>
    )
  }
  function renderPosition (position) {
    return (
      <div className='position' key={position.title}>
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
          {/* <p> */}
          {/* <strong>Responsibilities:</strong> {item.responsibilities} */}
          {/* </p> */}
        </div>
        <div className='projects__container'>
          {item.projects.map(renderProjects)}
        </div>
      </article>
    )
  }
  return <div>{props.items.map(renderExperienceItems)}</div>
}
export default Experience
