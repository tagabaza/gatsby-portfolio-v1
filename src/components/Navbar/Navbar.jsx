import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button} from "react-bootstrap";
// import { Link } from "gatsby";
import * as FaIcons from "react-icons/fa";
import {MenuItems} from "./MenuItems"
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import resume from "../../static/resume.pdf"




const Navigation = () => {

    //Controls appearance of sidebar on smaller screens
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    //Controls appearance of navbar by scroll on larger screens
    const [show, setShow] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const isBrowser = typeof window !== "undefined";
    if(isBrowser){
        let prevScollPos = window.scrollY;

        const controlNavbar = () => {
            let currentScrollPos = window.scrollY;
            if (prevScollPos > currentScrollPos) {
                setShow(false)
            }else{
              setShow(true)
            }
            if(currentScrollPos > 300){
                setScrolling(true);
            }else{
                setScrolling(false);
            }
            prevScollPos = currentScrollPos;
        }
    
        useEffect(() => {
           window.addEventListener('scroll', controlNavbar)
              return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
          }, [])
        
    }
    

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
          setIsDesktop(true);
          setIsMobile(false);
        } else {
          setIsMobile(true);
          setIsDesktop(false);
        }
      }, []);
    
    return (
            <nav className={`NavbarItems ${show && 'hidden'} ${scrolling && 'scrolling'}`}>
                <Fade top duration={1000} delay={100} distance="30px">
                    <h1 className="navbar-logo">Tanaka</h1>
                    <div className="menu-icon" onClick={showSidebar}>
                        <FaIcons.FaBars/>
                    </div>
                </Fade>

                <Fade top duration={1000} delay={300} distance="30px">
                    <ul className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <li className="navbar-toggle" onClick={showSidebar}>
                            <div className='menu-icon'>
                                <FaIcons.FaTimes/>
                            </div>
                        </li>
                        
                            {MenuItems.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <Link className={item.cName} to={item.url} smooth duration={1000} onClick={showSidebar}>
                                            {item.title}
                                        </Link>
                                        
                                    </li> 
                                )
                            })}

                        <a className="resumeBtnMobile cta-btn cta-btn--hero" href={resume} target="_blank" rel="noopener noreferrer" >RESUME</a>
                        
                    </ul>
                </Fade>
                
                <Fade top duration={1000} delay={500} distance="30px">
                    <span className="resumeBtn cta-btn cta-btn--hero">
                        <a href={resume} target="_blank" rel="noopener noreferrer">RESUME</a>
                    </span>
                </Fade>
            </nav>         
    );
}

export default Navigation;
