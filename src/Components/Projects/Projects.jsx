import React from 'react'
import './Projects.css'
import { assExp } from '../../assets/assets'
import { NUTRICRAFT, PROJECTS } from '../../data/content'
import { TagList } from '../Tag/Tag'

const Buttons = ({ live, repo, name }) => (
  <div className="button-contain">
    <a className="pill-btn" href={live} target="_blank" rel="noreferrer" aria-label={`${name} live demo`}>Live demo</a>
    <a className="pill-btn pill-btn-outline" href={repo} target="_blank" rel="noreferrer" aria-label={`${name} on GitHub`}>GitHub</a>
  </div>
)

const Projects = () => (
  <section className="projects" id="projects" aria-labelledby="projects-title">
    <h2 id="projects-title">Projects</h2>
    <p className="projects-intro">Three full stack AI applications, each with a live demo, tests, CI and a deployed backend.</p>

    <div className="project-list">
      {PROJECTS.map((p) => (
        <article key={p.name} className="project-card">
          <a className="project-img" href={p.live} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
            <img src={assExp[p.image]} alt="" loading="lazy" width="960" height="600" />
          </a>
          <div className="project-body">
            <p className={`project-label${p.label.startsWith('MERN') ? ' project-label-mern' : ''}`}>{p.label}</p>
            <h3>{p.name}</h3>
            <p className="project-pitch">{p.pitch}</p>
            <ul className="project-bullets">
              {p.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <TagList tags={p.tags} label={`${p.name} tech stack`} />
            <Buttons live={p.live} repo={p.repo} name={p.name} />
          </div>
        </article>
      ))}

      <article className="project-card project-card-small">
        <a className="project-img" href={NUTRICRAFT.live} target="_blank" rel="noreferrer" tabIndex={-1} aria-hidden="true">
          <img src={assExp[NUTRICRAFT.image]} alt="" loading="lazy" />
        </a>
        <div className="project-body">
          <h3>{NUTRICRAFT.name}</h3>
          <p className="project-pitch">{NUTRICRAFT.pitch}</p>
          <TagList tags={NUTRICRAFT.tags} label="NutriCraft tech stack" />
          <Buttons live={NUTRICRAFT.live} repo={NUTRICRAFT.repo} name={NUTRICRAFT.name} />
        </div>
      </article>
    </div>
  </section>
)

export default Projects
