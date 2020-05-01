import React from 'react'
import { storiesOf } from '@storybook/react';
import Home from '../Components/Home'

const style = {
  backgroundColor: 'black'
}

const style2 = {

}




storiesOf('Home', module)
  .add('Primary', () => <Home style={style} />)
  .add('Secondary', () => <Home style={style2} />)

