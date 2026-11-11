import { useEffect, useState } from 'react'
import { API_RESPONSE } from '../data/content'
import { UI, useLang } from '../i18n'

const BODY = JSON.stringify(API_RESPONSE, null, 2)
const CHAR_MS = 14

function prefersReducedMotion() {
  return Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
}

// A small "API call" card. The JSON body types out once on load (skipped under reduced motion).
// The full text is always laid out underneath, so the card never changes size while typing.
export default function HeroCard() {
  const ui = UI[useLang()]
  const [shown, setShown] = useState(() => (prefersReducedMotion() ? BODY.length : 0))

  // Runs once on load; the interval stops itself when the text is complete.
  useEffect(() => {
    if (prefersReducedMotion()) return undefined
    const timer = setInterval(() => {
      setShown((n) => {
        const next = Math.min(n + 2, BODY.length)
        if (next >= BODY.length) clearInterval(timer)
        return next
      })
    }, CHAR_MS * 2)
    return () => clearInterval(timer)
  }, [])

  const typing = shown < BODY.length

  return (
    <figure className="hero-card" aria-label={ui.heroLabel}>
      <div className="hero-card__bar" aria-hidden="true">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <p className="hero-card__request">
        <span className="hero-card__method">GET</span> /api/navneet
        <span className="hero-card__status">200 OK</span>
      </p>
      <pre className="hero-card__body">
        <code className="hero-card__full">{BODY}</code>
        <code className="hero-card__typed" aria-hidden="true">
          {BODY.slice(0, shown)}
          {typing && <span className="caret" />}
        </code>
      </pre>
    </figure>
  )
}
