import React from 'react'

function Funcprop(props) {
  return (
    <div><h2>Funcprop{props.name}</h2>
    {props.children}
    </div>
  )
}

export default Funcprop