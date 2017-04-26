import React from 'react'
import '../css.scss'

export default (props) => {
  let style = {
    wrapper: {}
  }
  style.wrapper.borderRadius = props.square ? 0 : 4
  return (
    <button style={{ ...style.wrapper, ...props.style }} className={props.className} onClick={props.onClick}>
      { props.iconClass ? <i style={{ marginRight: '.5rem' }} className={props.iconClass} /> : null }
      { props.children }
    </button>
  )
}
