import React from 'react'

const Skills = props => {
  function renderSkills (item) {
    return <li key={item.type}>{item.skill}</li>
  }
  console.log(props)
  return <div>{props.items.map(renderSkills)}</div>
}
export default Skills
