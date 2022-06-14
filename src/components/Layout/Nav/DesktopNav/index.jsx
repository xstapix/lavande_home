import React from 'react'
import { Link } from "react-router-dom";

function DesktopNav() {
  return (
    <div className='header__nav'>
      {/* <Link className='header__nav__text' to='/rooms'>Номера</Link> */}
      <Link className='header__nav__text' to='/reviews'>Отзывы</Link>
      <Link className='header__nav__text' to='/contacts'>Контакты</Link>
    </div>
  )
}

export default DesktopNav