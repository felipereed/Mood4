import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown'
import '../Styles/Home.css'
import DropdownConfiguration from "../DropdownConfiguration.json"
import { Link } from 'react-router-dom';



export default function Home(props) {
  const [neighborhood, updateNeighborhood] = useState([])
  const [subNeighborhood, updateSubNeighborhood] = useState([])
  const [location, updateLocation] = useState('')
  const [searchTerm, updateSearchTerm] = useState('')
  const [displayLocation, updateDisplayLocation] = useState('location-hidden')
  const [displaySubLocation, updateDisplaySubLocation] = useState('sub-location-hidden')
  const [latitude, updateLatitude] = useState(0)
  const [longitude, updateLongitude] = useState(0)
  useEffect(() => {
  }, [])
 
  const cityChanged = (event) => {
    updateNeighborhood([])
    updateSubNeighborhood([])
    updateDisplayLocation('location-hidden')
    updateDisplaySubLocation('sub-location-hidden')
    // use my location
    if (event.value == 0) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(findPosition)
      } else {
        alert(`Can't find your location`)
      }
      updateLocation('mylocation')
    }
    else {
      updateLatitude(0)
      updateLongitude(0)

      let neighborhoods = DropdownConfiguration[1].options[event.value].neighborhoods;
      updateNeighborhood(neighborhoods)
      updateLocation(event.label)
      updateDisplayLocation('location')
    }
  }

  const findPosition = async (event) => {
    updateLatitude(event.coords.latitude)
    updateLongitude(event.coords.longitude)
  }

  const neighborhoodChanged = (event) => {
    if (neighborhood.options[event.value]) {
      let subNeighborhoods = neighborhood.options[event.value].subOptions;
      if (subNeighborhoods) {
        updateSubNeighborhood(subNeighborhoods)
      }
      updateDisplaySubLocation('sub-location')
    }
    updateLocation(location + " " + event.label)
  }

  const subNeighborhoodChanged = (event) => {

    updateLocation(location + " " + event.label)
  }

  const moodPicked = (event) => {
    let mood = event.value
    updateSearchTerm(mood);
  }

  return (
    <div className='homepage-area'>
      <Dropdown dropdownOptions={DropdownConfiguration[0]} callbackFunction={moodPicked} />
      <Dropdown dropdownOptions={DropdownConfiguration[1]} callbackFunction={cityChanged} />
      <div className={displayLocation} >
        <Dropdown dropdownOptions={neighborhood} callbackFunction={neighborhoodChanged} />
      </div>
      <div className={displaySubLocation} >
        <Dropdown dropdownOptions={subNeighborhood} callbackFunction={subNeighborhoodChanged} />
      </div>
      <br />
      <Link style={props.style} className={(searchTerm == '' || location == '') ? 'go-button-disabled' : 'go-button'} to={`/results/${location}/${searchTerm}/${latitude}/${longitude}`}>Go</Link>
    </div>
  )
}
