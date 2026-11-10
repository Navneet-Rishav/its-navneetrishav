import React from 'react'
import './Tag.css'
import { GENAI_TAGS, MERN_TAGS } from '../../data/content'

/** A small tech chip. MERN and GenAI tags are highlighted so they stand out wherever they appear. */
const Tag = ({ name, variant }) => {
  const kind = variant ?? (MERN_TAGS.has(name) ? 'mern' : GENAI_TAGS.has(name) ? 'genai' : 'plain')
  return <span className={`tag tag-${kind}`}>{name}</span>
}

export const TagList = ({ tags, label }) => (
  <ul className="tag-list" aria-label={label}>
    {tags.map((t) => (
      <li key={t}><Tag name={t} /></li>
    ))}
  </ul>
)

export default Tag
