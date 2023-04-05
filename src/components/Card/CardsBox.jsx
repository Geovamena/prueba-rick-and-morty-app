import React, {useState} from 'react'
import ResidentInfo from '../ResidentInfo/ResidentInfo'
import Location from '../Locations/Location'
import Pagination from '../Pagination/Pagination'
import './Card.css'

const CardsBox = ({ planet, number }) => {
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(6)

    const maximum = Math.ceil(planet.residents.length / perPage)
  
  console.log(planet.residents)

  return (
    <div id='cardsBox'>
      <section id='cardContainer' className='cardContainer'>
        <Location planet={planet} />
        {planet && planet.residents.slice(
          (page -1) * perPage,
          (page -1) * perPage + perPage
        ).map((resident) =>
          <ResidentInfo 
            key={resident} 
            resident={resident} 
            number={number} 
          />)}
      </section>
      <Pagination 
        page={page} 
        setPage={setPage} 
        maximum={maximum}
      />
    </div>
  )
}

export default CardsBox