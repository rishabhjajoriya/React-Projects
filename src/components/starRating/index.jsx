import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import './styles.css'

const StarRating = ({noofstars = 5}) => {

    const [rating, setrating] = useState(0);
    const [hover,sethover] = useState(0);

    function handleClick(index){
        setrating(index)
    }

    function handleMouseEnter(index){
        sethover(index)
    }

    function handleMouseLeave(index){
        sethover(rating)
    }
    

  return (

    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
      {
        
        [...Array(noofstars)].map((_,index) => {
            index += 1
            return <FaStar
            key = {index}
            className={index <= (rating || hover) ? 'active' : 'inactive'}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size = {40}
            />
        })

    }
    </div>
  )
}

export default StarRating
