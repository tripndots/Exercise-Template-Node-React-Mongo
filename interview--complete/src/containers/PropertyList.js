import React from 'react'
import Form from '../components/Form'

import '../css.scss'
import PropertyLI from '../components/PropertyLI'

export default class PropertyList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      properties: []
    }
  }

  render () {
    return (
      <Form className={this.props.className} style={this.props.style} heading='Properties' >
        { this.props.properties.map((property, i) =>
          <PropertyLI key={i} property={property} />
        )}
      </Form>
    )
  }
};

PropertyList.propTypes = {
  properties: React.PropTypes.array
}

PropertyList.defaultProps = {
  properties: []
}
