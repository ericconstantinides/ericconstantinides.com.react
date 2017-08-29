import skills from './skills.js'
import projects from './portfolio.json'
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
  introduction: `<p>Hi, I'm Eric. I'm a web app developer with a passion on good design (UI) and great usability (UX). As an expert CSS/JS developer, I'm passionate about taking complex interactive and responsive designs and make them flow seamlessly. I am a full-time MERN Stack (Mongo, Express, React, Node) stack app developer specializing React, Redux, ES2015/ES6, and Vanilla JS.</p>
  <p>Prior, I was a front-end developer at EverSport Media. At EverSport, I was the lead front-end developer tasked with developing the consumer-facing and administration theme of eversport.tv. Previous to EverSport, I was senior web developer at Flickerbox in San Francisco, building websites for clients like Pure Storage and Okta.</p>
  <p>As a full-stack developer, I've created over 20 enterprise-level websites, all without the use of pre-built themes. My most recent website is constantlybeing.com, a sustainability and lifestyle blog.</p>
  <p>I'm a San Francisco Bay Area native who loves mirrorless photography, my papillon dog Layla, and my best friend and wife, <a href="https://www.annachich.com/about">Becky</a>.</p>`,
  experience: [
    {
      name: 'EverSport Media',
      location: 'Los Gatos, CA',
      startDate: 'Sep, 2015',
      endDate: 'Jan, 2017',
      position: [{ title: 'Lead Drupal Front-end Developer' }],
      responsibilities: `Built, maintained, and co-designed the front-end for eversport.tv, an online video platform (OVP). Created and updated EverSport's custom themes and modules using PHP, HTML, JavaScript, and CSS. Rebuilt site and player to be usable on all platforms. Developed and co-designed the CMS admin theme. Designed and developed the user-interface for the embeddable JavaScript-based content player to run on 3rd party sites.`,
      projects: getProjects('EverSport Media')
    },
    {
      name: 'Flickerbox, Inc.',
      location: 'San Francisco, CA',
      startDate: 'Jan, 2012',
      endDate: 'June, 2015',
      position: [
        {
          title: 'Senior Full Stack Web Developer',
          meta: '(Jan, 2014 - June, 2015)'
        },
        {
          title: 'Full Stack Web Developer',
          meta: '(Jan, 2012 - Jan, 2014)'
        }
      ],
      responsibilities: `Architected content structure for websites. Hand-coded HTML, SCSS (CSS), and JS from designer's PSD files into responsive and interactive web pages. Implemented JavaScript libraries and wrote custom JavaScript/jQuery code. Orchestrated weekly developer meetings. Helped draft timelines and estimates for future projects. Composed technical briefs for client-side contracts.`,
      projects: getProjects('Flickerbox, Inc')
    },
    {
      name: 'Independent Developer',
      location: 'San Jose, CA',
      startDate: '2005',
      endDate: 'Current',
      position: [
        {
          title: 'Full Stack React Developer',
          meta: '(Jan 2017 - Current)'
        },
        {
          title: 'Full Stack Web Developer',
          meta: '(2015 - Dec, 2016)'
        }
      ],
      responsibilities: `Set up sites using a Virtual Private Server (Digital Ocean). Transform mock-ups into HTML templates. Code CSS, HTML, and JavaScript. Host and manage sites.`,
      projects: getProjects('Eric Constantinides')
    }
  ],
  skills,
  education: [
    {
      name: 'W.P. Carey School of Business @ ASU',
      url: 'wpcarey.asu.edu',
      location: 'Tempe, AZ',
      position: [
        {
          title: 'Full Stack React Developer',
          meta: '(Jan 2017 - Current)'
        },
        {
          title: 'Full Stack Web Developer',
          meta: '(2015 - Dec, 2016)'
        }
      ],
      projects: []
    }
  ]
}

export default resume
