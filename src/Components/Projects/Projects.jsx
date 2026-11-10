import React from 'react'
import './Projects.css'
import { assExp } from '../../assets/assets'

// Add `repo` once the repository is public and `live` only once it is actually deployed.
const upcomingProjects = [
  {
    name: 'Support Escalation Mesh',
    pitch: 'MERN support desk: Express REST API with JWT and role-based access, a React agent console with human approval, and AI ticket routing with code-enforced guardrails.',
    stack: 'MongoDB · Express · React · Node.js · TypeScript',
    repo: 'https://github.com/Navneet-Rishav/support-escalation-mesh',
    live: 'https://support-escalation-mesh.vercel.app',
    status: 'live',
    statusLabel: '✅ Live',
  },
  {
    name: 'Kaagaz (कागज़)',
    pitch: 'Hindi/English document assistant: FastAPI REST API with JWT auth, a Postgres job queue, Aadhaar/PAN masking before any LLM, field extraction with page refs and Q&A with code-checked citations.',
    stack: 'FastAPI · Postgres · React · TypeScript · Sarvam AI',
    repo: 'https://github.com/Navneet-Rishav/kaagaz',
    live: 'https://kaagaz-pi.vercel.app',
    status: 'live',
    statusLabel: '✅ Live',
  },
  {
    name: 'Bolo (बोलो)',
    pitch: 'Hinglish voice receptionist for clinics: book, reschedule or cancel appointments by voice, with a staff dashboard.',
    stack: 'FastAPI · LangGraph · Postgres · React · Sarvam STT/TTS',
    repo: 'https://github.com/Navneet-Rishav/bolo',
    live: 'https://bolo-liard.vercel.app',
    status: 'live',
    statusLabel: '✅ Live',
  },
]

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="below-title">
        <article className="projects-item">
          <div className="projects-item-img">
            <img src={assExp.projectSS_nutricraft} alt="NutriCraft meal planner screenshot"/>
          </div>
          <div className="projects-item-cont">
            <h6>JAVASCRIPT - GEMINI API</h6>
            <h3>NutriCraft</h3>
            <p>An AI-generated weekly meal planner built with the Gemini API: structured JSON recipes, per-meal swapping, and an auto-built grocery list, all client-side.</p>
            <div className="button-contain">
              <a className='pill-btn' href="https://github.com/Navneet-Rishav/NutriCraft" target='_blank' rel="noreferrer">GitHub</a>
              <a className='pill-btn' href="https://navneet-rishav.github.io/NutriCraft/" target='_blank' rel="noreferrer">Live Website</a>
            </div>
          </div>
        </article>
      </div>

      <div className="upcoming-title">
        <h2>Full-Stack Projects</h2>
      </div>
      <div className="upcoming-list">
        {upcomingProjects.map((proj, idx) => (
          <div className="upcoming-item" key={proj.name}>
            <div className="upcoming-item-index">{String(idx + 1).padStart(2, '0')}</div>
            <div className="upcoming-item-body">
              <h3>{proj.name}</h3>
              <p>{proj.pitch}</p>
              <p className="upcoming-stack">{proj.stack}</p>
            </div>
            <div className="upcoming-actions">
              {proj.repo && <a className="pill-btn" href={proj.repo} target="_blank" rel="noreferrer">GitHub</a>}
              {proj.live
                ? <a className="pill-btn" href={proj.live} target="_blank" rel="noreferrer">Live demo</a>
                : <div className={`upcoming-status upcoming-status-${proj.status}`}>{proj.statusLabel}</div>}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}


export default Projects
