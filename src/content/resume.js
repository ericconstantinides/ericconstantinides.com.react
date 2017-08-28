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
    image: './eric-constantinides.jpg',
    github: 'ericconstantinides',
    linkedin: 'constantinides'
  },
  introduction:
    `<p>Hi, I'm Eric. I'm a front-end web developer with an emphasis on good design (UI) and great usability (UX). I am an expert at CSS/SCSS and Responsive web design. Most recently, I've moved towards advanced front-end concepts including React, ES2015/ES6, Webpack, and Gulp.</p>
    <p>Most recently, I was a Drupal/PHP front-end developer at EverSport Media. At EverSport, I was the lead front-end developer tasked with developing the consumer-facing and administration theme of eversport.tv. Previous to EverSport, I was senior web developer at Flickerbox in San Francisco, building websites for clients like Pure Storage and Okta.</p>
    <p>As a full-stack developer, I've created over 20 enterprise-level websites (half of them on Drupal), all without the use of pre-built themes. My most recent website is constantlybeing.com, a sustainability and lifestyle blog built on Drupal 7.</p>
    <p>I'm a San Francisco Bay Area native who loves mirrorless photography, my papillon dog Layla, and my best friend and wife, <a href="https://www.annachich.com/about">Becky</a>.</p>`,
  experience: [{
    name: 'EverSport Media',
    location: 'Los Gatos, CA',
    startDate: 'Sep, 2015',
    endDate: 'Jan, 2017',
    position: [
      { title: 'Lead Drupal Front-end Developer' }
    ],
    responsibilities: `Built, maintained, and co-designed the front-end for eversport.tv, an online video platform(OVP). Created and updated EverSport’s custom Drupal themes and modules using PHP, HTML, JavaScript, and CSS. Redesigned and rebuilt eversport.tv from adaptive functionality to responsive functionality. Developed and co-designed the Drupal CMS admin theme. Designed and built the user-interface for a responsive and embeddable JavaScript-based content player to run EverSport's content on any 3rd party website. Converted player from jQuery to Vanilla JavaScript. Wrote custom Gulp processes to compile multiple themes concurrently with shared assets.`,
    projects: getProjects('EverSport Media')
  },{
    name: 'Flickerbox, Inc.',
    location: 'San Francisco, CA',
    startDate: 'Jan, 2012',
    endDate: 'June, 2015',
    position: [{
      title: 'Senior Full Stack Web Developer',
      meta: '(Jan, 2014 - June, 2015)'
    },{
      title: 'Full Stack Web Developer',
      meta: '(Jan, 2012 - Jan, 2014)'
    }],
    responsibilities: `Orchestrated weekly developer meetings. Drafted timelines and estimates for future projects with producers. Composed technical briefs for client-side contracts. Architected content structure for Drupal CMS and WordPress CMS sites. For Drupal specifically, customized content-types, fields, field-collections, and views. Set up and customized Drupal modules including Views, Entity, Entity Reference, Entity View Modes, Devel, Field Collections, and Media. Created content types with various user-editable fields. Customized template.php and .tpl.php files for all PHP logic with Drupal APIs to separate PHP code from HTML. Wrote custom modules with Drupal and contrib module APIs. Hand-coded HTML and SCSS (CSS) from designer's PSD files into responsive web pages. Implemented JavaScript libraries and wrote custom JavaScript/jQuery code. Employed best practices for optimal load times and tested sites on multiple browsers and viewports. Used Git for revision control.`,
    projects: getProjects('Flickerbox, Inc')
  },{
    name: 'Independent Developer',
    location: 'San Jose, CA',
    startDate: '2005',
    endDate: 'Current',
    position: [{
      title: 'Full Stack React Developer',
      meta: '(Jan 2017 - Current)'
    },{
      title: 'Full Stack Web Developer',
      meta: '(2015 - Dec, 2016)'
    }],
    responsibilities: `Set up sites using my (Digital Ocean) Virtual Private Server. Create entity relationship diagrams. Create site maps. Transform PSD mock-ups into Drupal HTML templates. Code CSS, HTML, and jQuery. Write custom modules. Host and manage sites.`,
    projects: getProjects('Eric Constantinides')
  }],
  skills,
  education: [{
    name: 'W.P. Carey School of Business @ ASU',
    url: 'wpcarey.asu.edu',
    location: 'Tempe, AZ',
    position: [{
      title: 'Full Stack React Developer',
      meta: '(Jan 2017 - Current)'
    }, {
      title: 'Full Stack Web Developer',
      meta: '(2015 - Dec, 2016)'
    }],
    projects: []
  }]
}

export default resume