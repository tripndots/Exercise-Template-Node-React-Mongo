import React from 'react'
import Form from '../components/Form'
import Input from '../components/Input'
import Button from '../components/Button'
import states from '../components/States'

import '../css.scss'

export default class AddProperty extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {
        address: '',
        state: '',
        zip: ''
      }
    }
  }

    // Save Form Input Changes into State
  handleChange (name, value) {
    let data = this.state.data
    data[name] = value
    this.setState({ data })
  }

  render () {
    return (
      <Form className={this.props.className} style={this.props.style} heading='Add New Property'>
        <Input onChange={(name, value) => this.handleChange(name, value)} width='1' name='address' placeholder='Address' />
        <Input onChange={(name, value) => this.handleChange(name, value)} type='select' options={states}
          width='.5' name='state' placeholder='State' />
        <Input onChange={(name, value) => this.handleChange(name, value)} width='.5' name='zip' placeholder='Zip' />
        <Button onClick={() => this.props.handleAdd(this.state.data)} iconClass='fa fa-plus' className='button__primary'>ADD</Button>
      </Form>
    )
  }
};

AddProperty.propTypes = {
  handleAdd: React.PropTypes.func
}

AddProperty.defaultProps = {
  handleAdd: () => {}
}
