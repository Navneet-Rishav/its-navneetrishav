import { GENAI_TAGS, MERN_TAGS } from '../data/content'

// A tech chip. MERN and GenAI tags get their own colours, the same everywhere on the site.
export function tagKind(name) {
  if (MERN_TAGS.has(name)) return 'mern'
  if (GENAI_TAGS.has(name)) return 'genai'
  return 'plain'
}

export default function Tag({ name, kind }) {
  return <li className={`tag tag--${kind ?? tagKind(name)}`}>{name}</li>
}

export function TagList({ tags, label }) {
  return (
    <ul className="tags" aria-label={label}>
      {tags.map((t) => (
        <Tag key={t} name={t} />
      ))}
    </ul>
  )
}
