import React from 'react'
import './CertiItem.css'

const CertiItem = (props) => {
  return (
    <article className='CertiItem'>
        <div className="left">
            <img src={props.img} alt={`${props.name} certificate`} />
        </div>
        <div className="right">
            <h2>{props.date}</h2>
            <h3>{props.name}</h3>
            <ul>
                <li>{props.l1}</li>
                <li>{props.l2}</li>
                <li>{props.l3}</li>
            </ul>
            <div className="certi-buttons">
                <a className="pill-btn" href={props.link} target='_blank' rel="noreferrer">View Certificate</a>
            </div>
        </div>
    </article>
  )
}

export default CertiItem
