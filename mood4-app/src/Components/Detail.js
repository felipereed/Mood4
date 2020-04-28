import React from 'react'
import '../Styles/Detail.css'

export default function Detail({ details }) {
  console.log(details)
  return (
    <div className='detail-component-container'>
      <img className='result-image' src={details[0].image_url}></img>
      <h2>{details[0].name}</h2>
      <p>{details[0].location.display_address[0]} <br /> {details[0].location.display_address[1]}</p>
      <a href={details[0].url} target='_blank'>Click here for more details</a>
      <p>{details[0].display_phone}</p>
    </div>
  )
}
