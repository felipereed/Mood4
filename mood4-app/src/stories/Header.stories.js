import React from 'react'
import { storiesOf } from '@storybook/react';
import Header from '../Components/Header'



const style = {
    backgroundColor: 'white',
    color: 'black',
    height: '50px',
    fontSize: '20px'
    
}

const style2 = {
  backgroundColor: 'black',
  color: 'white',
  height: '50px',
  fontSize: '20px'
}


storiesOf('Header', module)
  .add('Primary', () => <Header label="Header" style={style} />)
  .add('Secondary', () => <Header label="Header" style={style2}/>)





