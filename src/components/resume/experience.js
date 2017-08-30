import React from 'react'

const Experience = props => {
  function renderProjects (project) {
    const title = project.alt_title ? project.alt_title : project.title
    const tech = project.primary_tech.map(tech => (
      <span key={tech} className='project__meta-item'>
        {tech}
      </span>
    ))
    return (
      <article className='project' key={project.id}>
        <div className='project__inner'>
          <h3 className='project__title'>{title}</h3>
          <p className='project__meta'>
            <strong>Role:</strong> {project.role}
            <br />
            <strong>Tech:</strong> {tech}
          </p>
        </div>
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
    return (
      <article key={item.name} className='job'>
        <div className='print-avoid-break'>
          <header className='job__header'>
            <div className='job__header-left'>
              <h3 className='job__title'>
                {item.name}
                <div className='job__subtitle'>
                  {item.description} in{' '}
                  <span className='job__header-location'>{item.location}</span>
                </div>
              </h3>
            </div>
            <div className='job__header-right'>
              <div className='job__header-date'>{date}</div>
            </div>
          </header>
          {item.position.map(renderPosition)}
          {/* <p> */}
          {/* <strong>{item.position[0].title}:</strong> {item.responsibilities} */}
          {/* </p> */}
        </div>
        <div className='projects__container print-avoid-break'>
          {item.projects.map(renderProjects)}
        </div>
      </article>
    )
  }
  return (
    <section className='site-section'>
      <h2>Experience</h2>
      {props.items.map(renderExperienceItems)}
    </section>
  )
}
export default Experience
