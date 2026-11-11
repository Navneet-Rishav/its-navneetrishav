import { NUTRICRAFT, PROJECTS } from '../data/content'
import { useHealth } from '../hooks/useHealth'
import { UI, pick, useLang } from '../i18n'
import mesh from '../assets/projectSS_mesh.jpg'
import kaagaz from '../assets/projectSS_kaagaz.jpg'
import bolo from '../assets/projectSS_bolo.jpg'
import nutricraft from '../assets/projectSS_nutricraft.jpg'
import { ArrowIcon } from './Icons'
import { TagList } from './Tag'

const IMAGES = { mesh, kaagaz, bolo, nutricraft }

function StatusDot({ url }) {
  const ui = UI[useLang()]
  const status = useHealth(url)
  return (
    <p className={`status status--${status}`} title={ui.statusHelp} role="status">
      <span className="status__dot" aria-hidden="true" />
      {ui.status[status]}
    </p>
  )
}

function Links({ project }) {
  const ui = UI[useLang()]
  return (
    <p className="project__links">
      <a className="btn btn--primary" href={project.live} target="_blank" rel="noreferrer">
        {ui.liveDemo} <ArrowIcon />
        <span className="sr-only"> {project.name} {ui.opensNewTab}</span>
      </a>
      <a className="btn" href={project.repo} target="_blank" rel="noreferrer">
        {ui.github} <ArrowIcon />
        <span className="sr-only"> {project.name} {ui.opensNewTab}</span>
      </a>
    </p>
  )
}

function ProjectCard({ project }) {
  const lang = useLang()
  return (
    <li className="project">
      <img
        className="project__img"
        src={IMAGES[project.image]}
        alt={pick(project.alt, lang)}
        width="960"
        height="600"
        loading="lazy"
        decoding="async"
      />
      <div className="project__body">
        <div className="project__head">
          <h3 className="project__name">
            {project.name}
            <span className="project__label">{project.label}</span>
          </h3>
          <StatusDot url={project.health} />
        </div>
        <p className="project__pitch">{pick(project.pitch, lang)}</p>
        <ul className="project__bullets">
          {project.bullets.map((b) => (
            <li key={b.en}>{pick(b, lang)}</li>
          ))}
        </ul>
        <TagList tags={project.tags} label={`${project.name}: stack`} />
        <Links project={project} />
      </div>
    </li>
  )
}

export default function Projects() {
  const lang = useLang()
  const ui = UI[lang]
  const small = NUTRICRAFT
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <h2 id="projects-title" className="section__title">{ui.projectsTitle}</h2>
      <ul className="projects">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </ul>

      <h3 className="subhead">{ui.moreProjects}</h3>
      <article className="project project--small">
        <img
          className="project__img"
          src={IMAGES[small.image]}
          alt={pick(small.alt, lang)}
          width="1280"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <div className="project__body">
          <h4 className="project__name">{small.name}</h4>
          <p className="project__pitch">{pick(small.pitch, lang)}</p>
          <TagList tags={small.tags} label={`${small.name}: stack`} />
          <Links project={small} />
        </div>
      </article>
    </section>
  )
}
