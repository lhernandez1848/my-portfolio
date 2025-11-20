export const ABOUT = {
  title: "FRONT-END DEVELOPER",
  name: "Lisdanay Hernandez",
  location: "Kitchener, Ontario Canada",
  description: "I'm a Front-end Developer based in Kitchener, Ontario. With over 2 years of experience in designing, developing and maintaining web applications, I am looking to leverage my skills to produce applications that exceed user expectations.",
  email: "lisdanayhernandez@outlook.com"
}

export const EXPERIENCE = [
  {
    name: 'FRONT-END DEVELOPER',
    location: 'Periculum',
    startYear: '2021',
    timeFrame: 'Sept 2021 - May 2023',
    list: [
      'Designed and developed main platform dashboards in React/Chart.js, integrated APIs, and led a website redesign that increased traffic by 80%.'
    ]
  },
  {
    name: 'UX/UI DESIGNER',
    location: 'COMMUNITECH',
    startYear: '2021',
    timeFrame: 'March 2021 - June 2021',
    list: [
      'Redesigned websites for 10+ small businesses, boosting online sales and improving user experience during the COVID-19 pandemic.'
    ]
  }
]

export const EDUCATION = [
  {
    name: 'COMPUTER PROGRAMMER / ANALYST',
    location: 'Conestoga College',
    timeFrame: 'September 2017 - April 2020',
    list: [
      'Three-year advanced diploma',
      'Awarded Graduation with Distinction',
      'GPA: 3.77'
    ]
  },
  {
    name: 'BUSINESS ADMINISTRATION - ACCOUNTING',
    location: 'Conestoga College',
    timeFrame: 'September 2011 - April 2014',
    list: [
      'Three-year advanced diploma'
    ]
  }
]

export const CERTIFICATIONS = [
  {
    name: 'GOOGLE UX DESIGN PROFESSIONAL CERTIFICATE',
    location: 'Coursera',
    timeFrame: 'January 2024 - March 2024',
    list: [
      'Applied foundational UX concepts; user-centered design, accessibility, and equity-focused design',
      'Learned the basics of UX research; planning research studies, conducting interviews and usability studies, and synthesizing research results'
    ]
  },
  {
    name: 'GOOGLE DATA ANALYTICS PROFESSIONAL CERTIFICATE',
    location: 'Coursera',
    timeFrame: 'March 2024 - April 2024',
    list: [
      'Visualized and presented data findings in dashboards, presentations and commonly used visualization platforms'
    ]
  },
  {
    name: 'GOOGLE DIGITAL MARKETING & E-COMMERCE PROFESSIONAL CERTIFICATE',
    location: 'Coursera',
    timeFrame: 'July 2024 - August 2024',
    list: [
      'Measured marketing performance through analytics',
      'Optimized website content for SEO'
    ]
  }
]

export const PROJECTS = [
  {
    id: 1,
    title: 'Insights',
    role: 'Front-End Developer',
    stack: ['React', 'Redux', 'JavaScript', 'Auth0'],
    lastWorkedOn: 'May 16, 2023',
    description: ['Insights is a data-driven analytics and credit scoring platform that delivers predictive insights into customers’ financial health. I developed the web app from the ground up using React, Redux, and Chart.js, integrating secure user authentication and dynamic data visualizations. The platform empowers users to make informed financial decisions through intuitive dashboards and comprehensive credit scoring tools.'],
    descriptionLong: ['Insights is a data analytics and credit scoring engine designed to help businesses evaluate customer financial standing through predictive insights. As the sole Frontend Developer, I built the application from scratch, collaborating closely with the Design team to shape both the UI and user experience.', 'The frontend was developed with React and JavaScript, with Redux handling state management and API integrations. I implemented Auth0 for secure authentication and used Chart.js and TanStack Table to build rich, interactive visualizations. Beyond development, I also contributed to the design system by creating several of the custom icons used throughout the interface.', 'The result is a robust platform that enables users to easily access and interpret complex financial data, facilitating better decision-making and risk assessment. My work on this project highlights my ability to deliver end-to-end solutions that combine technical proficiency with user-centric design.'],
    mainImage: '/assets/insights-home.png',
    mainImageAlt: 'Insights Home Page Screenshot',
    mainImageCaption: 'Figure 1: Home page screenshot',
    images: ['/assets/insights-home-full.png', '/assets/insights-affordability.png', '/assets/insights-score.png'],
    link: '/project/1',
    linkTitle: 'Read More'
  },
  {
    id: 2,
    title: 'Plant Cat',
    role: 'Personal Project',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    description: ['Plant Cat is a plant catalog and care guide that helps users learn how to take better care of their plants. Built with Next.js, Tailwind CSS, and TypeScript, it pulls data from the Perenual API to display detailed plant info in a clean, user-friendly interface.'],
    descriptionLong:['Plant Cat is a personal project I built to combine my love of plants with my passion for web development. It’s a plant catalog and care app that lets users browse and categorize plants, view care instructions, and learn more about what each species needs to thrive.', 'I developed the app solo using Next.js, TypeScript, and Tailwind CSS for a fast, responsive frontend. The data comes from the Perenual API, which provides plant details like watering frequency, sunlight requirements, and growth habits. I focused on building a clean and intuitive layout that makes exploring plants feel effortless and enjoyable.', 'This project was a great opportunity to dive deeper into API integration and responsive UI design — and to create something both functional and a fun. 🌱'],
    mainImage: '/assets/plant-home.png',
    images: ['/assets/plant-home-full.png', '/assets/plant-detail.png', '/assets/plant-indoor-list.png', '/assets/plant-species.png'],
    link: 'https://plantcat.vercel.app/',
    linkTitle: 'View Website'
  },
  {
    id: 3,
    title: 'IVY',
    role: 'Front-End Developer',
    stack: ['Android Studio', 'Java', 'NodeJS'],
    description: ['IVY is a mobile application that provides main inventory functions. This app was developed as part of the Capstone graduation project. Our team of three was asked to make this project for the client company, Huex Inc.'],
    mainImage: '/assets/ivy-group.png',
    images: ['/assets/ivy-login.png', '/assets/ivy-product-result.png', '/assets/ivy-value.png', '/assets/ivy-pie.png'],
    link: 'https://github.com/lhernandez1848/Capstone',
    linkTitle: 'View Repository'
  }
]