import React, {useState} from 'react'
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import './media-style.css'

function MobileNav() {
  const [isOpen, setIsOpen] = useState('')
  console.log(isOpen)
  return (
    <div className='header__nav'>
      <AiOutlineMenu 
        className='nav__menu'
        onClick={() => setIsOpen('active')}
      />
      <div className={`nav ${isOpen}`}>
        <AiOutlineClose className='nav__close' onClick={() => setIsOpen('')}/>
        <Link className='header__nav__text' onClick={() => setIsOpen('')} to='/rooms'>Номера</Link>
        <Link className='header__nav__text' onClick={() => setIsOpen('')} to='/reviews'>Отзывы</Link>
        <Link className='header__nav__text' onClick={() => setIsOpen('')} to='/contacts'>Контакты</Link>
      </div>
      <div className={`nav__background ${isOpen}`} onClick={() => setIsOpen('')}></div>
    </div>
  )
}

export default MobileNav