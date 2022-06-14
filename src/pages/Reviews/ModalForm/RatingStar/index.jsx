import React, {useState} from 'react'
import { AiFillStar } from "react-icons/ai";

import './style.css'

function RatingStar({rating, setRating}) {
  const [hover, setHover] = useState()

  return (
    <>
    {[...Array(5)].map((item, i) => {
      const ratingValue = i + 1

      return(
        <label key={ratingValue}>
          <input 
            type='radio' 
            name='rating' 
            value={ratingValue} 
            onClick={() => setRating(ratingValue)}
          />
          <AiFillStar 
            className='star' 
            fill={ratingValue <= rating ? '#FFB800' : '#C1C1C1'} 
            size={29}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover()}
          />
        </label>
      )
    })}
    </>
  )
}

export default RatingStar