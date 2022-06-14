import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './style.css'
import './media-style.css'

import prev from './img/arrow/prev.svg'
import next from './img/arrow/next.svg'

import {data} from './db'

function MainSlider() {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style}}
        onClick={onClick}
        src={next}
      />
    );
  }

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ ...style}}
        onClick={onClick}
        src={prev}
      />
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Slider {...settings}>
      {data.map(item => (
        <img src={item}/>
      ))}
    </Slider>
  )
}

export default MainSlider