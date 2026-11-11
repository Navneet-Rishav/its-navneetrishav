// Dev helper: checks each project's /healthz (as the portfolio's status dots do) and prints the CORS header
// returned for the portfolio origin. Usage: node scripts/check-health.mjs [origin]
const urls = [
  'https://support-escalation-mesh-api.onrender.com/healthz',
  'https://kaagaz-api-l5j7.onrender.com/healthz',
  'https://bolo-api.onrender.com/healthz',
]
const origin = process.argv[2] || 'https://its-navneetrishav.netlify.app'

await Promise.all(
  urls.map(async (url) => {
    const start = Date.now()
    try {
      const res = await fetch(url, { headers: { Origin: origin }, signal: AbortSignal.timeout(120_000) })
      const body = (await res.text()).slice(0, 120)
      console.log(url, res.status, `${Date.now() - start} ms`, 'CORS:', res.headers.get('access-control-allow-origin'), body)
    } catch (err) {
      console.log(url, 'ERROR', err.name, `${Date.now() - start} ms`)
    }
  }),
)
