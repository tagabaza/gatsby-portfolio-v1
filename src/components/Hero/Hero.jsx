import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import { FaCss3, FaCss3Alt, FaGit, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNode, FaNpm, FaReact, FaSass } from 'react-icons/fa';


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
