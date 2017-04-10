import React from 'react'
import Form from '../components/Form'
import Input from '../components/Input'
import Button from '../components/Button'

import '../css.scss'

export default class AddProperty extends React.Component {
	constructor(props) {
        super(props);
        this.state ={
            data: {
                address: '',
                state: '',
                zip: ''
            }
        }   
    }

    // Save Form Input Changes into State
    handleChange(name, value) {
        let data = this.state.data
        data[name] = value;
        this.setState({ data })
    }

    render() {
		let stateOptions = [ "AK - Alaska", 
                        "AL - Alabama", 
                        "AR - Arkansas", 
                        "AS - American Samoa", 
                        "AZ - Arizona", 
                        "CA - California", 
                        "CO - Colorado", 
                        "CT - Connecticut", 
                        "DC - District of Columbia", 
                        "DE - Delaware", 
                        "FL - Florida", 
                        "GA - Georgia", 
                        "GU - Guam", 
                        "HI - Hawaii", 
                        "IA - Iowa", 
                        "ID - Idaho", 
                        "IL - Illinois", 
                        "IN - Indiana", 
                        "KS - Kansas", 
                        "KY - Kentucky", 
                        "LA - Louisiana", 
                        "MA - Massachusetts", 
                        "MD - Maryland", 
                        "ME - Maine", 
                        "MI - Michigan", 
                        "MN - Minnesota", 
                        "MO - Missouri", 
                        "MS - Mississippi", 
                        "MT - Montana", 
                        "NC - North Carolina", 
                        "ND - North Dakota", 
                        "NE - Nebraska", 
                        "NH - New Hampshire", 
                        "NJ - New Jersey", 
                        "NM - New Mexico", 
                        "NV - Nevada", 
                        "NY - New York", 
                        "OH - Ohio", 
                        "OK - Oklahoma", 
                        "OR - Oregon", 
                        "PA - Pennsylvania", 
                        "PR - Puerto Rico", 
                        "RI - Rhode Island", 
                        "SC - South Carolina", 
                        "SD - South Dakota", 
                        "TN - Tennessee", 
                        "TX - Texas", 
                        "UT - Utah", 
                        "VA - Virginia", 
                        "VI - Virgin Islands", 
                        "VT - Vermont", 
                        "WA - Washington", 
                        "WI - Wisconsin", 
                        "WV - West Virginia", 
                        "WY - Wyoming"
                        ]
		return(
			<Form style={ this.props.style } heading="Add New Property">
				<Input onChange={ (name, value) => this.handleChange(name, value) } width="1" name="address" placeholder="Address" />
				<Input onChange={ (name, value) => this.handleChange(name, value) } type="select" options={ stateOptions } 
					   width=".5" name="state" placeholder="State" />
				<Input onChange={ (name, value) => this.handleChange(name, value) } width=".5" name="zip" placeholder="Zip" />
				<Button onClick={ () => this.props.handleAdd(this.state.data) } iconClass="fa fa-plus" className="button__primary">ADD</Button>
			</Form>
		);
	}
};

AddProperty.propTypes = {
    handleAdd: React.PropTypes.func
}

AddProperty.defaultProps = {
    handleAdd: () => {}
}
