import { ABOUT } from '../data/content'
import { UI, pick, useLang } from '../i18n'
import HeroCard from './HeroCard'

export default function About() {
  const lang = useLang()
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <h2 id="about-title" className="section__title">{UI[lang].aboutTitle}</h2>
      <HeroCard />
      <div className="about">
        {ABOUT.map((para) => (
          <p key={para.en}>{pick(para, lang)}</p>
        ))}
      </div>
    </section>
  )
}
