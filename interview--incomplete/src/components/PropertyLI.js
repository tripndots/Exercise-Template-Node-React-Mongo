import React from 'react'
import '../css.scss'

export default (props) => {
  return (
    <div className='propertyListItem__wrapper'>
      <div className='propertyListItem__address'>{ props.property.address }</div>
      <div className='propertyListItem__state'>{ props.property.state }</div>
      <div className='propertyListItem__zip'>{ props.property.zip }</div>
    </div>
  )
}
