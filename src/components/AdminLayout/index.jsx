import React from 'react'
import { Link, Outlet } from "react-router-dom";

import './style.css'

const AdminLayout = () => {
  return (
    <>
      <div className='admin'>
        <div className='admin__header'>
          <Link className='admin__header__name' to={''}>Панель администратора</Link>
        </div>
        <div className='admin-panel'>
          <div className='panel__nav'>
            <Link className='panel__nav__item' to={'adminBooking'}>Брони</Link>
            <Link className='panel__nav__item' to={'adminReviews'}>Отзывы</Link>
            <Link className='panel__nav__item' to={'adminRooms'}>Номера</Link>
          </div>
          <div className='panel__setting'>
          <Outlet/>
          </div>
        </div>

      </div>
    </>
  )
}

export {AdminLayout}