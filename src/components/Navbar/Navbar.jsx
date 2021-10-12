import React, { useState } from "react";
import { Container, Navbar, Nav, Button} from "react-bootstrap";
import { Link } from "gatsby";
import * as FaIcons from "react-icons/fa";



const Navigation = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    
    return(
        <header className="header">
            <div className="navbar">
                <Link to='#' className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            
            </div>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                    <li className="navbar-toggle">
                        <a href="#" className="menu-bars">
                            <FaIcons.FaTimes onClick={showSidebar}/> 
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a href="" className="nav-link">CONTACT</a>
                    </li>
                </ul>

                
            </nav>




           
            
        </header>
    );
}

export default Navigation;