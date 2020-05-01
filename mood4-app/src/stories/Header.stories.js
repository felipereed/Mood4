import React from 'react'
import { storiesOf } from '@storybook/react';
import Header from '../Components/Header'
import { BrowserRouter as Router } from 'react-router-dom'


const style = {
    backgroundColor: '#ed4c5f',
    color: 'black'
    
}


storiesOf('Header', module)
  .add('Primary', () => <Router><Header label="Header" style={style} /></Router>)





