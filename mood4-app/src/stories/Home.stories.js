import React from 'react'
import { storiesOf } from '@storybook/react';
import Home from '../Components/Home'
import { BrowserRouter as Router } from 'react-router-dom'

const style = {
  backgroundColor: '#ed4c5f'
}

const style2 = {
  backgroundColor: 'blue'
}




storiesOf('Home', module)
  .add('Primary', () => <Router><Home style={style} /></Router>)
  .add('Secondary', () => <Router><Home style={style2} /></Router>)

