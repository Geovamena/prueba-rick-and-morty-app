import React from 'react'
import './Location.css'

const Location = ({planet}) => {

  return (
    <section className='headerCards'>
    <div className="planetName">{planet?.name}</div>
    <div className='planetType'>
      <li><span>Type: </span><strong>{planet?.type}</strong></li>
      <li><span>Dimension: </span><strong>{planet.dimension}</strong></li>
      <li><span>Population: </span><strong>{planet.residents.length}</strong></li>
    </div>
  </section>
  )
}

export default Location