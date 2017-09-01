import React from 'react'
import BodyClassName from 'react-body-classname'
// import { render } from 'react-dom';
import resumeJS from '../content/resume.js'
import Header from './resume/header'
import Introduction from './resume/introduction'
import Experience from './resume/experience'
import Skills from './resume/skills'
// console.log(resumeJS)

const Resume = props => {
  return (
    <BodyClassName className='body--resume'>
      <div className='site-container'>
        <Header {...resumeJS.header} />
        <Introduction introduction={resumeJS.introduction} />
        <Skills items={resumeJS.skills} />
        <Experience
          name='Experience'
          propsClass=''
          items={resumeJS.experience}
        />
        <Experience
          name='Education'
          propsClass='job--no-padding'
          items={resumeJS.education}
        />
      </div>
    </BodyClassName>
  )
}

export default Resume
