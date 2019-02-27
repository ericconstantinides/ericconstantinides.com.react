import React from 'react'
import BodyClassName from 'react-body-classname'
import DocumentTitle from 'react-document-title'
// import { render } from 'react-dom';
import resumeJS from '../content/resume.js'
import Header from './resume/Header'
import Introduction from './resume/Introduction'
import Experience from './resume/Experience'
import Skills from './resume/Skills'
// console.log(resumeJS)

const Resume = props => {
  return (
    <DocumentTitle title={`Resume | ${resumeJS.header.name}`}>
      <BodyClassName className='body--resume'>
        <div className='site-container'>
          <Header {...resumeJS.header} />
          <Introduction introduction={resumeJS.introduction} />
          <Experience
            name='Experience'
            propsClass=''
            items={resumeJS.experience}
          />
          <Skills items={resumeJS.skills} />
          <Experience
            name='Education'
            propsClass='job--no-padding'
            items={resumeJS.education}
          />
        </div>
      </BodyClassName>
    </DocumentTitle>
  )
}

export default Resume
