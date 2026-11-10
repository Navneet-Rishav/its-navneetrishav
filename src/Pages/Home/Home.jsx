import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Aboutme from '../../Components/Aboutme/Aboutme'
import Experience from '../../Components/Experience/Experience'
import Skills from '../../Components/Skills/Skills'
import Projects from '../../Components/Projects/Projects'

const Home = () => {
  return (
    <div>
        <Header/>
        <Aboutme/>
        <Experience/>
        <Skills/>
        <Projects/>
    </div>
  )
}

export default Home
