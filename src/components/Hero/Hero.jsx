import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCss3, FaCss3Alt, FaGit, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNode, FaNpm, FaReact, FaSass } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Delay from 'react-delay';


const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
    <section id="hero">

      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      <div>
        <FaHtml5 className='fa-icons'/>
        <FaCss3Alt className='fa-icons'/>
        <FaJs className='fa-icons'/>
        <FaReact className='fa-icons'/>
        <FaGithub  className='fa-icons'/>
        <FaGit className='fa-icons'/>
        <FaSass className='fa-icons'/>
        <FaNpm className='fa-icons'/>
        <FaNode className='fa-icons'/>
        </div>
        <div>
        <FaHtml5 className='fa-icons'/>
        <FaCss3Alt className='fa-icons'/>
        <FaJs className='fa-icons'/>
        <FaReact className='fa-icons'/>
        <FaGithub  className='fa-icons'/>
        <FaGit className='fa-icons'/>
        <FaSass className='fa-icons'/>
        <FaNpm className='fa-icons'/>
        <FaNode className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      <div className='rows'>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
        <div>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
          <FaHtml5 className='fa-icons'/>
          <FaCss3Alt className='fa-icons'/>
          <FaJs className='fa-icons'/>
          <FaReact className='fa-icons'/>
          <FaGithub  className='fa-icons'/>
          <FaGit className='fa-icons'/>
          <FaSass className='fa-icons'/>
          <FaNpm className='fa-icons'/>
          <FaNode className='fa-icons'/>
          <FaGitAlt className='fa-icons'/>
        </div>
      </div>
      
      

      {/* <div className="hero-background">
      <Delay wait={10}> 
        <div className='x-axis-alt one'>
            <FaHtml5 className='y-axis-alt' />
        </div>
      </Delay>
        
      <Delay wait={4000}> 
        <div className='x-axis' style={{left: '12.5%'}}>
              <FaCss3Alt className='y-axis'/>
        </div>
      </Delay>

      <Delay wait={8000}>
      <div className='x-axis' style={{left: '25%'}}>
            <FaJs className='y-axis' style={{ top: '0', left: "14%", fontSize: '8rem' }}/>
      </div>
      </Delay>    

      <Delay wait={10}>
        <div className='x-axis' style={{left: '32.5%'}}>
              <FaReact className='y-axis' />
        </div>
      </Delay>

      <Delay wait={4000}>
      <div className='x-axis' style={{left: '50%'}}>
            <FaGithub className='y-axis' />
      </div>
      </Delay>

      <Delay wait={8000}>
      <div className='x-axis' style={{left: '62.5%'}}>
            <FaGit className='y-axis' />
      </div>
      </Delay>

      <Delay wait={10}>
      <div className='x-axis' style={{left: '75%'}}>
            <FaSass className='y-axis' />
      </div>
      </Delay>
     
      <Delay wait={4000}>
      <div className='x-axis' style={{left: '87.5%'}}>
            <FaNpm className='y-axis' />
      </div>
      </Delay>
      {/* <Delay wait={3000}>
      <div className='x-axis' style={{left: '100%'}}>
            <FaNode className='y-axis' />
      </div>
      </Delay> */}
      {/* </div> */} 
  
       
      
      
      
      
      
      
      


      {/* 
        <div className="skill-cloud">
          <IconContext.Provider value={{className:"fa-icons1"}}>
            
            
            
            
            
           
          </IconContext.Provider>
        
          <p style={{ top: '46.9rem', left: '0', fontSize: '5rem' }}>HTML5</p>
          <p style={{top: '54rem', left: '23%', fontSize: '2.3rem'}}>Visual Studio Code</p>
          <p style={{ top: '20rem', left: '-6rem', fontSize: '1.4rem' }}>CSS3</p>
          <p style={{ top: '0', left: '35%', fontSize: '1.8rem' }}>React</p>
          <p style={{ top: '0', left: '90%', fontSize: '1.4rem' }}>Responsive Websites</p>
          <p style={{ top: '4rem', left: '75%', fontSize: '1.2rem' }}>antd</p>
          <p style={{ top: '38rem', left: '85%', fontSize: '1.8rem' }}>Github</p>
          <p style={{ top: '32rem', left: '65%', fontSize: '1.8rem' }}>Gatsby</p>
          <p style={{ top: '35rem', left: '15%', fontSize: '3rem' }}>ES6</p>
          <p style={{ top: '10rem', left: '22%', fontSize: '1.5rem' }}>Command Line</p>
        </div>
      </div> */}

      <Container className="hero-container">
        <Fade top={isDesktop} bottom={isMobile} duration={1000} delay={700} distance="30px">
          <h1 className="hero-greeting">{title} </h1>
        </Fade>

        <Fade top={isDesktop} bottom={isMobile} duration={1000} delay={900} distance="30px">
          <h1 className="hero-title">
            <span className="text-color-main">{name}</span>
          </h1>
        </Fade>
        
        <Fade top={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <h1 className="hero-title-sub">
            {subtitle}
          </h1>
        </Fade>
        
        <Fade top={isDesktop} bottom={isMobile} duration={1000} delay={1200} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta}
              </Link>
            </span>
          </p>
        </Fade>

        
      </Container>
    </section>
  );
};

export default Header;
