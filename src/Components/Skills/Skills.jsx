import React from 'react'
import './Skills.css'
import { SKILL_GROUPS } from '../../data/content'
import Tag from '../Tag/Tag'

const Skills = () => (
  <section className="skills" id="skills" aria-labelledby="skills-title">
    <h2 id="skills-title">Skills</h2>
    <div className="skill-groups">
      {SKILL_GROUPS.map((g) => (
        <div key={g.name} className={`skill-group${g.highlight ? ` skill-group-${g.highlight}` : ''}`}>
          <h3>{g.name}</h3>
          <ul className="tag-list" aria-label={g.name}>
            {g.skills.map((s) => (
              <li key={s}>
                <Tag name={s} variant={g.highlight ?? 'plain'} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
)

export default Skills
