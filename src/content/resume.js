import introduction from './introduction'
import skills from './skills'
import experience from './experience'
import education from './education'

const resume = {
  header: {
    name: 'Eric Constantinides',
    email: 'eric@ericconstantinides.com',
    location: 'San Jose, CA',
    phone: '(415) 571-6764',
    image: '/images/eric-constantinides.jpg',
    github: 'ericconstantinides',
    linkedin: 'constantinides'
  },
  canonical: 'this',
  introduction,
  experience,
  skills,
  education
}

export default resume
