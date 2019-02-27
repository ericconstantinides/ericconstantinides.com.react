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
  introduction: `<p><strong>In a nutshell:</strong> I'm am a <strong>Front-end UI Engineer</strong> specializing in <strong>React</strong>, <strong>Redux</strong>, <strong>CSS</strong>, and <strong>Vanilla JS</strong>.</p>
  <p><strong>Most Recently:</strong> I'm a React / UI Engineer at Insureon working on the Customer Portal Web App using React and JavaScript.</p>
  <p><strong>Previously:</strong> I was working on <a href='https://www.bottomlessbrunch.com' target='_blank'>BottomlessBrunch.com</a>, a React and Redux based web app. <strong>Before that</strong> I was Lead Front-End Developer at EverSport Media. <strong>Before that</strong> I was a Web Developer at Flickerbox in San Francisco.</p>`,
  experience,
  skills,
  education
}

export default resume
