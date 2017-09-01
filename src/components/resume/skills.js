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
      <div className='job' key={item.type}>
        <header className='job__header'>
          <div className='job__header-left'>
            <h3 className='job__title'>{item.human}</h3>
            <div className='job__explanation'>{item.meta}</div>
          </div>
        </header>
        <div className='projects__container'>
          {item.skills.map(renderSkills)}
        </div>
      </div>
    )
  }
  return (
    <section className='site-section'>
      <h2>Skills</h2>
      {props.items.map(renderType)}
    </section>
  )
}
export default Skills
