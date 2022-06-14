import React, {useRef} from 'react'
import { Link, Outlet } from "react-router-dom";
import Media from 'react-media';

import DesktopNav from './Nav/DesktopNav'
import MobileNav from './Nav/MobileNav'
import Footer from './Footer'

import './style.css'
import './media-style.css'

function Layout() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='allBackground'>
      <div className='header'>
        <div className='header__body'>
          <Link 
            className='header__name' 
            to='/' 
            onClick={scrollToTop}>Lavande</Link>
          <Media query="(min-width: 428px)">
            {matchers => {
              return matchers ? <DesktopNav /> : <MobileNav />
            }}
          </Media>
        </div>
      </div>
    
      <Outlet />
      
      <Footer/>
    </div>
  )
}

export {Layout}