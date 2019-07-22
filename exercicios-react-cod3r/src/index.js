import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './components/PrimeiroComponente'
import PrimeiroComponenteArrow from './components/PrimeiroComponenteArrow' 
const elemento = document.getElementById('root')

const jsx = <h1>Olá React</h1>

ReactDOM.render(
    <div>
        <PrimeiroComponenteArrow />
    </div>
    , elemento)
