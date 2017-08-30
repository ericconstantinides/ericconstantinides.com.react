const projects = [
  {
    id: 'ec_2017_constantly-being',
    title: 'Constantly Being',
    employer: 'Eric Constantinides',
    date: '2017',
    website: 'www.constantlybeing.com',
    active: true,
    role: 'Lead Developer | Co-Designer',
    description:
      'Constantly Being is a life & style blog promoting global awareness. The site is built on Drupal 7.',
    screenshot: 'portfolio--constantlybeing--md.jpg',
    primary_tech: ['Drupal', 'JavaScript', 'Sass', 'PHP']
  },
  {
    id: 'evr_2016_eversport',
    title: 'EverSport',
    alt_title: 'EverSport.tv',
    employer: 'EverSport Media',
    date: '2015-2017',
    website: 'eversport.tv',
    active: true,
    role: 'Lead Front-End Developer | Co-Designer',
    description:
      'EverSport is the live streaming sports destination and media platform built for fans and content rights holders.',
    screenshot: 'portfolio--eversport--md.jpg',
    primary_tech: ['Drupal', 'JavaScript', 'Sass', 'PHP']
  },
  {
    id: 'evr_2017_embed',
    title: 'EverSport’s Single Page App',
    alt_title: 'Single Page App',
    employer: 'EverSport Media',
    date: '2015-2017',
    website: 'www.ericconstantinides.com/embed',
    active: true,
    role: 'Lead Interactivity Developer | Co-Designer',
    description:
      'Eversport’s Single Page App is a responsive and embeddable JavaScript player for distributing EverSport’s content on third-party websites.',
    screenshot: 'portfolio--eversport-embed--md.jpg',
    primary_tech: ['JavaScript', 'JSON', 'Sass']
  },
  {
    id: 'evr_2016_crms',
    title: 'EverSport’s Administration Theme',
    alt_title: 'Admin Theme',
    employer: 'EverSport Media',
    date: '2015-2017',
    website: 'eversport.tv/admin',
    active: false,
    role: 'Lead Theme Developer | Co-Designer',
    description:
      'EverSport\'s custom "Content Rights Management System (CRMS)" for managing rights and distrubution.',
    screenshot: 'portfolio--eversport-crms--md.jpg',
    primary_tech: ['Drupal', 'JavaScript', 'Sass', 'PHP']
  },
  {
    id: 'ec_2016_annachich',
    title: 'Annachich Jewelry',
    employer: 'Eric Constantinides',
    date: '2016',
    website: 'www.annachich.com',
    active: true,
    role: 'Lead Drupal Developer | Co-Designer',
    description:
      'Annachich is a luxury designer jewelry line inspired by architecture. The site is built on Drupal 7 and Drupal Commerce.',
    screenshot: 'portfolio--annachich--md.jpg',
    primary_tech: ['Drupal Commerce', 'JavaScript', 'Sass']
  },
  {
    id: 'ec_2015_paoloshoes',
    title: 'Paolo Shoes',
    employer: 'Eric Constantinides',
    date: '2015',
    website: 'www.paoloshoes.com',
    active: true,
    role: 'Lead Drupal Developer | Co-Designer',
    description:
      'Paolo Shoes is a Shoe Brand out of San Francisco, CA. The site is built on Drupal 6 and Ubercart.',
    screenshot: 'portfolio--paoloshoes3--md.jpg',
    primary_tech: ['Drupal', 'UberCart', 'JavaScript', 'Sass']
  },
  {
    id: 'fb_2015_pure-storage',
    title: 'Pure Storage',
    employer: 'Flickerbox, Inc',
    date: '2015',
    website: 'purestorage.com',
    active: false,
    role: 'Lead Developer',
    description:
      'Pure Storage is a Mountain View, California-based enterprise data flash storage company.',
    screenshot: 'portfolio--purestorage--md.jpg',
    primary_tech: ['Static HTML', 'JavaScript', 'Sass']
  },
  {
    id: 'fb_2015_adallom',
    title: 'Adallom',
    employer: 'Flickerbox, Inc',
    date: '2015',
    website: 'adallom.com',
    active: false,
    role: 'Lead Developer',
    description: 'Adallom is a cloud security company acquired by MicroSoft.',
    screenshot: 'portfolio--adallom--md.jpg',
    primary_tech: ['WordPress', 'JavaScript', 'Sass']
  },
  {
    id: 'fb_2014_okta-omm',
    title: 'Okta Mobility Management Animation',
    alt_title: 'Okta Animation',
    employer: 'Flickerbox, Inc',
    date: '2014',
    website: 'okta.com/product/mobility-management/',
    active: false,
    role: 'Lead Animation Developer',
    description:
      'An 11-page animated story to help visually explain a product.',
    screenshot: 'portfolio--okta-scrolling-story--md.jpg',
    primary_tech: ['JavaScript', 'Sass']
  },
  {
    id: 'fb_2014_platfora',
    title: 'Platfora',
    employer: 'Flickerbox, Inc',
    date: '2014',
    website: 'platfora.com',
    active: false,
    role: 'Lead Developer',
    description:
      'Platfora, Inc. is a big data analytics company based in San Mateo, California.',
    screenshot: 'portfolio--platfora--md.jpg',
    primary_tech: ['WordPress', 'JavaScript', 'Sass']
  },
  {
    id: 'fb_2014_alteryx',
    title: 'Alteryx',
    employer: 'Flickerbox, Inc',
    date: '2014',
    website: 'www.alteryx.com',
    active: true,
    role: 'Lead Drupal Developer',
    description:
      'Alteryx is a data blending and advanced data analytics software company based out of Irvine, California.',
    screenshot: 'portfolio--alteryx--md.jpg',
    primary_tech: ['Drupal', 'JavaScript', 'Sass']
  },
  {
    id: 'fb_2014_okta',
    title: 'Okta',
    employer: 'Flickerbox, Inc',
    date: '2014',
    website: 'okta.com',
    active: false,
    role: 'Lead Developer',
    description:
      'Okta is an enterprise-grade, identity management service based out of San Francisco, California.',
    screenshot: 'portfolio--okta--md.jpg',
    primary_tech: ['PHP', 'JavaScript', 'WordPress', 'Sass']
  },
  {
    id: 'fb_2013_abaxis-veterinary',
    title: 'Abaxis Veterinary',
    employer: 'Flickerbox, Inc',
    date: '2013',
    website: 'abaxis.com/veterinary/',
    active: false,
    role: 'Lead Developer',
    description:
      'Abaxis provides leading edge veterinary technology, tools and services.',
    screenshot: 'portfolio--abaxis-veterinary--md.jpg',
    primary_tech: ['Drupal', 'JavaScript', 'Sass']
  },
  {
    id: 'fb_2013_socialchorus',
    title: 'SocialChorus',
    employer: 'Flickerbox, Inc',
    date: '2013',
    website: 'socialchorus.com',
    active: false,
    role: 'Lead Developer',
    description:
      'SocialChorus, Inc. provides advocate marketing solutions for brands.',
    screenshot: 'portfolio--socialchorus--md.jpg',
    primary_tech: ['WordPress', 'JavaScript', 'Sass']
  },
  {
    id: 'fb_2013_pentaho',
    title: 'Pentaho',
    employer: 'Flickerbox, Inc',
    date: '2013',
    website: 'pentaho.com',
    active: false,
    role: 'Lead Drupal Developer',
    description: 'Pentaho is a Business Intelligence (BI) software company.',
    screenshot: 'portfolio--pentaho--md.jpg',
    primary_tech: ['Drupal', 'JavaScript', 'Sass']
  },
  {
    id: 'fb_2012_liveops',
    title: 'LiveOps',
    employer: 'Flickerbox, Inc',
    date: '2012',
    website: 'liveops.com',
    active: false,
    role: 'Lead Drupal Developer',
    description:
      'LiveOps is a cloud call center company based in Scottsdale, Arizona.',
    screenshot: 'portfolio--liveops--md.jpg',
    primary_tech: ['Drupal', 'JavaScript', 'Sass']
  },
  {
    id: 'fb_2012_island',
    title: 'Island Resort & Casino',
    alt_title: 'Island Resort',
    employer: 'Flickerbox, Inc',
    date: '2012',
    website: 'www.islandresortandcasino.com',
    active: true,
    role: 'Lead Drupal Developer',
    description:
      'Island Resort and Casino is an Indian Casino based in Harris, Michigan.',
    screenshot: 'portfolio--islandresortandcasino--md.jpg',
    primary_tech: ['Drupal', 'JavaScript', 'Sass']
  },
  {
    id: 'ec_2016_cameron-vail',
    title: 'Cameron Vail Design',
    employer: 'Eric Constantinides',
    date: '2016',
    website: 'www.cameronvaildesign.com',
    active: true,
    role: 'Lead Drupal Developer',
    description:
      'Cameron Vail Design is a single page portfolio website built on Drupal 7.',
    screenshot: 'portfolio--cameronvaildesign--md.jpg',
    primary_tech: ['Drupal', 'JavaScript', 'Sass']
  },
  {
    id: 'ec_2012_annachich',
    title: 'Annachich Jewelry',
    employer: 'Eric Constantinides',
    date: '2012',
    website: 'annachich.com',
    active: false,
    role: 'Lead Drupal Developer',
    description:
      'Annachich is a luxury designer jewelry line inspired by architecture. The site is built on Drupal 6 and Ubercart.',
    screenshot: 'portfolio--annachich-v1--md.jpg',
    primary_tech: ['Drupal', 'Ubercart', 'CSS']
  },
  {
    id: 'ec_2011_dukeduchess',
    title: 'Duke et Duchess',
    employer: 'Eric Constantinides',
    date: '2011',
    website: 'dukeduchess.com',
    active: false,
    role: 'Lead Drupal Developer',
    description:
      'Duke et Duchess is a clothing store based in San Francisco, California. The site is built on Drupal 6 and Ubercart.',
    screenshot: 'portfolio--dukeduchess--md.jpg',
    primary_tech: ['Drupal', 'Ubercart', 'JavaScript', 'CSS']
  },
  {
    id: 'ec_2011_btwd',
    title: 'Bike to Work Day',
    employer: 'Eric Constantinides',
    date: '2011',
    website: 'youcanbikethere.com',
    active: false,
    role: 'Lead Drupal Developer',
    description:
      'Bike to Work Day is an annual event held on various days in the Spring across the United States and Canada that promotes the bicycle as an option for commuting to work.',
    screenshot: 'portfolio--youcanbikethere--md.jpg',
    primary_tech: ['Drupal', 'CSS']
  },
  {
    id: 'ec_2011_bottomlessbrunch',
    title: 'Bottomless Brunch',
    employer: 'Eric Constantinides',
    date: '2011',
    website: 'bottomlessbrunch.com',
    active: false,
    role: 'Lead Drupal Developer',
    description:
      'Bottomless Brunch is THE go to place to find out exactly where to get bottomless mimosas for not a lot of money.',
    screenshot: 'portfolio--bottomlessbrunch--md.jpg',
    primary_tech: ['Drupal', 'CSS']
  },
  {
    id: 'ec_2010_chicfashionweek',
    title: 'Chic Fashion Week SF',
    alt_title: 'Chic Fashion Week',
    employer: 'Eric Constantinides',
    date: '2010',
    website: 'chicfashionweeksf.com',
    active: false,
    role: 'Lead Drupal Developer',
    description: 'Awarded best technical website in 2010 by eFashionBlog SF.',
    screenshot: 'portfolio--chicfashionweeksf--md.jpg',
    primary_tech: ['Drupal', 'CSS']
  },
  {
    id: 'ec_2008_babc',
    title: 'Bay Area Bicycle Coalition',
    employer: 'Eric Constantinides',
    date: '2008',
    website: 'bayareabikes.org',
    active: false,
    role: 'Lead Drupal Developer | Lead Designer',
    description:
      'The Bay Area Bicycle Coalition promotes safe and enjoyable bicycling for everyday transportation in the San Francisco Bay Area.',
    screenshot: 'portfolio--bayareabikes--md.jpg',
    primary_tech: ['Drupal', 'CSS']
  },
  {
    id: 'ec_2005_sfima',
    title: 'SFIMA',
    employer: 'Eric Constantinides',
    date: '2005',
    website: 'sfima.org',
    active: false,
    role: 'Lead Developer | Lead Designer',
    description:
      'SFIMA is the San Francisco Institute of Management Accountants.',
    screenshot: 'portfolio--sfima--md.jpg',
    primary_tech: ['Static HTML', 'CSS']
  }
]
export default projects
