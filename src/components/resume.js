import React from 'react'
// import { render } from 'react-dom';
import resumeJS from '../content/resume.js'
import Header from './resume/header'
import Introduction from './resume/introduction'
import Experience from './resume/experience'
import Skills from './resume/skills'
// console.log(resumeJS)

const Resume = (props) => {
  return (
    <div className='site-container'>
      <Header {...resumeJS.header} />
      <Introduction introduction={resumeJS.introduction} />
      <Experience items={resumeJS.experience} />
      <Skills items={resumeJS.skills} />
      <Experience items={resumeJS.education} />
    </div>
  )
}

export default Resume