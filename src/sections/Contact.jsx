import { LINKS, RESUME_URL } from '../data/content'
import { UI, useLang } from '../i18n'

export default function Contact() {
  const ui = UI[useLang()]
  const year = new Date().getFullYear()
  return (
    <>
      <section id="contact" className="section" aria-labelledby="contact-title">
        <h2 id="contact-title" className="section__title">{ui.contactTitle}</h2>
        <p className="contact__text">{ui.contactText}</p>
        <p className="project__links">
          <a className="btn btn--primary" href={`mailto:${LINKS.email}`}>
            {ui.sayHello}
          </a>
          <a className="btn" href={LINKS.linkedin} target="_blank" rel="noreferrer">
            LinkedIn<span className="sr-only"> {ui.opensNewTab}</span>
          </a>
          <a className="btn" href={RESUME_URL} target="_blank" rel="noreferrer">
            {ui.resume} (PDF)<span className="sr-only"> {ui.opensNewTab}</span>
          </a>
        </p>
        <p className="contact__email">{LINKS.email}</p>
      </section>
      <footer className="footer">
        <p>
          © {year} Navneet Rishav · {LINKS.site}
        </p>
        <p>{ui.footer}</p>
      </footer>
    </>
  )
}
