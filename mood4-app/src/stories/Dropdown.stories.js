import React from 'react'
import { storiesOf } from '@storybook/react';
import Dropdown from '../Components/Dropdown'


const style = {

}

const style2 = {
  
}



const dropdownOptions = {
  title: 'title'
}
storiesOf('Dropdown', module)
  .add('Primary', () => <Dropdown dropdownOptions={dropdownOptions} style={style} />)
  .add('Secondary', () => <Dropdown style={style2} />)