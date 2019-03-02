import React from 'react'
import BodyClassName from 'react-body-classname'
import DocumentTitle from 'react-document-title'

import Header from './resume/Header'
import Introduction from './resume/Introduction'
import Experience from './resume/Experience'
import Skills from './resume/Skills'

import meta from '../content/meta'
import introduction from '../content/introduction'
import skills from '../content/skills'
import experience from '../content/experience'
import education from '../content/education'

const Resume = props => {
  return (
    <DocumentTitle title={`Resume | ${meta.name}`}>
      <BodyClassName className='body--resume'>
        <div className='site-container'>
          <Header {...meta} />
          <Introduction introduction={introduction.resume} />
          <Experience name='Experience' propsClass='' items={experience} />
          <Skills items={skills} />
          <Experience
            name='Education'
            propsClass='job--no-padding'
            items={education}
          />
        </div>
      </BodyClassName>
    </DocumentTitle>
  )
}

export default Resume
