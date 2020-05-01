import React from 'react'
import { storiesOf } from '@storybook/react';
import Dropdown from '../Components/Dropdown'

const style = {
  backgroundColor: 'yellow'
}

const style2 = {
  backgroundColor: 'green'
}

const dropdownOptions = {
  title: 'title'
}
storiesOf('Dropdown', module)
  .add('Primary', () => <Dropdown dropdownOptions={dropdownOptions} style={style} />)
  .add('Secondary', () => <Dropdown dropdownOptions={dropdownOptions} style={style2} />)