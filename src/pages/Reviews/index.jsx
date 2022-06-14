import React, {useState} from 'react'

import './style.css'
import './media-style.css'

import From from './ModalForm'
import RatingStar from './RatingStar'
import {useGetReviewsQuery} from '../../redux/dataApi'

function Reviews() {
  const [formActive, setFormActive] = useState(false)
  const {data = [], isLoading} = useGetReviewsQuery()

  if(isLoading) return <p>loading...</p>

  const dropDown = () => {
    document.getElementById("Drop_Rules").classList.toggle("active")
  }

  return (
    <div className='reviews'>
      <div className='reviews__name'>Отзывы</div>
      <div className='reviews__new'>
        <div className='reviews__new__button' onClick={() => setFormActive(true)}>Написать отзыв</div>
        <a className='reviews__new__name' onClick={dropDown}>Правила написания отзывов</a>
        <ol className='reviews__new__rules' id='Drop_Rules'>
          <li>Требования к содержанию Отзыва:
            <ol>
              <li>Отзыв содержит информацию только о курортном доме.</li>
              <li>Отзыв описывает положительные или отрицательные качества, отражает мнение гостя и описывает опыт проживания.</li>
            </ol>
          </li>
          <li>Отклоняются и не публикуются Отзывы следующего содержания:
            <ol>
              <li>Содержащие ненормативную лексику.</li>
              <li>Содержащие оскорбления либо неуважительные высказывания в отношении кого-либо.</li>
              <li>Содержащие призывы и пропаганду, разжигающие все виды розней, подстрекательства, издевательства, домогательства, угрозы, запугивания, вымогательства, попрошайничество и другие высказывания, нарушающие действующее Законодательство РФ.</li>
              <li>Содержащие обсуждение цены (если вас не устраивает цена, либо вы считаете её неправильной, свяжитесь с нами по телефону).</li>
              <li>Содержащие любые контактные данные (ФИО, номера телефонов, адреса, email, рекламные, спам и вирус-ссылки и т.д.).</li>
            </ol>
          </li>
        </ol>
      </div>
      <From active={formActive} setActive={setFormActive}/>
      {data.map(item => (
        <div className='review' key={item.id}>
          <div className='review__item'>
            <div className='review__item__name'>{item.name}</div>
            <div className='review__item__time'>{item.time}</div>
            <RatingStar rating={item.rating}/>
            <div className='review__item__text'>{item.comment}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export {Reviews}