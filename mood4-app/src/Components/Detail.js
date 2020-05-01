import React, { useState, useEffect } from 'react'
import '../Styles/Detail.css'
import GoogleMaps from './GoogleMaps'

export default function Detail({ details }) {
  const [displayMap, updateDisplayMap] = useState('google-maps-hidden')
  const [displayBackToResult, updateBackToResult] = useState('result')
  const [mapIsLoaded, updateMapIsLoaded] = useState(false)
  useEffect(() => {
  }, [])

  const showMap = () => {
    updateBackToResult('result-hidden')
    updateDisplayMap('google-maps')
    updateMapIsLoaded(true)
  }

  const backToResult = () => {
    updateBackToResult('result')
    updateDisplayMap('google-maps-hidden')
  }

  const loadMap = () => {
    let address = details[0].location.display_address[0] + " " + details[0].location.display_address[1]
    return (
      <div>
        <GoogleMaps address={address} />
      </div>
    )
  }
  return (
    <div className='detail-component-container'> { details[0] ? 
      <div>
        <div className={displayBackToResult}>
          <div className='image-container'>
            <img className='result-image' src={details[0].image_url}></img>
          </div>
          <h2>{details[0].name}</h2>
          <p>{details[0].location.display_address[0]} <br /> {details[0].location.display_address[1]}</p>
          <a href={details[0].url} target='_blank'>Click here for more details</a>
          <p>{details[0].display_phone}</p>
          <button className='map-button' onClick={showMap}>Map</button> 
        </div>
        <div className={displayMap}>
          
          {/* this is the hidden area that when displayed calls the Google Maps API */}
          {/* shows empty div the whole time until mapIsLoaded is set to true */}
          {mapIsLoaded ? loadMap() : <div></div> }
          <h2>{details[0].name}</h2>
          <p>{details[0].location.display_address[0]} <br /> {details[0].location.display_address[1]}</p>
          <a href={details[0].url} target='_blank'>Click here for more details</a>
          <p>{details[0].display_phone}</p>
          <button className='map-button' onClick={backToResult}>Hide Map</button>
        </div>
      </div>
      :
      <div></div>
    }
    </div>
  )
}
