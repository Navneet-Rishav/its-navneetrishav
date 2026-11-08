import React from 'react'
import './Aboutme.css'
import { assExp } from '../../assets/assets'

const Aboutme = () => {
  return (
    <section className='aboutme' id='aboutme'>
        <div className="aboutme-pic">
            <img src={assExp.MainDpLong} alt="Navneet Rishav" />
        </div>
        <div className="aboutme-text">
            <h2>About Me</h2>
            <hr />
            <h4>Full Stack Developer <span>— React.js, Node.js, REST APIs, TypeScript</span></h4>
            <p>Hi, I'm Navneet Rishav, a full stack developer who builds web apps end to end: REST API design, authentication, validation, tests and deployment, with React.js on the front end. I'm a Reporting Analyst on the GenAI engineering team at EXL Service, where I build backend REST services and real-time integrations for an AI product. I hold a B.Tech in Information Technology from Lovely Professional University (2019–2023).</p>
            <a className="pill-btn" href="mailto:rishavnavneet@gmail.com">Let's get Connected</a>
        </div>
    </section>
  )
}

export default Aboutme
