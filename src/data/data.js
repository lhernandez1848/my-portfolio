export const experience = [
  {
    name: 'Frontend Developer',
    location: 'Periculum',
    timeFrame: 'September 2021 to May 2023',
    list: [
      'Responsible for the implementation and design of Insights, a data-driven analytics and credit scoring engine which helps clients predict their customer’s financial standing',
      'Worked on platform development projects from initial design through completion, optimizing for cross-browser compatibility and responsive layout',
      'Collaborated with back-end developers, designers, and product team members to meet project requirements, new features, and desired functionalities for our web application',
      'Managed and implemented company website development using WebFlow, working closely designers and product team'
    ]
  },
  {
    name: 'UX/UI Designer',
    location: 'Communitech',
    timeFrame: 'March 2021 to June 2021',
    list: [
      'Part of a diverse team made up of a Digital Marketer, Graphic Designer, Web Developer and Copywriter',
      'Collaborated in creating a digital transformation plan to assist small businesses during the COVID-19 pandemic',
      'Designed, redesigned, and developed several websites to suit each individual client’s needs'
    ]
  }
]

export const projects = [
  {
    title: 'Insights',
    stack: ['React', 'Redux', 'Auth0'],
    description: ['Insights is a data-driven analytics and credit scoring engine that provides predictive insights into customer’s financial standing. From the Home page, a user can upload a bank statement, and, once processed, can view it’s Analytics, Credit Scoring, Affordability, etc.'],
    mainImage: '/assets/insights-home.png',
    images: ['/assets/insights-home-full.png', '/assets/insights-affordability.png', '/assets/insights-score.png']
  },
  {
    title: 'IVY',
    stack: ['Android Studio', 'Java', 'NodeJS'],
    description: ['IVY is a mobile application that provides main inventory functions including order generation, track order, view order history, set and check inventory, usage analysis, and par level recommendations. This app was developed as part of the Capstone graduation project. Our team of three was asked to make this project for the client company, Huex Inc.',
      'The back-end runs on a Linux database server and is accessed through a web service using MS SQL Server and NodeJS, which was set up by the client company, Huex Inc.'],
    mainImage: '/assets/ivy-login-tb.png',
    images: ['/assets/ivy-login.png', '/assets/ivy-product-result.png', '/assets/ivy-value.png', '/assets/ivy-pie.png']
  },
  {
    title: 'Avaanz Website',
    stack: ['Squarespace', 'Javascript'],
    description: ['Avaanz Ltd. is a human environment consulting firm specializing in socio-economics, environmental services, facilitation and engagement to advance community well-being.', 
      'This website was my first ever project at Communitech, and as a recent graduate. As a team, we designed and implemented this site from the ground up based on the client’s needs.'],
    mainImage: '/assets/avaanz.png',
    images: ['/assets/avaanz-full.png', '/assets/avaanz-team.png', '/assets/avaanz-services.png']
  }
]