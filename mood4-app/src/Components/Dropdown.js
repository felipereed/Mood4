import React from 'react'
import Select from 'react-select'
import '../Styles/Dropdown.css'

export default function Dropdown({ dropdownOptions, callbackFunction, styles }) {
  return (
    <div style={styles} className='dropdown-desk-menu' >
      <h5>{dropdownOptions.title}</h5>
      <Select 
        className='selector'
        placeholder='Please select one'
        onChange={callbackFunction}
        options={dropdownOptions.options}
      />
    </div>
  )
}
