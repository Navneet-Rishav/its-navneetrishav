import React from 'react'
import './Aboutme.css'
import { assExp } from '../../assets/assets'
import { ABOUT, HEADLINE, HEADLINE_STACK } from '../../data/content'

const Aboutme = () => {
  return (
    <section className='aboutme' id='aboutme'>
        <div className="aboutme-pic">
            <img src={assExp.MainDpLong} alt="Navneet Rishav" />
        </div>
        <div className="aboutme-text">
            <h2>About Me</h2>
            <hr />
            <h4>{HEADLINE} <span>— {HEADLINE_STACK}</span></h4>
            <p>{ABOUT}</p>
            <a className="pill-btn" href="mailto:rishavnavneet@gmail.com">Let's get Connected</a>
        </div>
    </section>
  )
}

export default Aboutme
