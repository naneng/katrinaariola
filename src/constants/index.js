import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  p5,
  tailwind,
  nodejs,
  mongodb,
  sql,
  git,
  figma,
  canva,
  temple,
  lewagon,
  hardboot,
  moody,
  temperatureconverter,
  bookclub,
  tictactoe,
  projectlist,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI UX",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "p5",
    icon: p5,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "canva",
    icon: canva,
  },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Hardboot Inc.",
    icon: hardboot,
    iconBg: "#250657",
    date: "May 2023 - Sep 2023",
    points: [
      "Prepared website low-fidelity wireframes and high-fidelity mockups for developers and project managers.",
      "Created branding and logos incorporating desired visual elements using Figma.",
      "Engaged with personnel to turn mock-ups, wireframes and conceptual drawings into functional web pages in Wordpress.",
      "Brainstormed and executed strategies to increase business and drive profit growth.",
      "Maintained consistent style across platforms and browsers through skilled handling of CSS changes.",
      "Designed and implemented new features and functionality for WordPress themes.",
    ],
  },
  {
    title: "Fullstack Web Developer Graduate",
    company_name: "Le Wagon",
    icon: lewagon,
    iconBg: "#FFF",
    date: "Jul 2018 - Sep 2018",
    points: [
      "Completed a rigorous 9-week coding bootcamp focused on Ruby on Rails, HTML, CSS, Bootstrap, JavaScript, JQuery, SQL, Git, GitHub, and Heroku.",
      "Developed deployed a clone of AirBnB and a Rails prototype of the OllieBoard app.",
      "Collaborated with a diverse team to design, test and debug, and ship production-ready web applications.",
      "Gained hands-on experience in UX/UI design, mockup building, and web hosting.",
      "Coordinated concepts, libraries and style guides for development team.",
      "Managed back end server logic protocols and database connections.",
      "Tested and validated programs to enhance applications and improve performance.",
    ],
  },
  {
    title: "Web Specialist",
    company_name: "Temple University Campus Recreation",
    icon: temple,
    iconBg: "#250657",
    date: "Aug 2008 - Dec 2010",
    points: [
      "Managed and maintained department website to match various team specifications ensuring up-to- date contents and active links.",
      "Designed layouts, graphics, icons, logos and created and/or incorporated color scheme based on internal website requests.",
      "Researched and evaluated new design trends.",
      "Performed software and hardware installations and updates for office computers associated devices.",
    ],
  },
  
  
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Moody",
    description:
      "Interactive app that allows user to change background and font color.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "lodash",
        color: "green-text-gradient",
      },
      {
        name: "yup",
        color: "white",
      },
    ],
    image: moody,
    source_code_link: "https://naneng.github.io/moody/",
  },
  {
    name: "Book Club",
    description:
      "A book repo that allows user to search and favorite books.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "lodash",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "white",
      },
    ],
    image: bookclub,
    source_code_link: "https://naneng.github.io/book-club/",
  },
  {
    name: "TicTacToe",
    description:
      "Tictactoe game app that displays player turns and movements",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "white",
      },
    ],
    image: tictactoe,
    source_code_link: "https://naneng.github.io/tictactoe/",
  },
  {
    name: "Temperature Converter",
    description:
      "Web application that enables users to convert temperature degrees from celsius to fahrenheit.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
  
      {
        name: "javascript",
        color: "white",
      },
    ],
    image: temperatureconverter,
    source_code_link: "https://naneng.github.io/temperature-converter/",
  },
  {
    name: "Project List",
    description:
      "A list of projects I developed over time including course projects developed with Le Wagon and SuperHi.",
    tags: [
      {
        name: "javascript",
        color: "white",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "lodash",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "white",
      },
    ],
    image: projectlist,
    source_code_link: "https://naneng.github.io/projects.html",
  },
];

export { services, technologies, experiences, testimonials, projects };