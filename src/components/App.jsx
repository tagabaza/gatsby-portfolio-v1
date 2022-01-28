import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Navigation from './Navbar/Navbar';
import Skills from './Skills/Skills'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faHTML5, faCoffee } from '@fortawesome/free-solid-svg-icons'




import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [navigation, setNavigation] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  library.add(fab, faHtml5, faCoffee)

  return (
    <PortfolioProvider value={{ navigation, hero, about, projects, contact, footer }}>
      <Navigation />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
