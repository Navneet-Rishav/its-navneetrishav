import React from 'react'
import './Footer.css'
import { assExp } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className="footer-logo" src={assExp.logo} alt="Navneet Rishav logo"/>
                <div className="footer-social-icon">
                    <a href="https://www.linkedin.com/in/navneet-rishav-4a80b2192/" target='_blank' rel="noreferrer"><img src={assExp.linkedin_ico} alt="LinkedIn"/></a>
                    <a href="mailto:rishavnavneet@gmail.com"><img src={assExp.gmail_ico} alt="Email"/></a>
                    <a href="https://github.com/Navneet-Rishav" target='_blank' rel="noreferrer"><img src={assExp.github_ico} alt="GitHub"/></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Navneet Rishav</h2>
                <ul>
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#experience">Experience</a></li>
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/Navneet_Rishav_Full_Stack_GenAI_Developer.pdf" target="_blank" rel="noreferrer">Resume</a></li>
                    <li><a href="/#projects">Projects</a></li>
                    <li><a href="mailto:rishavnavneet@gmail.com">Contact</a></li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li><a href="https://www.linkedin.com/in/navneet-rishav-4a80b2192/" target='_blank' rel="noreferrer">LinkedIn</a></li>
                    <li><a href="mailto:rishavnavneet@gmail.com">rishavnavneet@gmail.com</a></li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright {new Date().getFullYear()} © its-navneetrishav.netlify.app - All Rights Reserved.</p>
    </footer>
  )
}

export default Footer
