import React from 'react'
import axios from 'axios'

import PropertyList from './PropertyList'
import AddProperty from './AddProperty'

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			properties: []
		}
	}

	componentWillMount() {
		axios.get('/api/properties')
			.then(res => {
				this.setState({ properties: res.data })
			})
			.catch(err => {
				console.log(err)
			})
	}

	handleAdd(property) {
		axios.post('/api/properties', property)
			.then(res => {
				this.setState({ properties: res.data })
			})
			.catch(err => {
				console.log(err)
			})
	}

	render() {
		return(
			<section className="app__wrapper">
				<PropertyList properties={ this.state.properties } style={{ width: '42%', margin: '0px 4%' }} />
				<AddProperty handleAdd={ (property) => this.handleAdd(property) } style={{ width: '42%', margin: '0px 4%' }} />
			</section>
		);
	}
};