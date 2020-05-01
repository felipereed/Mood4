import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div className='header'>
      <header>
        <Link style={props.style} to="/home"><img className='logo' src='https://i.imgur.com/z1jlCqY.png'></img></Link>
      </header>
    </div>
  )
}




