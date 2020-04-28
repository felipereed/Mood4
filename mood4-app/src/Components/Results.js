import React, { useState, useEffect } from 'react';
import '../Styles/Results.css'
import Dropdown from './Dropdown';
import DropdownConfiguration from "../DropdownConfiguration.json"
import axios from 'axios'
import Detail from './Detail';

export default function Results({searchTerm, location}) {
  const [filter, updateFilter] = useState([])
  const [displayFilter, updateDisplayFilter] = useState('specific-filter-hidden')
  const [apiResults, updateApiResults] = useState([])
  const [filterValue, updateFilterValue] = useState([])
  useEffect(() => {
    if (searchTerm === 'restaurants') {
      updateFilter(DropdownConfiguration[2])
      updateDisplayFilter('specific-filter')
    } else if (searchTerm === 'shows') {
      updateFilter(DropdownConfiguration[3])
      updateDisplayFilter('specific-filter')
    } else if (searchTerm === 'bars') {
      updateFilter(DropdownConfiguration[4])
      updateDisplayFilter('specific-filter')
    } else {
      updateResults(searchTerm)
    }
  }, [])
  //this is the API key formatted for the authorization header
  const API_KEY = 'Bearer 4xXf6b67EXTMd9Mw4WkHO4-ivhSa7wSi252Lsi0Zvgs5FmNaSQVE2oTPH_1_tji5mVhZ4qhN_aq-jjGsK6Nrcgwic7UxQmaZNaEG43X_n5L054fE5WlbUdAMqgKJXnYx';
  //Add CORS authorization code Corey sent plus the base API url
  const BASE_URL = 'https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?limit=50';

  const randomlySelectSpliceItem = (myArray) => {
    console.log(myArray)
    let randomIndex = Math.floor(Math.random() * myArray.length)
    return myArray.splice(randomIndex, 1)
  }
  const apiCall = async (apiSearchTerm) => {
    // get search term and location
    let urlWithParameter = BASE_URL + `&term=${apiSearchTerm}&location=${location}`;

    // add header to axios solution https://github.com/axios/axios/issues/1744
    let response = await axios.get(urlWithParameter, {
      headers: {
        'Authorization': API_KEY
      }

    });

    console.log(response);
    //returns the response from the API 
    return response.data.businesses;
  }

  const updateResults = async (apiSearchTerm) => {
  
    let apiResults = await apiCall(apiSearchTerm)
    let randomResults = []
    for (let i = 0; i < 10; i++)
    {
      randomResults.push(randomlySelectSpliceItem(apiResults))
    }
    updateApiResults(randomResults)
  }

  const updateFilterDropdown = (event) => {
    console.log(event)
    updateFilterValue(event.value)
    updateResults(event.value + " " + searchTerm)
  }


  return (
    <div className='result-page'>
      <div className={displayFilter}>
        <Dropdown dropdownOptions={filter} callbackFunction={updateFilterDropdown} />
      </div>
      <div>
        {apiResults.map((result, id) =>
          <Detail details={result} key={id} />
        )}
      </div>
    </div>
  )
}
