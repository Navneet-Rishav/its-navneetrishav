import { HEADLINE, LINKS, NAME, RESUME_URL, TAGLINE } from '../data/content'
import { UI, pick, useLang } from '../i18n'
import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon, MoonIcon, SunIcon } from './Icons'

export const SECTION_IDS = ['about', 'experience', 'projects', 'skills']

// Left column on desktop (sticky); the top block on phones.
export default function Sidebar({ active, theme, onToggleTheme, onToggleLang }) {
  const lang = useLang()
  const ui = UI[lang]

  return (
    <header className="sidebar">
      <div>
        <h1 className="sidebar__name">
          <a href="#top">{pick(NAME, lang)}</a>
        </h1>
        <p className="sidebar__title">{HEADLINE}</p>
        <p className="sidebar__tagline">{pick(TAGLINE, lang)}</p>

        <nav className="sidebar__nav" aria-label={ui.navLabel}>
          <ul>
            {SECTION_IDS.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={active === id ? 'is-active' : undefined} aria-current={active === id ? 'true' : undefined}>
                  <span className="sidebar__nav-line" aria-hidden="true" />
                  {ui.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="sidebar__bottom">
        <ul className="social" aria-label={ui.socialLabel}>
          <li>
            <a href={LINKS.github} target="_blank" rel="noreferrer" aria-label={`GitHub ${ui.opensNewTab}`}>
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label={`LinkedIn ${ui.opensNewTab}`}>
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a href={`mailto:${LINKS.email}`} aria-label={`${ui.email}: ${LINKS.email}`}>
              <MailIcon />
            </a>
          </li>
          <li>
            <a className="social__resume" href={RESUME_URL} target="_blank" rel="noreferrer" aria-label={`${ui.resume} (PDF) ${ui.opensNewTab}`}>
              <FileIcon />
              <span aria-hidden="true">{ui.resume}</span>
            </a>
          </li>
        </ul>

        <div className="toggles">
          {/* Visible text stays first in the accessible name (WCAG 2.5.3); the hint is for screen readers. */}
          <button type="button" className="toggle" onClick={onToggleLang}>
            <span lang={lang === 'en' ? 'hi' : 'en'}>{ui.langToggle}</span>
            <span className="sr-only"> ({ui.langToggleLabel})</span>
          </button>
          <button
            type="button"
            className="toggle toggle--icon"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? ui.themeToLight : ui.themeToDark}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
