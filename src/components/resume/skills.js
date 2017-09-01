import React from 'react'

const Skills = props => {
  function renderSubSkills (skills) {
    const subSkills = skills
      ? skills.map((skill, index) => (
          <span key={index} className={`project__meta-item item-${index}`}>
            {skill}
          </span>
        ))
      : ''
    return <span>{subSkills}</span>
  }
  function renderSkills (item) {
    return (
      <div className='project project--skills' key={item.skill}>
        <p className='project__inner project__meta u-mb-0'>
          <span className='project__title'>
            <span className='project__title-inner'>{item.skill}</span>
          </span>, {renderSubSkills(item.subSkills)}
        </p>
      </div>
    )
  }
  function renderType (item) {
    return (
      <section className='site-section' key={item.type}>
        <h2 className='XXXskill__type-container-title'>{item.human}</h2>
        <div className='projects__container'>
          {item.skills.map(renderSkills)}
        </div>
      </section>
    )
  }
  return <div>{props.items.map(renderType)}</div>
}
export default Skills
