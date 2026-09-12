import React from 'react'
import './Projects.css'
import { assExp } from '../../assets/assets'

const upcomingProjects = [
  {
    name: 'Support Escalation Mesh',
    domain: 'Agent Orchestration',
    status: 'in-progress',
    statusLabel: 'In Progress',
  },
  {
    name: 'Agent Eval Harness',
    domain: 'Evals & Observability',
    status: 'queued',
    statusLabel: 'Queued',
  },
  {
    name: 'Grounded Document Q&A',
    domain: 'Vector Search / RAG',
    status: 'queued',
    statusLabel: 'Queued',
  },
  {
    name: 'Private Document Intelligence',
    domain: 'Open-Weight Models + PII',
    status: 'queued',
    statusLabel: 'Queued',
  },
  {
    name: 'Voice Booking Agent',
    domain: 'Voice AI',
    status: 'queued',
    statusLabel: 'Queued',
  },
]

const Projects = () => {
  return (
    <div className='projects' id='projects'>
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="below-title">
      <div className="projects-item">
        <div className="projects-item-img">
          <img src={assExp.projectSS_potterverse}/>
        </div>
        <div className="projects-item-cont">
          <h6>HTML5 - CSS3 - JS</h6>
          <h2>Potter-Verse</h2>
          <p>An original, from-scratch Harry Potter fan tribute site with book summaries, house profiles, and an interactive sorting quiz — no copyrighted art, video, or text reused.</p>
          <div className="button-contain">
            <button className='button'><a href="https://github.com/Navneet-Rishav/Potter-Verse" target='_blank'>Github Link</a></button>
            <button className='button'><a href="https://navneet-rishav.github.io/Potter-Verse/" target='_blank'>Live Website</a></button>
          </div>
        </div>
      </div>

      <div className="projects-item">
        <div className="projects-item-img">
          <img src={assExp.projectSS_nutricraft}/>
        </div>
        <div className="projects-item-cont">
          <h6>JAVASCRIPT - GEMINI API</h6>
          <h2>NutriCraft</h2>
          <p>An AI-generated weekly meal planner built with the Gemini API — structured JSON recipes, per-meal swapping, and an auto-built grocery list, all client-side.</p>
          <div className="button-contain">
            <button className='button'><a href="https://github.com/Navneet-Rishav/NutriCraft" target='_blank'>Github Link</a></button>
            <button className='button'><a href="https://navneet-rishav.github.io/NutriCraft/" target='_blank'>Live Website</a></button>
          </div>
        </div>
      </div>

      <div className="projects-item">
        <div className="projects-item-img">
          <img src={assExp.projectSS_03}/>
        </div>
        <div className="projects-item-cont">
          <h6>PYTHON - TURTLE</h6>
          <h2>Space Invaders</h2>
          <p>A console game developed by using Turtle Library of the Python which turns out as combat game b/w spaceship and aliens.</p>
          <div className="button-contain">
            <button className='button'><a href="https://github.com/himxnshutripathi/SpaceInvadersPyturtle" target='_blank'>Github Link</a></button>
          </div>
        </div>
      </div>
      </div>

      <div className="upcoming-title">
        <h2>Upcoming Projects</h2>
      </div>
      <div className="upcoming-list">
        {upcomingProjects.map((proj, idx) => (
          <div className="upcoming-item" key={proj.name}>
            <div className="upcoming-item-index">{String(idx + 1).padStart(2, '0')}</div>
            <div className="upcoming-item-body">
              <h3>{proj.name}</h3>
              <p>{proj.domain}</p>
            </div>
            <div className={`upcoming-status upcoming-status-${proj.status}`}>{proj.statusLabel}</div>
          </div>
        ))}
      </div>

    </div>
  )
}


export default Projects
