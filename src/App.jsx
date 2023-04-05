import axios from 'axios'
import { useState } from 'react'
import './App.css'
import CardsBox from './components/Card/CardsBox'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import useFetch from './hooks/useFetch'

function App() {
  let numRandom = Math.floor(Math.random() * 126)

  const [number, setNumber] = useState(numRandom)

  const planet = useFetch(`https://rickandmortyapi.com/api/location/${number}`, number)

  return (
    <div className="App">
     
      <Header />
      <section id='main'>
        {planet && <Search planet={planet} setNumber={setNumber} numRandom={numRandom}  />}
        {planet && <CardsBox planet={planet} number={number} />}
      </section>
    </div>
  )
}

export default App
