import React from 'react'
import { storiesOf } from '@storybook/react';
import GoogleMaps from '../Components/GoogleMaps'


const style = {
  border: '10px solid yellow',
  width: '300px'
}

const style2 = {
  border: '10px solid green',
  width: '300px'
}

const address = 'New York City'

storiesOf('GoogleMaps', module)
  .add('Primary', () => <GoogleMaps address={address} style={style} />)
  .add('Secondary', () => <GoogleMaps address={address} style={style2} />)