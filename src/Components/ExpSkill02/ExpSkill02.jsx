import React from 'react'
import './ExpSkill02.css'
import { skill_list_01 , skill_list_02} from '../../assets/assets'

const skills = [...skill_list_01, ...skill_list_02]

const ExpSkill02 = () => {

  return (
    <section className='ExpSkill02' id='ExpSkill02'>
        <h2>Ask me about</h2>
        <div className="ExpSkill02-list">
            {skills.map((skill)=>(
                <a key={skill.skill_name} href={skill.skill_link} target='_blank' rel="noreferrer" className='ExpSkill02-list-item'>
                    <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
                        <source src={skill.skill_vid} type='video/mp4'/>
                    </video>
                    <div className="ExpSkill02-list-item-contents">
                        <span className="ExpSkill02-ext">{skill.skill_ext}</span>
                        <p>{skill.skill_name}</p>
                    </div>
                </a>
            ))}
        </div>
    </section>
  )
}

export default ExpSkill02
