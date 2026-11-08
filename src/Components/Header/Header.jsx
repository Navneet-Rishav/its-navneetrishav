import React from 'react'
import './Header.css'
import {Typewriter,Cursor} from 'react-simple-typewriter'

const Header = () => {

  return (
    <header className='header'>
        <div className="header-contents">
            <p>Hey!&nbsp; There It's</p>
            <h1>Navneet Rishav</h1>
            <p> I'm a &nbsp;
              <span>
                <Typewriter
                  words={['Full Stack Developer', 'React.js & Node.js Developer', 'REST API Developer']}
                  loop={true}
                  typeSpeed={120}
                />
              </span><Cursor cursorStyle="_"/></p>
            <div className="buttons">
                <a className="pill-btn" href="mailto:rishavnavneet@gmail.com">Hire Me</a>
                <a className="pill-btn" href="https://drive.google.com/file/d/1IbzSPIOcQ0mZsD6-GdflcvzAwYFvvA6E/view?usp=sharing" target='_blank' rel="noreferrer">Get Resume</a>
                <a className="pill-btn" href="https://github.com/Navneet-Rishav" target='_blank' rel="noreferrer">GitHub Profile</a>
            </div>
        </div>
    </header>
  )
}


export default Header
