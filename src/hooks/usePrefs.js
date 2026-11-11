import { useCallback, useEffect, useState } from 'react'

// localStorage can throw (private mode, storage disabled, quota), so every access is guarded.
function read(key) {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function write(key, value) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    /* preference just won't persist */
  }
}

const darkQuery = () => window.matchMedia?.('(prefers-color-scheme: dark)')

export function useLanguage() {
  const [lang, setLang] = useState(() => (read('lang') === 'hi' ? 'hi' : 'en'))

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggle = useCallback(() => {
    setLang((current) => {
      const next = current === 'en' ? 'hi' : 'en'
      write('lang', next)
      return next
    })
  }, [])

  return [lang, toggle]
}

// Follows the system setting until the visitor picks a theme; their pick is then remembered.
export function useTheme() {
  const [saved, setSaved] = useState(() => {
    const value = read('theme')
    return value === 'light' || value === 'dark' ? value : null
  })
  const [systemDark, setSystemDark] = useState(() => Boolean(darkQuery()?.matches))

  useEffect(() => {
    const query = darkQuery()
    if (!query) return undefined
    const onChange = (e) => setSystemDark(e.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  const theme = saved ?? (systemDark ? 'dark' : 'light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggle = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    write('theme', next)
    setSaved(next)
  }, [theme])

  return [theme, toggle]
}
