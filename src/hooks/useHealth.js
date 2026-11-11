import { useEffect, useState } from 'react'

const WAKING_AFTER_MS = 2500 // a warm Render service answers well within this
const GIVE_UP_AFTER_MS = 75000 // a cold start on Render free usually takes 30–60 s

// Pings a project's /healthz once on page load.
// Status: 'checking' → 'waking' (slow answer, likely a Render cold start) → 'live' | 'down'.
// The APIs only allow their own frontend origin (CORS), so this uses a no-cors request: the response is
// opaque, but it resolving at all means the server answered. Network errors and timeouts mean 'down'.
// It never throws, so a failing backend can't break the page.
export function useHealth(url) {
  const [status, setStatus] = useState(url ? 'checking' : null)

  useEffect(() => {
    if (!url || typeof fetch !== 'function') return undefined
    let done = false // set once we have an answer or the component unmounted
    const controller = new AbortController()
    const waking = setTimeout(() => {
      if (!done) setStatus('waking')
    }, WAKING_AFTER_MS)
    const giveUp = setTimeout(() => controller.abort(), GIVE_UP_AFTER_MS)
    const finish = (next) => {
      if (done) return
      done = true
      clearTimeout(waking)
      clearTimeout(giveUp)
      setStatus(next)
    }

    fetch(url, { mode: 'no-cors', cache: 'no-store', signal: controller.signal })
      .then(() => finish('live'))
      .catch(() => finish('down'))

    return () => {
      done = true
      clearTimeout(waking)
      clearTimeout(giveUp)
      controller.abort()
    }
  }, [url])

  return status
}
