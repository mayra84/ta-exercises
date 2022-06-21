import React from 'react'

export default function NameField(props) {
  return (
    <h2 className='nameField'>{props.first[0]}. {props.last}</h2>
  )
}
