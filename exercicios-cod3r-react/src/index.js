import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './components/PrimeiroComponente'
//import {CompA, CompB as B} from './components/DoisComponente'
import MultiElementos from './components/MultiElementos'
const elemento = document.getElementById('root')

ReactDOM.render(
  <div>
{/* <PrimeiroComponente valor = "bom dia" abcd = 'abcd coisa nenhuma'/> */}
{/* <CompA valor = 'Olá, eu sou o A'></CompA>
<B valor = 'B na área'/> */}
<MultiElementos/>

  </div>
,elemento)
