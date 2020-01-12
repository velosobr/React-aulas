import React from 'react'

import Filho from './Filho'

export default props => {
  const notificaSaidaDoFilho =
    lugar => alert(`Liberado para ${lugar}`)

  return (
    <div>
      <Filho notificarSaida={notificaSaidaDoFilho} />
    </div>
  )
}