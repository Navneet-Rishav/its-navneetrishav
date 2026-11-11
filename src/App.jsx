import { useActiveSection } from './hooks/useActiveSection'
import { useLanguage, useTheme } from './hooks/usePrefs'
import { LangContext, UI } from './i18n'
import About from './sections/About'
import Contact from './sections/Contact'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Sidebar, { SECTION_IDS } from './sections/Sidebar'
import Skills from './sections/Skills'

export default function App() {
  const [lang, toggleLang] = useLanguage()
  const [theme, toggleTheme] = useTheme()
  const active = useActiveSection(SECTION_IDS)

  return (
    <LangContext.Provider value={lang}>
      <a className="skip-link" href="#main">
        {UI[lang].skip}
      </a>
      <div className="layout" id="top">
        <Sidebar active={active} theme={theme} onToggleTheme={toggleTheme} onToggleLang={toggleLang} />
        <main id="main" tabIndex={-1}>
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </LangContext.Provider>
  )
}
