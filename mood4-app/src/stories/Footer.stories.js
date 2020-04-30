import React from 'react'
import { storiesOf } from '@storybook/react';
import Footer from './Footer'
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';


const style = {
    backgroundColor: 'black',
    color: 'white',
    height: '50px',
    fontSize: '20px'
}
storiesOf('Footer', module)
  .add('Primary', () => <Footer label="Footer" style={style}/>)





