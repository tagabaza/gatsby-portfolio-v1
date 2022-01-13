import React, { useState } from "react";
import { Container, Navbar, Nav, Button} from "react-bootstrap";
// import { Link } from "gatsby";
import * as FaIcons from "react-icons/fa";
import {MenuItems} from "./MenuItems"
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import resume from "../../static/resume.pdf"




const Navigation = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    
    return (
        
            //  <Fade top duration={1000} delay={700} distance="30px">
                <nav className="NavbarItems">
                    <h1 className="navbar-logo">Tanaka</h1>
                    <div className="menu-icon" onClick={showSidebar}>
                    <FaIcons.FaBars/>
                    </div>

                    <ul className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <li className="navbar-toggle" onClick={showSidebar}>
                            <div className='menu-icon'>
                                <FaIcons.FaTimes/>
                            </div>
                        </li>
                        {MenuItems.map((item, index) => {
                            return(
                                <li key={index}>
                                    <Link className={item.cName} to={item.url} smooth duration={1000}>
                                        {item.title}
                                    </Link>§
                                </li>
                            )
                        })}
                    </ul>
                    <span className="resumeBtn cta-btn cta-btn--hero">
                        <a href={resume} target="_blank" rel="noopener noreferrer">RESUME</a>
              {/* <Link href={resume} smooth duration={1000}>
                RESUME
              </Link> */}
            </span>
                </nav>
            // </Fade>
    );
}

export default Navigation;
