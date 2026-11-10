import React from 'react'
import './Experience.css'
import { EXPERIENCE } from '../../data/content'
import { TagList } from '../Tag/Tag'

const Experience = () => (
  <section className="experience" id="experience" aria-labelledby="experience-title">
    <h2 id="experience-title">Experience</h2>
    <ol className="timeline">
      {EXPERIENCE.map((job) => (
        <li key={job.company} className="timeline-item">
          <span className="timeline-dot" aria-hidden="true" />
          <div className="timeline-head">
            <div>
              <h3>{job.role}</h3>
              <p className="timeline-company">{job.company}</p>
            </div>
            <p className="timeline-period">{job.period}</p>
          </div>
          <ul className="timeline-bullets">
            {job.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <TagList tags={job.tags} label={`${job.company} tech stack`} />
        </li>
      ))}
    </ol>
  </section>
)

export default Experience
