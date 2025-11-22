import React from 'react'
import './Footer.css'
import { assExp } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assExp.logo}/>
                <p>Minimal design. Maximum impact.</p>
                <div className="footer-social-icon">
                    <a href="https://www.linkedin.com/in/navneet-rishav-4a80b2192/" target='_blank'><img src={assExp.linkedin_ico}/></a>
                    <a href="mailto:rishavnavneet@gmail.com" target='_blank'><img src={assExp.gmail_ico} /></a>
                    <a href="https://github.com/xronae" target='_blank'><img src={assExp.github_ico} /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Navneet Rishav</h2>
                <ul>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li><a href="tel:+91 7272939563">+91-72*******3</a></li>
                    <li><a href="mailto:rishavnavneet@gmail.com">rishavnavneet@gmail.com</a></li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © itsrishavnavneet.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer