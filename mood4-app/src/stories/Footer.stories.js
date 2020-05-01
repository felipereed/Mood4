import React from 'react'
import { storiesOf } from '@storybook/react';
import Footer from '../Components/Footer'



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


storiesOf('Footer', module)
  .add('Primary', () => <Footer label="Footer" style={style} />)
  .add('Secondary', () => <Footer label="Footer" style={style2}/>)





