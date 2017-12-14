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
  introduction: `<p><strong>In a nutshell:</strong> I'm am a <strong>Full-stack React (Mongo, Express, React, Node)</strong> developer specializing in <strong>React</strong>, <strong>Redux</strong>, <strong>ES2015</strong>/<strong>ES6</strong>, <strong>Sass</strong>, and <strong>Vanilla JS</strong>.</p>
  <p><strong>Previously:</strong> I was Lead Front-End Developer at EverSport Media, responsible for the consumer-facing and administration themes of eversport.tv as well as the front-end for their Single Page App. Before EverSport, I was Senior Web Developer at Flickerbox in San Francisco, creating enterprise-level websites.</p>
  <p><strong>Most Recently:</strong> After my last company (EverSport) was sold, I pivoted my career towards React and the MERN stack.</p>`,
  experience: [
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
          info: `Additional duties included orchestrating the weekly developer meetings; drafting timelines and estimates for future projects; composing technical briefs for client-side contracts.`
        },
        {
          title: 'LAMP Stack Web Developer',
          meta: 'Jan, 2012 - Jan, 2014',
          info: `Architected content structure for websites. Hand-coded HTML, SCSS (CSS), and JS from designer's PSD files into responsive and interactive web pages. Implemented JavaScript libraries and wrote custom JavaScript/jQuery code.`
        }
      ],
      projects: getProjects('Flickerbox, Inc')
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
