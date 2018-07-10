import skills from './skills'
import projects from './projects'
// return array of objects of skills

// return array of objects of employer
function getProjects (employer) {
  return projects.filter(project => project.employer === employer)
}
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
  experience: [
    {
      name: 'Insureon',
      location: 'San Jose, CA',
      startDate: 'January, 2018',
      endDate: 'Current',
      position: [
        {
          title: 'Front-end UI Engineer',
          info: `Co-engineer for building a new customer portal site for Insureon. Portal is built using React, Webpack, CSS Modules, Post-CSS, Babel, React Router, etc. Created custom JavaScript field and validation framework for fast Object-based prototyping of forms and its validation.`
        }
      ],
      projects: getProjects('Insureon')
    },
    {
      name: 'BottomlessBrunch.com',
      location: 'San Jose, CA',
      startDate: 'April, 2017',
      endDate: 'January, 2018',
      position: [
        {
          title: 'Full-Stack UI Engineer',
          info: `Developed bottomlessbrunch.com, a React and Redux responsive web-app which graphically renders "bottomless" brunch locations in the United States. Integrated Google Maps, Google Places, and YELP APIs. Created administration back-end which combines multiple APIs to create new locations in seconds. Served on an AWS Server through an NGINX proxy with a Node/Express API.`
        }
      ],
      projects: getProjects('Bottomless Brunch')
    },
    {
      name: 'EverSport Media',
      description: 'Online Video Provider',
      location: 'Los Gatos, CA',
      startDate: 'Sep, 2015',
      endDate: 'Jan, 2017',
      position: [
        {
          title: 'Lead Front-end Developer',
          disabled_meta: 'Sep, 2015 - Jan, 2017',
          canonical:
            'bear://x-callback-url/open-note?id=3E14B199-78A5-468E-905C-793F78F74C5D-74885-0003EB8E172B8A9F',
          info: `Lead Front-end Developer for Eversport's themes and modules using JavaScript, SCSS / CSS, Drupal and PHP. Designed and developed the site and the user-interface for the Single Page App media player that ran on 3rd party sites.`
        }
      ],
      skillsUsed: '',
      projects: getProjects('EverSport Media')
    },
    {
      name: 'Flickerbox, Inc.',
      description: 'Agency',
      location: 'San Francisco, CA',
      startDate: 'Jan, 2012',
      endDate: 'June, 2015',
      position: [
        {
          title: 'Senior Web Developer',
          meta: 'Jan, 2014 - June, 2015',
          info: `Orchestrated the weekly developer meetings; drafted timelines and estimates for future projects; composed technical briefs for client-side contracts; lead web development projects.`
        },
        {
          title: 'Web Developer',
          meta: 'Jan, 2012 - Jan, 2014',
          info: `Architected content structure for websites. Hand-coded HTML, SCSS (CSS), and JS from designs into responsive and interactive pages. Implemented JavaScript libraries and wrote custom JavaScript/jQuery code.`
        }
      ],
      projects: getProjects('Flickerbox, Inc')
    },
    {
      name: 'Independent Web Developer',
      location: 'San Jose, CA',
      startDate: '2005',
      endDate: 'Current',
      position: [
        // {
        //   title: 'Full Stack React Developer',
        //   meta: 'Jan 2017 - Current)'
        // },
        {
          title:
            'Full MERN Stack Web-App Developer. Previously, Full LAMP Stack Developer'
        }
      ],
      projects: getProjects('Eric Constantinides')
    }
  ],
  skills,
  education: [
    {
      name: 'W.P. Carey School of Business',
      url: 'wpcarey.asu.edu',
      startDate: 'Arizona State University',
      location: 'Tempe, AZ',
      position: [
        {
          title: 'Bachelor of Science, Computer Information Systems (CIS)',
          info: '3.75 Computer Information Systems GPA'
        },
        {
          title: 'Bachelor of Science, Marketing',
          info: '4.0 Marketing GPA'
        }
      ],
      projects: []
    }
  ]
}

export default resume
