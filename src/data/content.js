// All portfolio wording, taken from the resume (public/Navneet_Rishav_Full_Stack_GenAI_Developer.pdf).
// Keep this file and the resume in sync. Numbers must match what the repos' tests and evals actually report.
// Text fields are either a plain string (same in both languages) or { en, hi }. Tech names stay in English.

export const RESUME_URL = '/Navneet_Rishav_Full_Stack_GenAI_Developer.pdf'

export const LINKS = {
  github: 'https://github.com/Navneet-Rishav',
  linkedin: 'https://www.linkedin.com/in/navneet-rishav-4a80b2192/',
  email: 'rishavnavneet@gmail.com',
  site: 'its-navneetrishav.netlify.app',
}

export const NAME = 'Navneet Rishav'
export const HEADLINE = 'Full Stack GenAI Developer'
export const TAGLINE = {
  en: 'I build full stack web apps on the MERN stack, with LLM agents working inside them.',
  hi: 'मैं MERN stack पर full stack वेब ऐप बनाता हूँ, जिनके अंदर LLM agents काम करते हैं।',
}

// Shown in the hero card as the JSON body of GET /api/navneet (code, so English only).
export const API_RESPONSE = {
  role: 'Full Stack GenAI Developer',
  stack: 'MERN / LangGraph / RAG',
  location: 'Noida',
  status: 'open to work',
}

export const ABOUT = [
  {
    en: 'Full stack GenAI developer with 2.5+ years building web applications on the MERN stack (MongoDB, Express.js, React.js, Node.js) with REST APIs, and production GenAI features: LangGraph agents, structured LLM outputs, RAG, voice AI and PII-safe pipelines.',
    hi: '2.5+ साल का अनुभव: MERN stack (MongoDB, Express.js, React.js, Node.js) और REST APIs पर वेब ऐप, और production GenAI फ़ीचर: LangGraph agents, structured LLM outputs, RAG, voice AI और PII-safe pipelines।',
  },
  {
    en: 'At EXL Service I build React, Node.js and FastAPI features, LLM workflows and Twilio/Exotel phone integrations for an AI voice interviewer. I have built and deployed three full stack AI applications with live demos, tests and CI, including a MERN multi-agent support platform.',
    hi: 'EXL Service में मैं एक AI voice interviewer के लिए React, Node.js और FastAPI फ़ीचर, LLM workflows और Twilio/Exotel फ़ोन integrations बनाता हूँ। मैंने तीन full stack AI ऐप बनाकर deploy किए हैं, live demo, tests और CI के साथ; इनमें एक MERN multi-agent support platform भी है।',
  },
  {
    en: 'B.Tech, Information Technology, Lovely Professional University (2019–2023).',
    hi: 'B.Tech, Information Technology, Lovely Professional University (2019–2023)।',
  },
]

// Tags in these sets are coloured the same way everywhere on the site.
export const MERN_TAGS = new Set(['MongoDB', 'Express.js', 'React.js', 'Node.js', 'MERN'])
export const GENAI_TAGS = new Set([
  'LangGraph', 'LangGraph.js', 'LangChain', 'LLM APIs', 'RAG', 'Multi-agent', 'Evals', 'Gemini',
])

export const EXPERIENCE = [
  {
    role: { en: 'Reporting Analyst, GenAI Engineering team', hi: 'Reporting Analyst, GenAI Engineering टीम' },
    company: 'EXL Service',
    place: { en: 'Noida', hi: 'नोएडा' },
    period: { en: 'Apr 2026 – Present', hi: 'अप्रैल 2026 – अभी तक' },
    bullets: [
      {
        en: 'Build full stack features across a React.js frontend, Node.js/Express.js services and FastAPI REST APIs, with typed contracts and database queries.',
        hi: 'React.js frontend, Node.js/Express.js services और FastAPI REST APIs पर full stack फ़ीचर, typed contracts और database queries के साथ।',
      },
      {
        en: 'Integrated Twilio and Exotel telephony behind one interface: outbound calls, call-status webhooks with retries, and live call audio streamed over WebSockets into the speech pipeline.',
        hi: 'Twilio और Exotel telephony एक ही interface के पीछे: outbound calls, retries के साथ call-status webhooks, और WebSockets पर live call audio की streaming speech pipeline तक।',
      },
      {
        en: 'Designed the interview flow as a LangGraph state machine: the LLM returns schema-validated JSON, and code enforces the rules, consent gating and routing.',
        hi: 'Interview flow को LangGraph state machine के रूप में डिज़ाइन किया: LLM schema-validated JSON लौटाता है, और नियम, consent gating और routing code तय करता है।',
      },
    ],
    tags: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'LangGraph', 'Twilio', 'Exotel', 'WebSockets', 'Presidio'],
  },
  {
    role: { en: 'Full Stack Developer — MERN (Contract)', hi: 'Full Stack Developer — MERN (Contract)' },
    company: 'Regardo Vision and Sources Pvt. Ltd.',
    place: { en: 'New Delhi (Remote)', hi: 'नई दिल्ली (Remote)' },
    period: { en: 'Apr 2024 – Mar 2026', hi: 'अप्रैल 2024 – मार्च 2026' },
    bullets: [
      {
        en: 'Built and deployed a full stack workflow-automation platform with a React.js frontend and a REST API backend, cutting manual processing by about 40%.',
        hi: 'React.js frontend और REST API backend वाला full stack workflow-automation platform बनाकर deploy किया, जिससे manual processing लगभग 40% कम हुई।',
      },
      {
        en: 'Built REST APIs with Node.js and Express.js backed by MongoDB for client applications, and integrated third-party services.',
        hi: 'Client applications के लिए MongoDB पर Node.js और Express.js से REST APIs बनाए, और third-party services जोड़ीं।',
      },
      {
        en: 'Implemented JWT authentication and role-based access control; optimised SQL queries and added caching, improving API response times by about 35%.',
        hi: 'JWT authentication और role-based access control लागू किया; SQL queries optimise कीं और caching जोड़ी, जिससे API response time लगभग 35% बेहतर हुआ।',
      },
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'SQL', 'Docker', 'AWS'],
  },
]

export const PROJECTS = [
  {
    name: 'Support Escalation Mesh',
    label: 'MERN + Multi-Agent AI',
    image: 'mesh',
    alt: {
      en: 'Support Escalation Mesh ticket page: AI triage, the policy check result and the reasoning trail next to the draft reply',
      hi: 'Support Escalation Mesh का टिकट पेज: AI triage, policy check का नतीजा और draft reply के साथ reasoning trail',
    },
    pitch: {
      en: 'A multi-agent support desk: AI agents triage every ticket, code enforces the rules, and a human approves every reply.',
      hi: 'Multi-agent support desk: AI agents हर टिकट को triage करते हैं, नियम code लागू करता है, और हर जवाब इंसान approve करता है।',
    },
    bullets: [
      {
        en: 'Express.js REST API (JWT, role-based access, Zod validation, rate limiting) with MongoDB/Mongoose, and a React.js + TypeScript console where agents approve, edit or take over AI-drafted replies.',
        hi: 'MongoDB/Mongoose के साथ Express.js REST API (JWT, role-based access, Zod validation, rate limiting), और React.js + TypeScript console जहाँ agents AI-drafted जवाब approve, edit या take over करते हैं।',
      },
      {
        en: 'LangGraph.js multi-agent routing with refund limits and escalations enforced in code, plus an automatic rule-based fallback when the LLM API fails.',
        hi: 'LangGraph.js multi-agent routing; refund limits और escalations code में लागू, और LLM API फ़ेल होने पर अपने-आप rule-based fallback।',
      },
      {
        en: '30-ticket eval set (English, Hinglish, Hindi): 100% routing accuracy, 100% escalation recall, zero policy violations; 75 backend tests, CI, deployed on Render, Vercel and MongoDB Atlas.',
        hi: '30 टिकट का eval set (English, Hinglish, Hindi): 100% routing accuracy, 100% escalation recall, शून्य policy violations; 75 backend tests, CI, Render, Vercel और MongoDB Atlas पर deploy।',
      },
    ],
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'TypeScript', 'LangGraph.js', 'Multi-agent', 'Evals'],
    live: 'https://support-escalation-mesh.vercel.app',
    repo: 'https://github.com/Navneet-Rishav/support-escalation-mesh',
    health: 'https://support-escalation-mesh-api.onrender.com/healthz',
  },
  {
    name: 'Kaagaz (कागज़)',
    label: 'Hindi/English Document AI',
    image: 'kaagaz',
    alt: {
      en: 'Kaagaz summary tab: fields extracted from a rent agreement, each with its page, and counts of masked PAN, Aadhaar and phone numbers',
      hi: 'Kaagaz का Summary टैब: किराया अनुबंध से निकाले गए fields अपने पेज के साथ, और छिपाए गए PAN, Aadhaar व फ़ोन नंबरों की गिनती',
    },
    pitch: {
      en: 'Upload a Hindi or English document: personal numbers are masked before any LLM sees it, fields are extracted with page references, and questions are answered with checked citations.',
      hi: 'Hindi या English दस्तावेज़ अपलोड करें: LLM तक पहुँचने से पहले निजी नंबर छिपा दिए जाते हैं, fields पेज नंबर के साथ निकलते हैं, और सवालों के जवाब जाँचे हुए citations के साथ मिलते हैं।',
    },
    bullets: [
      {
        en: 'React.js + TypeScript app (TanStack Query, Hindi/English UI) on a FastAPI REST API with JWT auth, ownership checks, rate limits and a Postgres SKIP LOCKED job queue.',
        hi: 'FastAPI REST API पर React.js + TypeScript ऐप (TanStack Query, Hindi/English UI): JWT auth, ownership checks, rate limits और Postgres SKIP LOCKED job queue।',
      },
      {
        en: 'OCR → Presidio PII masking (Verhoeff-checked Aadhaar, PAN, phone) → LLM field extraction → cross-lingual RAG answers with page citations validated in code.',
        hi: 'OCR → Presidio PII masking (Verhoeff से जाँचा Aadhaar, PAN, फ़ोन) → LLM field extraction → cross-lingual RAG जवाब, जिनके page citations code में validate होते हैं।',
      },
      {
        en: '130+ automated tests (122 on real Postgres), CI on GitHub Actions; deployed on Render, Vercel and Neon.',
        hi: '130+ automated tests (122 असली Postgres पर), GitHub Actions पर CI; Render, Vercel और Neon पर deploy।',
      },
    ],
    tags: ['React.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'RAG', 'LLM APIs', 'Presidio'],
    live: 'https://kaagaz-pi.vercel.app',
    repo: 'https://github.com/Navneet-Rishav/kaagaz',
    health: 'https://kaagaz-api-l5j7.onrender.com/healthz',
  },
  {
    name: 'Bolo (बोलो)',
    label: 'Hinglish Voice AI Booking Agent',
    image: 'bolo',
    alt: {
      en: 'Bolo clinic dashboard call log: a Hinglish booking transcript with the phone number masked',
      hi: 'Bolo clinic dashboard का call log: Hinglish booking transcript, जिसमें फ़ोन नंबर छिपा हुआ है',
    },
    pitch: {
      en: 'Patients book, reschedule or cancel clinic appointments by talking in Hindi, English or Hinglish; staff see the calendar and every call transcript.',
      hi: 'मरीज़ Hindi, English या Hinglish में बोलकर clinic appointment बुक, reschedule या cancel करते हैं; staff को calendar और हर call का transcript दिखता है।',
    },
    bullets: [
      {
        en: 'Multi-tenant clinic app: React.js staff dashboard (calendar, call log, schedules) and patient widget on a REST API with JWT and per-clinic isolation.',
        hi: 'Multi-tenant clinic ऐप: React.js staff dashboard (calendar, call log, schedules) और patient widget, JWT और per-clinic isolation वाले REST API पर।',
      },
      {
        en: 'LangGraph conversation state machine over a speech-to-text/text-to-speech loop; the LLM only extracts fields, and code enforces slot rules and explicit confirmation.',
        hi: 'Speech-to-text/text-to-speech loop पर LangGraph conversation state machine; LLM सिर्फ़ fields निकालता है, slot के नियम और साफ़ confirmation code लागू करता है।',
      },
      {
        en: 'Postgres partial unique index prevents double booking under concurrent calls; 57 tests including 16 scripted Hinglish/Hindi conversations; deployed on Render, Vercel and Neon.',
        hi: 'Postgres partial unique index एक साथ आई calls में double booking रोकता है; 57 tests, जिनमें 16 scripted Hinglish/Hindi बातचीत; Render, Vercel और Neon पर deploy।',
      },
    ],
    tags: ['React.js', 'TypeScript', 'FastAPI', 'PostgreSQL', 'LangGraph', 'STT / TTS'],
    live: 'https://bolo-liard.vercel.app',
    repo: 'https://github.com/Navneet-Rishav/bolo',
    health: 'https://bolo-api.onrender.com/healthz',
  },
]

export const NUTRICRAFT = {
  name: 'NutriCraft',
  image: 'nutricraft',
  alt: {
    en: 'NutriCraft home page: plan setup form with Gemini API key, diet type, allergies and calorie target',
    hi: 'NutriCraft का होम पेज: Gemini API key, diet type, allergies और calorie target वाला plan setup फ़ॉर्म',
  },
  pitch: {
    en: 'AI weekly meal planner on the Gemini API with structured JSON output, per-meal swapping and an auto-built grocery list; fully client-side, bring your own key.',
    hi: 'Gemini API पर AI साप्ताहिक meal planner: structured JSON output, हर meal बदलने की सुविधा और अपने-आप बनने वाली grocery list; पूरी तरह browser में, अपनी API key के साथ।',
  },
  tags: ['JavaScript', 'Gemini', 'LLM APIs'],
  live: 'https://navneet-rishav.github.io/NutriCraft/',
  repo: 'https://github.com/Navneet-Rishav/NutriCraft',
}

export const SKILL_GROUPS = [
  { name: 'MERN Stack', highlight: 'mern', skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js'] },
  { name: 'GenAI & Agents', highlight: 'genai', skills: ['LangGraph', 'LangChain', 'LLM APIs', 'RAG', 'Multi-agent', 'Evals'] },
  { name: 'Backend & APIs', skills: ['REST APIs', 'JWT', 'FastAPI', 'Python', 'WebSockets'] },
  { name: 'Voice & Telephony', skills: ['Twilio', 'Exotel', 'Speech-to-text / text-to-speech', 'OCR', 'Presidio'] },
  { name: 'Frontend', skills: ['TypeScript', 'Tailwind CSS', 'TanStack Query'] },
  { name: 'Databases', skills: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { name: 'DevOps', skills: ['Docker', 'GitHub Actions', 'AWS', 'Render', 'Vercel'] },
]
