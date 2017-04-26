import React from 'react'
import axios from 'axios'
import Promise from 'bluebird'

import PropertyList from './PropertyList'
import AddProperty from './AddProperty'

import '../css.scss'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      properties: []
    }
  }

  // make an http get request to '/api/properties'
  // set the return data as the property state
  // an initial property is shown for you
  componentWillMount () {
    let properties = [{ address: '4561 Kingly Dr', state: 'AK - Alaska', zip: '89425' }]
    this.setState({ properties })
  }

  // onClick of the <Button /> in <AddProperty />
  // Make a Post Request to '/api/properties' using passed data saved in state
  // Respond to the Request with the Updated Data via /api/properties.js file
  handleAdd () {
    console.log('You have entered handleAdd!!')
  }

  render () {
    return (
      <section className='app__wrapper'>
        <PropertyList properties={this.state.properties}
          style={{ width: '42%', margin: '0px 4%' }} />
        <AddProperty handleAdd={() => console.log('button clicked!')}
          style={{ width: '42%', margin: '0px 4%' }} />
      </section>
    )
  }
};
