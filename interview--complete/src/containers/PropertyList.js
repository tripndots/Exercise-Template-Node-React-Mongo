import React from 'react'
import Form from '../components/Form'
import axios from 'axios'

import '../css.scss'
import PropertyLI from '../components/PropertyLI'

export default class PropertyList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			properties: []
		}
	}

	render() {
		return(
			<Form className="properties" style={ this.props.style } heading="Properties" >
				{ this.props.properties.map((property, i) => 
					<PropertyLI key={ i } property={ property } /> 
				)}
			</Form>
		);
	}
};

PropertyList.PropTypes = {
	properties: React.PropTypes.array
}

PropertyList.defaultProps = {
	properties: []
}