import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='header'>
      <header>
        <Link to="/home"><img className='logo' src='https://i.imgur.com/z1jlCqY.png'></img></Link>
      </header>
    </div>
  )
}
