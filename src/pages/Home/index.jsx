import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Rules from '../../components/Rules'
import MainSlider from './Slider'
import MapY from './Map'
import {useGetTextsQuery} from '../../redux/dataApi'

import './style.css'
import './media-style.css'

function Home() {
  const booking = useRef(null)
  const {data = [], isLoading} = useGetTextsQuery()

  if (isLoading) return <p>Loading...</p>

  const scrollToLink = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className='background'></div>
      <div className='hello'>
        <div className='h'>
          <div className='hello__name'>Lavande</div>
          <div className='hello__text'>Курортный дом на Азовскм море</div>
          <div 
            className='hello__button'
            onClick={() => scrollToLink(booking)}>Забронировать</div>  
        </div>
      </div>
      {data.map(item => (
        <div className='description'>
          <div className='description__name'>{item.descriptionHomeName}</div>
          <div className='description__text'>{item.descriptionHomeText}</div>
        </div>
      ))}
      
      <MainSlider/>
      {data.map(item => (
        <div className='benefits'>
          <div className='benefits__main'>
            <div className='benefits__main__name'>{item.oneBlockName}</div>
            <div className='benefits__main__text'>{item.oneBlockText}</div>
          </div>
          <div className='benefits__rooms'>
            <div className='benefits__main__name'>{item.twoBlockName}</div>
            <div className='benefits__main__text'>{item.twoBlockText}</div>
          </div>
        </div>
      ))}
      <div className='rooms__item'>  
        <Link className='rooms__item__link' to='/room/4'>
          <div className='rooms__item__body photo_f'>
            <div className='backout'></div>
            <div className='item__description__name'>Четырехместный</div>
          </div>
        </Link>
        <Link className='rooms__item__link' to='/room/3'>
          <div className='rooms__item__body photo_t'>
            <div className='backout'></div>
            <div className='item__description__name'>Трехместный</div>
          </div>
        </Link>
      </div>
      <div className='booking' ref={booking}>
        <div className='booking__name'>Забронируйте номер сейчас</div>
        <div className="hotelBdraivForm" data-online="1" data-frame_width="100" data-frame_height="100" data-online_full="1" data-frame_src="https://otelix.pro/bookOnline/6z8/t-343" data-class_frame_src="https://otelix.pro/bookOnline/6z8/t-343/c-otelixClass" >&nbsp;</div>
        <Rules/>
      </div>
      <MapY/>
    </>
  )
}

export {Home}