import { createContext, useContext } from 'react'

// UI labels in both languages. Section content lives in data/content.js.
export const UI = {
  en: {
    skip: 'Skip to content',
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills' },
    navLabel: 'Sections',
    socialLabel: 'Links',
    resume: 'Resume',
    email: 'Email',
    langToggle: 'हिंदी',
    langToggleLabel: 'Switch to Hindi',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    heroLabel: 'Profile as an API response',
    experienceTitle: 'Experience',
    projectsTitle: 'Projects',
    skillsTitle: 'Skills',
    aboutTitle: 'About',
    contactTitle: 'Contact',
    legend: 'Colour key:',
    legendMern: 'MERN stack',
    legendGenai: 'GenAI',
    liveDemo: 'Live demo',
    github: 'GitHub',
    opensNewTab: '(opens in a new tab)',
    status: { checking: 'Checking…', waking: 'Waking up…', live: 'Live', down: 'Not responding' },
    statusHelp: 'Backend status from its /healthz endpoint. Free Render services sleep when idle and take up to a minute to wake.',
    moreProjects: 'Also built',
    contactText:
      "I'm open to full stack roles where React, Node.js and LLM features ship together. Email is the fastest way to reach me.",
    sayHello: 'Say hello',
    footer: 'Built with React and Vite. Layout inspired by Brittany Chiang’s portfolio.',
  },
  hi: {
    skip: 'मुख्य सामग्री पर जाएँ',
    nav: { about: 'परिचय', experience: 'अनुभव', projects: 'प्रोजेक्ट', skills: 'स्किल्स' },
    navLabel: 'सेक्शन',
    socialLabel: 'लिंक',
    resume: 'रिज़्यूमे',
    email: 'ईमेल',
    langToggle: 'English',
    langToggleLabel: 'अंग्रेज़ी में देखें',
    themeToDark: 'डार्क थीम पर जाएँ',
    themeToLight: 'लाइट थीम पर जाएँ',
    heroLabel: 'API response के रूप में प्रोफ़ाइल',
    experienceTitle: 'अनुभव',
    projectsTitle: 'प्रोजेक्ट',
    skillsTitle: 'स्किल्स',
    aboutTitle: 'परिचय',
    contactTitle: 'संपर्क',
    legend: 'रंगों का मतलब:',
    legendMern: 'MERN stack',
    legendGenai: 'GenAI',
    liveDemo: 'Live demo',
    github: 'GitHub',
    opensNewTab: '(नए टैब में खुलेगा)',
    status: { checking: 'जाँच हो रही है…', waking: 'चालू हो रहा है…', live: 'Live', down: 'जवाब नहीं मिला' },
    statusHelp: 'Backend की स्थिति उसके /healthz endpoint से। Render की free services खाली रहने पर सो जाती हैं और जागने में एक मिनट तक लगता है।',
    moreProjects: 'और भी',
    contactText:
      'मैं ऐसे full stack रोल के लिए उपलब्ध हूँ जहाँ React, Node.js और LLM फ़ीचर साथ में बनते हैं। मुझसे जल्दी संपर्क का तरीका ईमेल है।',
    sayHello: 'ईमेल भेजें',
    footer: 'React और Vite से बना। Layout Brittany Chiang के portfolio से प्रेरित।',
  },
}

export const LangContext = createContext('en')

export function useLang() {
  return useContext(LangContext)
}

// Picks the right language from a content field: a plain string, or { en, hi }.
export function pick(field, lang) {
  if (field == null || typeof field === 'string') return field
  return field[lang] ?? field.en
}
