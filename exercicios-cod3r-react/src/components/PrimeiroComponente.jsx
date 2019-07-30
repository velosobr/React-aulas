import React from 'react'

let isLegal = true

export default (props) => 
<div>
  <h1>{props.valor} </h1>
  <h1>{props.abcd} </h1>
  <h2>valor de 2²= {2**2}</h2>
  <p>Legal? { isLegal ? 'sim': 'não'}</p>
  <p>{Math.random()}</p>
</div>
