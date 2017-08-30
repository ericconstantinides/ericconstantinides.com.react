import React from 'react'

const Skills = props => {
  function renderSubSkills (skills) {
    const subSkills = skills
      ? skills.map(skill => (
          <div className='skill__item skill__item--subskill' key={skill}>
            {skill}
          </div>
        ))
      : ''
    return (
      <div className='project__meta skill__list skill__list--subskill'>
        {subSkills}
      </div>
    )
  }
  function renderSkills (item) {
    return (
      <div className='project project--skinny' key={item.skill}>
        <div className='project__inner'>
          <h3 className='project__title'>{item.skill}</h3>
          {renderSubSkills(item.subSkills)}
        </div>
      </div>
    )
  }
  function renderType (item) {
    return (
      <section className='site-section' key={item.type}>
        <h2 className='XXXskill__type-container-title'>{item.human}</h2>
        <div className='projects__container print-avoid-break'>
          {item.skills.map(renderSkills)}
        </div>
      </section>
    )
  }
  return <div>{props.items.map(renderType)}</div>
}
export default Skills
