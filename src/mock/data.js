import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tanaka Gabaza',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'hero1.jpg',
  paragraphOne: 'Hello! My name is Tanaka and I love creating things for the web. My interest in development started back in 2015 when I was tasked with building an interactive educational game for an IT project at school. Initially I dreaded the thought of working on such a project. However, it turned out that crafting together an application from scratch with various cool features, animations and designs was something that I found very enjoyable and massively rewarding.     ',
  paragraphTwo: 'Jump to today, I still hold that same love and passion for the craft of development, now with a Bsc in Computer Science to show for it. My focus right now is on projects that are on the client side and are mainly React led. Although my free time is spent trying to learn Node and Express JS as the long term goal is to become a seasoned full stack developer. ',
  paragraphThree: ' ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'scrnshtRWA1.jpg',
    title: 'React Weather App',
    info: 'A web application that uses the MetaWeather API to gather and display weather related information for a location that is entered by a user. Displays max temp, min temp, humidity, predictability as well as the predicted weather the next 5 days in the chosen location.',
    info2: '',
    url: 'https://tagabaza.github.io/react-weather-app/',
    repo: 'https://github.com/tagabaza/react-weather-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'screenshot5.jpg',
    title: 'React Reading List',
    info: 'A simple web application built using React which holds a users reading list of books. Uses the Context API and Hooks to share an manipulate state.  ',
    info2: '',
    url: 'https://tagabaza.github.io/reading-list-app/',
    repo: 'https://github.com/tagabaza/reading-list-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'scrnshtSG.jpg',
    title: 'Simon Game',
    info: 'A web version of the popular electronic memory skill game. The application creates a sequence sounds and lights and requires to the user to repeat the sequence. Built using jQuery to simplify the applications DOM tree traversal and event handling.',
    info2: '',
    url: 'https://tagabaza.github.io/Simon_Game/',
    repo: 'https://github.com/tagabaza/Simon_Game', // if no repo, the button will not show up
  }, 
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tanakagabaza@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tanakagabaza/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/tagabaza',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
