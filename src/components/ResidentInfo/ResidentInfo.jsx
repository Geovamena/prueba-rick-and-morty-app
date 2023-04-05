import React, {useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import './ResidentInfo.css'

const Card = ({ resident, number }) => {

  const [user, setUser] = useState(resident)
  const [bgColor, setBgColor] = useState("")

  const alien = useFetch(user, resident)

  useEffect(() => {
    if(alien?.status === "Alive"){
      return setBgColor("green");
    }

    if(alien?.status === "Dead"){
      return setBgColor("red");
    }

    else{
      return setBgColor("yellow")
    }
  }, [alien])
  

  return (
    <div className="card Character">
      <div className="headerCard">
        <img src={alien?.image}/>
      </div>
      <div className="userInfo">
        <span className='status'><div className="alive" style={{backgroundColor: bgColor}}/> <strong >{alien?.status}</strong></span>
        <h3>{alien?.name}</h3>
        <span>origin</span>
        <span><strong>{alien?.origin.name}</strong></span>
        <span>Episodes where appear</span>
        <span><strong>{alien?.episode.length}</strong></span>
      </div>
    </div>
  )
}

export default Card