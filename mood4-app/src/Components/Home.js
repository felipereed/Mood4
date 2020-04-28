import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown'
import '../Styles/Home.css'
import DropdownConfiguration from "../DropdownConfiguration.json"
import { Link } from 'react-router-dom';



export default function Home() {
  const [neighborhood, updateNeighborhood] = useState([])
  const [subNeighborhood, updateSubNeighborhood] = useState([])
  const [location, updateLocation] = useState([])
  const [searchTerm, updateSearchTerm] = useState([])
  const [linkClass, updateLinkClass] = useState('go-button-disabled')
  const [displayLocation, updateDisplayLocation] = useState('location-hidden')
  const [displaySubLocation, updateDisplaySubLocation] = useState('sub-location-hidden')
  useEffect(() => {
  }, [])
  const appCallBack = () => {
    console.log('changed')
  }
  const cityChanged = (event) => {
    console.log(event)
    
    // use my location
    if (event.value == 0) {
      
    }
    else {
      let neighborhoods = DropdownConfiguration[1].options[event.value].neighborhoods;
      updateNeighborhood(neighborhoods)
      updateLocation(DropdownConfiguration[1].options[event.value].label)
      updateDisplayLocation('location')
    }
  }

  const neighborhoodChanged = (event) => {
    let subNeighborhoods = neighborhood.options[event.value].subOptions;
    if (subNeighborhoods) {
      updateSubNeighborhood(subNeighborhoods)
    }
    updateLocation(location + " " + neighborhood.options[event.value].label)
    updateLinkClass('go-button')
    updateDisplaySubLocation('sub-location')
  }

  const subNeighborhoodChanged = (event) => {
    
    updateLocation(location + " " + event.value)
  }

  const moodPicked = (event) => {
    let mood = event.value
    updateSearchTerm(mood);
  }

  return (
    <div className='homepage-area'>
      <Dropdown dropdownOptions={DropdownConfiguration[0]} callbackFunction={moodPicked}/>
      <Dropdown dropdownOptions={DropdownConfiguration[1]} callbackFunction={cityChanged} />
      <div className={displayLocation} >
        <Dropdown dropdownOptions={neighborhood} callbackFunction={neighborhoodChanged} />
      </div>
      <div className={displaySubLocation} >
        <Dropdown dropdownOptions={subNeighborhood} callbackFunction={subNeighborhoodChanged} />
      </div>
      <Link className={linkClass} to={`/results/${location}/${searchTerm}`}>Go</Link>
    </div>
  )
}
