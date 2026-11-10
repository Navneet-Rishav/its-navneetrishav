import React from 'react'
import './Header.css'
import { Typewriter, Cursor } from 'react-simple-typewriter'
import { HEADLINE, HEADLINE_STACK, RESUME_URL, TYPEWRITER } from '../../data/content'

const Header = () => {
  return (
    <header className='header'>
        <div className="header-contents">
            <p>Hey!&nbsp; There It's</p>
            <h1>Navneet Rishav</h1>
            <p className="header-headline">
              <strong>{HEADLINE}</strong> <span className="header-stack">— {HEADLINE_STACK}</span>
            </p>
            <p className="header-typewriter" aria-hidden="true">
              I'm a&nbsp;
              <span>
                <Typewriter words={TYPEWRITER} loop={true} typeSpeed={90} deleteSpeed={50} delaySpeed={1600} />
              </span><Cursor cursorStyle="_"/>
            </p>
            <div className="buttons">
                <a className="pill-btn" href="mailto:rishavnavneet@gmail.com">Hire Me</a>
                <a className="pill-btn" href={RESUME_URL} target='_blank' rel="noreferrer">Get Resume</a>
                <a className="pill-btn" href="https://github.com/Navneet-Rishav" target='_blank' rel="noreferrer">GitHub Profile</a>
            </div>
        </div>
    </header>
  )
}

export default Header
