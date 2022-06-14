import React, {useState, useEffect} from 'react'

import {useGetContactsQuery} from '../../../redux/dataApi'

import './style.css'
import './media-style.css'

function Footer() {
  const {data = [], isLoading} = useGetContactsQuery()

  if(isLoading) return <p>Loading...</p>
  
  return (
    <>
      {data.map(item => (
        <div className='footer' key={item.id}>
          <div className='footer__name'>Lavande</div>
          <div className='footer__text'>{item.address} / {item.email} / {item.phone} </div>
        </div>
      ))}
    </>
  )
}

export default Footer