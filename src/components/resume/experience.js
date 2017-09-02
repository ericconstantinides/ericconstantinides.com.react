import React from 'react'

const Experience = props => {
  function renderProjects (project) {
    const title = project.alt_title ? project.alt_title : project.title
    const tech = project.primary_tech.map((tech, index) => (
      <span key={index} className={`project__meta-item item-${index}`}>
        {tech}
      </span>
    ))
    return (
      <article className='project' key={project.id}>
        <p className='project__inner project__meta'>
          <span className='project__title'>
            <span className='project__title-inner'>{title}</span>
          </span>{' '}
          ({project.date})
          <br />
          <strong>{project.role}</strong>, {tech}
        </p>
      </article>
    )
  }
  function renderPosition (position) {
    const meta = position.meta ? (
      <span className='job__position-meta'> ({position.meta})</span>
    ) : (
      ''
    )
    return (
      <div className='job__position' key={position.title}>
        <p>
          <strong>
            {position.title}
            {meta}:
          </strong>{' '}
          {position.info}
        </p>
      </div>
    )
  }
  function renderExperienceItems (item) {
    const date = item.startDate
      ? item.startDate + (item.endDate ? ' - ' + item.endDate : '')
      : ''
    const location = item.location ? (
      <span>
        {' '}
        in <span className='job__header-location'>{item.location}</span>
      </span>
    ) : (
      ''
    )
    const leftProjects = item.projects
      .filter((project, index) => {
        return index + 1 <= item.projects.length / 2
      })
      .map(renderProjects)
    const rightProjects = item.projects
      .filter((project, index) => {
        return index + 1 > item.projects.length / 2
      })
      .map(renderProjects)
    return (
      <article key={item.name} className='job print-avoid-break'>
        <header className='job__header'>
          <div className='job__header-left'>
            <h3 className='job__title'>
              {item.name}
              <div className='job__subtitle'>
                {item.description}
                {location}
              </div>
            </h3>
          </div>
          <div className='job__header-right'>
            <div className='job__header-date'>{date}</div>
          </div>
        </header>
        <div className='job__content'>{item.position.map(renderPosition)}</div>
        <p>
          <span className='project__meta'>Completed projects include:</span>
        </p>
        <div className='projects__container XXXXXprint-avoid-break'>
          <div className='projects__container--left'>{leftProjects}</div>
          <div className='projects__container--right'>{rightProjects}</div>
        </div>
      </article>
    )
  }
  return (
    <section className={`${props.propsClass} site-section`}>
      <h2>{props.name}</h2>
      {props.items.map(renderExperienceItems)}
    </section>
  )
}
export default Experience
