// All portfolio wording, taken from the resume (public/Navneet_Rishav_Full_Stack_GenAI_Developer.pdf).
// Keep this file and the resume in sync. Numbers must match what the repos' tests and evals actually report.

export const RESUME_URL = '/Navneet_Rishav_Full_Stack_GenAI_Developer.pdf'

export const HEADLINE = 'Full Stack GenAI Developer'
export const HEADLINE_STACK = 'MERN Stack · REST APIs · LangGraph · LLM APIs · RAG'
export const TYPEWRITER = ['Full Stack GenAI Developer', 'MERN Stack Developer', 'GenAI & LangGraph Developer']

export const ABOUT =
  'Full stack GenAI developer with 2.5+ years building web applications on the MERN stack (MongoDB, Express.js, React.js, Node.js) with REST APIs, and production GenAI features: LangGraph agents, structured LLM outputs, RAG, voice AI and PII-safe pipelines. At EXL Service I build REST services and LLM workflows for an AI voice interviewer. I have built and deployed three full stack AI applications with live demos, tests and CI, including a MERN multi-agent support platform. B.Tech in Information Technology, Lovely Professional University (2019–2023).'

// Tags in these sets are highlighted wherever they appear.
export const MERN_TAGS = new Set(['MongoDB', 'Express.js', 'React.js', 'Node.js'])
export const GENAI_TAGS = new Set(['LangGraph', 'LangGraph.js', 'LangChain', 'LLM APIs', 'RAG', 'Multi-agent', 'Evals', 'Gemini', 'Sarvam AI'])

export const EXPERIENCE = [
  {
    role: 'Reporting Analyst — GenAI Engineering',
    company: 'EXL Service, Noida',
    period: 'Apr 2026 – Present',
    bullets: [
      'Designed the interview flow as a LangGraph state machine: the LLM returns schema-validated JSON, and code enforces fairness rules, consent gating and routing.',
      'Built FastAPI REST APIs for candidate profiles, JD rubrics and workflow status, with Pydantic-typed contracts consumed by frontend and backend teams.',
      'Built a real-time WebSocket integration for live calls (speech-to-text, text-to-speech, voice-activity detection), replacing a local model pipeline.',
    ],
    tags: ['Python', 'FastAPI', 'REST APIs', 'LangGraph', 'Gemini', 'Pydantic', 'WebSockets', 'Presidio', 'Docker'],
  },
  {
    role: 'Full Stack Developer — MERN (Contract)',
    company: 'Regardo Vision and Sources Pvt. Ltd., New Delhi (Remote)',
    period: 'Apr 2024 – Mar 2026',
    bullets: [
      'Built and deployed a full stack workflow-automation platform with a React.js frontend and a REST API backend, cutting manual processing by about 40%.',
      'Built REST APIs with Node.js and Express.js backed by MongoDB for client applications, and integrated third-party services.',
      'Implemented JWT authentication and role-based access control; optimised SQL queries and added caching, improving API response times by about 35%.',
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'SQL', 'Django REST Framework', 'Docker', 'AWS'],
  },
]

export const SKILL_GROUPS = [
  { name: 'MERN Stack', highlight: 'mern', skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js'] },
  { name: 'GenAI & Agents', highlight: 'genai', skills: ['LangGraph', 'LangChain', 'LLM APIs', 'RAG', 'Multi-agent', 'Evals'] },
  { name: 'Backend & APIs', skills: ['REST APIs', 'JWT', 'FastAPI', 'Python', 'WebSockets'] },
  { name: 'Frontend', skills: ['TypeScript', 'Tailwind CSS', 'TanStack Query'] },
  { name: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { name: 'Voice & Document AI', skills: ['STT / TTS', 'OCR', 'Presidio'] },
  { name: 'DevOps', skills: ['Docker', 'GitHub Actions', 'AWS', 'Render', 'Vercel'] },
]

export const PROJECTS = [
  {
    name: 'Support Escalation Mesh',
    label: 'MERN + Multi-Agent AI',
    image: 'projectSS_mesh',
    pitch: 'A multi-agent support desk: AI agents triage every ticket, code enforces the rules, and a human approves every reply.',
    bullets: [
      'Express.js REST API (JWT, role-based access, Zod validation, rate limiting) with MongoDB/Mongoose, and a React.js + TypeScript console where agents approve, edit or take over AI-drafted replies.',
      'LangGraph.js multi-agent routing with refund limits and escalations enforced in code, plus an automatic rule-based fallback when the LLM API fails.',
      '30-ticket eval set (English, Hinglish, Hindi): 100% routing accuracy, 100% escalation recall, zero policy violations; 75 backend tests, CI, deployed on Render, Vercel and MongoDB Atlas.',
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'LangGraph.js', 'Multi-agent', 'Evals'],
    live: 'https://support-escalation-mesh.vercel.app',
    repo: 'https://github.com/Navneet-Rishav/support-escalation-mesh',
  },
  {
    name: 'Kaagaz (कागज़)',
    label: 'Hindi/English Document AI',
    image: 'projectSS_kaagaz',
    pitch: 'Upload a Hindi or English document: personal numbers are masked before any LLM sees it, fields are extracted with page references, and questions are answered with checked citations.',
    bullets: [
      'React.js + TypeScript app (TanStack Query, Hindi/English UI) on a FastAPI REST API with JWT auth, ownership checks, rate limits and a Postgres SKIP LOCKED job queue.',
      'OCR → Presidio PII masking (Verhoeff-checked Aadhaar, PAN, phone) → LLM field extraction → cross-lingual RAG answers with page citations validated in code.',
      '130+ automated tests (122 on real Postgres), CI on GitHub Actions; deployed on Render, Vercel and Neon.',
    ],
    tags: ['React.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'RAG', 'LLM APIs', 'Presidio'],
    live: 'https://kaagaz-pi.vercel.app',
    repo: 'https://github.com/Navneet-Rishav/kaagaz',
  },
  {
    name: 'Bolo (बोलो)',
    label: 'Hinglish Voice AI Booking Agent',
    image: 'projectSS_bolo',
    pitch: 'Patients book, reschedule or cancel clinic appointments by talking in Hindi, English or Hinglish; staff see the calendar and every call transcript.',
    bullets: [
      'Multi-tenant clinic app: React.js staff dashboard (calendar, call log, schedules) and patient widget on a REST API with JWT and per-clinic isolation.',
      'LangGraph conversation state machine over a speech-to-text/text-to-speech loop; the LLM only extracts fields, and code enforces slot rules and explicit confirmation.',
      'Postgres partial unique index prevents double booking under concurrent calls; 57 tests including 16 scripted Hinglish/Hindi conversations; deployed on Render, Vercel and Neon.',
    ],
    tags: ['React.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'LangGraph', 'STT / TTS'],
    live: 'https://bolo-liard.vercel.app',
    repo: 'https://github.com/Navneet-Rishav/bolo',
  },
]

export const NUTRICRAFT = {
  name: 'NutriCraft',
  image: 'projectSS_nutricraft',
  pitch: 'AI weekly meal planner on the Gemini API with structured JSON output, per-meal swapping and an auto-built grocery list; fully client-side, bring your own key.',
  tags: ['JavaScript', 'Gemini', 'LLM APIs'],
  live: 'https://navneet-rishav.github.io/NutriCraft/',
  repo: 'https://github.com/Navneet-Rishav/NutriCraft',
}
