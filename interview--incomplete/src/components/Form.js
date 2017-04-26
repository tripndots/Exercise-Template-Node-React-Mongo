import React from 'react'
import '../css.scss'

export default (props) => {
  return (
    <div style={props.style} className='form'>
      { props.heading ? <div className='form__heading'>{ props.heading }</div> : null }
      { props.children }
    </div>
  )
}
