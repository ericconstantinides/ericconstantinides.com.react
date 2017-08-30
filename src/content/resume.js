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
  canonical:
    'bear://x-callback-url/open-note?id=3E14B199-78A5-468E-905C-793F78F74C5D-74885-0003EB8E172B8A9F',
  introduction: `<p><b>In a nutshell:</b> I'm am a MERN (Mongo, Express, React, Node) stack developer specializing in React, Redux, ES2015/ES6, Sass, and Vanilla JS.</p>
  <p><b>Previously:</b> I was lead front-end developer at EverSport Media in charge of the consumer-facing and administration themes of eversport.tv as well as the front-end for their Single Page App. Before EverSport, I was senior web developer at Flickerbox in San Francisco creating enterprise-level websites.</p>
  <p><b>The time off:</b> After EverSport folded, I pivoted my career towards mastering React and the MERN stack.</p>`,
  experience: [
    {
      name: 'EverSport Media',
      description: 'Online Video Provider',
      location: 'Los Gatos, CA',
      startDate: 'Sep, 2015',
      endDate: 'Jan, 2017',
      position: [
        {
          title: 'Lead Front-end Developer',
          XXXmeta: 'Sep, 2015 - Jan, 2017',
          canonical:
            'bear://x-callback-url/open-note?id=3E14B199-78A5-468E-905C-793F78F74C5D-74885-0003EB8E172B8A9F',
          info: `Created and updated EverSport's custom themes and modules using PHP, HTML, JavaScript, and CSS. Designed and developed the site as well as the user-interface for the embeddable JavaScript content and video player to run on 3rd party sites.`
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
          title: 'Senior LAMP Stack Web Developer',
          meta: 'Jan, 2014 - June, 2015',
          info: `In addition to the usual developer duties I orchestrated the weekly developer meetings. Drafted timelines and estimates for future projects. Composed technical briefs for client-side contracts.`
        },
        {
          title: 'LAMP Stack Web Developer',
          meta: 'Jan, 2012 - Jan, 2014',
          info: `Architected content structure for websites. Hand-coded HTML, SCSS (CSS), and JS from designer's PSD files into responsive and interactive web pages. Implemented JavaScript libraries and wrote custom JavaScript/jQuery code.`
        }
      ],
      projects: getProjects('Flickerbox, Inc')
    },
    {
      name: 'Independent Developer',
      location: 'San Jose, CA',
      startDate: '2005',
      endDate: 'Current',
      position: [
        // {
        //   title: 'Full Stack React Developer',
        //   meta: 'Jan 2017 - Curren)'
        // },
        // {
        //   title: 'Full Stack Web Developer',
        //   meta: '2015 - Dec, 2016',
        //   info: ''
        // }
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
          meta: 'Jan 2017 - Curren)'
        },
        {
          title: 'Full Stack Web Developer',
          meta: '2015 - Dec, 201)'
        }
      ],
      projects: []
    }
  ]
}

export default resume
