import { SKILL_GROUPS } from '../data/content'
import { UI, useLang } from '../i18n'
import Tag from './Tag'

export default function Skills() {
  const ui = UI[useLang()]
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <h2 id="skills-title" className="section__title">{ui.skillsTitle}</h2>
      <dl className="skills">
        {SKILL_GROUPS.map((group) => (
          <div key={group.name} className={`skills__group${group.highlight ? ' skills__group--key' : ''}`}>
            <dt>{group.name}</dt>
            <dd>
              <ul className="tags">
                {group.skills.map((s) => (
                  <Tag key={s} name={s} kind={group.highlight ?? 'plain'} />
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
