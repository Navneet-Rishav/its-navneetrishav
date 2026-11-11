import { EXPERIENCE } from '../data/content'
import { UI, pick, useLang } from '../i18n'
import { TagList } from './Tag'

export function Legend() {
  const ui = UI[useLang()]
  return (
    <p className="legend">
      {ui.legend} <span className="tag tag--mern">{ui.legendMern}</span>{' '}
      <span className="tag tag--genai">{ui.legendGenai}</span>
    </p>
  )
}

export default function Experience() {
  const lang = useLang()
  const ui = UI[lang]
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <h2 id="experience-title" className="section__title">{ui.experienceTitle}</h2>
      <Legend />
      <ol className="timeline">
        {EXPERIENCE.map((job) => (
          <li key={job.company} className="job">
            <p className="job__period">{pick(job.period, lang)}</p>
            <div>
              <h3 className="job__role">
                {pick(job.role, lang)}
                <span className="job__company">
                  {' · '}
                  {job.company}, {pick(job.place, lang)}
                </span>
              </h3>
              <ul className="job__bullets">
                {job.bullets.map((b) => (
                  <li key={b.en}>{pick(b, lang)}</li>
                ))}
              </ul>
              <TagList tags={job.tags} label={`${job.company}: stack`} />
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
