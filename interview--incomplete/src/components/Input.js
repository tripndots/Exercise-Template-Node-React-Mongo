import React from 'react'
import '../css.scss'

export default (props) => {
	function handleChange(e) {
		let placeholder = e.target.parentNode.getElementsByClassName('input__placeholder')[0];
		if(e.target.value !== '') {
			if(!(placeholder.classList.contains('input__placeholder--datain')))
				placeholder.classList.add('input__placeholder--datain')
		} else {
			placeholder.classList.remove('input__placeholder--datain')
		}
		props.onChange(e.target.name, e.target.value)
	}

	const style = {
		wrapper: {
			width: (props.width * 100) + '%'
		}
	}
	let Input;
	switch(props.type) {
		case 'select':
			Input = <select name={ props.name } onChange={ (e) => handleChange(e) } className="input">
						{ props.options ? props.options.map((option, i) => <option name={ option } key={ i }>{ option }</option>) : null }
					</select>
			break;
		case 'multiple':
			Input = <select name={ props.name } onChange={ (e) => handleChange(e) } multiple={ true } className="inputLG">
						{ props.options ? props.options.map((option, i) => <option name={ option } key={ i }>{ option }</option>) : null }
					</select>
			break;
		case 'area':
			Input = <textarea name={ props.name } onChange={ (e) => handleChange(e) } className="inputLG" />
			break;
		case 'file':
			Input = <input name={ props.name } type="file" className="input__file" />
			break;
		default:
			Input = <input name={ props.name } 	onLoad={ (e) => handleChange(e) } 
							onChange={ (e) => handleChange(e) } 
							className="input"></input>
	}

	let largeElement = props.type === 'multiple' || props.type === 'select' || props.type === 'file' || props.type === 'area';

	return (
		<div style={{ ...style.wrapper, ...props.style }} className={largeElement ? 'inputLG__wrapper' : 'input__wrapper'}>
			{ Input }
			{ props.children }
			<div className={largeElement ? "input__placeholder input__placeholder--datain" : "input__placeholder"}>
				{ props.placeholder }
			</div>
		</div>
	)
}