import React from 'react'
import './Input.css'
const Input = (props) => {
  const {size = 'sm', children, ...rest} = props
  return (
    <input className={`input ${size} {...rest}`}/>
  )
}

export default Input 