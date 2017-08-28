import React from 'react'

const Skills = (props) => {
  function renderSkills(item) {
    return (
      <li key={item.skill}>
        {item.skill}
      </li>
    )
  }
  return (
    <div>{props.items.map(renderSkills)}</div>
  )
}
export default Skills